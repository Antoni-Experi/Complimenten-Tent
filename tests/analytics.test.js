import test from 'node:test'
import assert from 'node:assert/strict'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'

import { createAnalytics } from '../src/analytics.js'

test('analytics is inert without Supabase config', async () => {
  const client = createFakeClient()
  const analytics = createAnalytics({
    env: {},
    storage: createMemoryStorage(),
    cryptoSource: createStableCrypto(),
    client: null,
  })

  assert.equal(await analytics.trackAppOpen(), false)
  assert.equal(client.calls.length, 0)
})

test('app_open is recorded at most once per browser session', async () => {
  const client = createFakeClient()
  const analytics = createAnalytics({
    storage: createMemoryStorage(),
    cryptoSource: createStableCrypto(),
    client,
  })

  assert.equal(await analytics.trackAppOpen(), true)
  assert.equal(await analytics.trackAppOpen(), false)

  assert.equal(client.calls.length, 1)
  assert.deepEqual(client.calls[0].row, {
    event_name: 'app_open',
    target_id: null,
    compliment_id: null,
    session_id: '11111111-1111-4111-8111-111111111111',
  })
})

test('target_selected sends only target_id and session id', async () => {
  const client = createFakeClient()
  const analytics = createAnalytics({
    storage: createMemoryStorage(),
    cryptoSource: createStableCrypto(),
    client,
  })

  assert.equal(await analytics.trackTargetSelected('person-03'), true)
  assert.deepEqual(client.calls[0].row, {
    event_name: 'target_selected',
    target_id: 'person-03',
    compliment_id: null,
    session_id: '11111111-1111-4111-8111-111111111111',
  })
})

test('compliment_selected sends target_id, compliment_id and session id', async () => {
  const client = createFakeClient()
  const analytics = createAnalytics({
    storage: createMemoryStorage(),
    cryptoSource: createStableCrypto(),
    client,
  })

  assert.equal(await analytics.trackComplimentSelected('person-07', 'compliment-07'), true)
  assert.deepEqual(client.calls[0].row, {
    event_name: 'compliment_selected',
    target_id: 'person-07',
    compliment_id: 'compliment-07',
    session_id: '11111111-1111-4111-8111-111111111111',
  })
})

test('analytics errors do not reject or block the flow', async () => {
  const analytics = createAnalytics({
    storage: createMemoryStorage(),
    cryptoSource: createStableCrypto(),
    client: createFakeClient({ throws: true }),
  })

  assert.equal(await analytics.trackComplimentSelected('person-01', 'compliment-01'), false)
})

test('corrupt sessionStorage causes no crash', async () => {
  const client = createFakeClient()
  const storage = createMemoryStorage({
    'complimentenTentAnalyticsSession:v1': 'kapot',
  })
  const analytics = createAnalytics({
    storage,
    cryptoSource: createStableCrypto('22222222-2222-4222-8222-222222222222'),
    client,
  })

  assert.equal(await analytics.trackTargetSelected('person-02'), true)
  assert.equal(client.calls[0].row.session_id, '22222222-2222-4222-8222-222222222222')
})

test('frontend code and committed config do not contain service-role secrets', () => {
  const files = [
    ...listFiles('src', []),
    ...listFiles('supabase', ['.temp']),
    'package.json',
  ]
  const forbidden = /SUPABASE_SERVICE_ROLE_KEY|service[_-]?role|supabase_service|postgres(?:ql)?:\/\/|JWT_SECRET/i

  for (const file of files) {
    assert.doesNotMatch(readFileSync(file, 'utf8'), forbidden, file)
  }
})

function createFakeClient({ throws = false, error = null } = {}) {
  const calls = []

  return {
    calls,
    from(table) {
      return {
        async insert(row) {
          calls.push({ table, row })

          if (throws) {
            throw new Error('network down')
          }

          return { error }
        },
      }
    },
  }
}

function createMemoryStorage(initial = {}) {
  const values = new Map(Object.entries(initial))

  return {
    getItem(key) {
      return values.get(key) || null
    },
    setItem(key, value) {
      values.set(key, String(value))
    },
  }
}

function createStableCrypto(uuid = '11111111-1111-4111-8111-111111111111') {
  return {
    randomUUID() {
      return uuid
    },
  }
}

function listFiles(directory, ignoredDirectories) {
  const files = []

  for (const entry of readdirSync(directory)) {
    if (ignoredDirectories.includes(entry)) {
      continue
    }

    const fullPath = join(directory, entry)
    const stat = statSync(fullPath)

    if (stat.isDirectory()) {
      files.push(...listFiles(fullPath, ignoredDirectories))
    } else {
      files.push(fullPath)
    }
  }

  return files
}
