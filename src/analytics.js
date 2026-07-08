import { createClient } from '@supabase/supabase-js'

const sessionKey = 'complimentenTentAnalyticsSession:v1'
const appOpenKey = 'complimentenTentAnalyticsAppOpen:v1'
const allowedEvents = new Set(['app_open', 'target_selected', 'compliment_selected'])

export function createAnalytics({
  env = import.meta.env || {},
  storage = getSessionStorage(),
  cryptoSource = globalThis.crypto,
  client = createSupabaseClient(env),
} = {}) {
  function getSessionId() {
    const existingSessionId = safeGet(storage, sessionKey)

    if (isUuid(existingSessionId)) {
      return existingSessionId
    }

    const sessionId = createSessionId(cryptoSource)
    safeSet(storage, sessionKey, sessionId)
    return sessionId
  }

  async function record(eventName, { targetId = null, complimentId = null } = {}) {
    if (!client || !allowedEvents.has(eventName)) {
      return false
    }

    try {
      const { error } = await client.from('usage_events').insert({
        event_name: eventName,
        target_id: targetId,
        compliment_id: complimentId,
        session_id: getSessionId(),
      })

      return !error
    } catch {
      return false
    }
  }

  return {
    trackAppOpen() {
      if (safeGet(storage, appOpenKey) === 'sent') {
        return Promise.resolve(false)
      }

      safeSet(storage, appOpenKey, 'sent')
      return record('app_open')
    },
    trackTargetSelected(targetId) {
      return record('target_selected', { targetId })
    },
    trackComplimentSelected(targetId, complimentId) {
      return record('compliment_selected', { targetId, complimentId })
    },
  }
}

const analytics = createAnalytics()

export function trackAppOpen() {
  void analytics.trackAppOpen()
}

export function trackTargetSelected(targetId) {
  void analytics.trackTargetSelected(targetId)
}

export function trackComplimentSelected(targetId, complimentId) {
  void analytics.trackComplimentSelected(targetId, complimentId)
}

function createSupabaseClient(env) {
  const url = env.VITE_SUPABASE_URL
  const key = env.VITE_SUPABASE_PUBLISHABLE_KEY

  if (!url || !key) {
    return null
  }

  return createClient(url, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  })
}

function getSessionStorage() {
  try {
    return globalThis.sessionStorage || null
  } catch {
    return null
  }
}

function safeGet(storage, key) {
  try {
    return storage?.getItem(key) || null
  } catch {
    return null
  }
}

function safeSet(storage, key, value) {
  try {
    storage?.setItem(key, value)
  } catch {
    // Analytics storage is best effort only.
  }
}

function createSessionId(cryptoSource) {
  if (cryptoSource?.randomUUID) {
    return cryptoSource.randomUUID()
  }

  const bytes = new Uint8Array(16)

  if (cryptoSource?.getRandomValues) {
    cryptoSource.getRandomValues(bytes)
  } else {
    for (let index = 0; index < bytes.length; index += 1) {
      bytes[index] = Math.floor(Math.random() * 256)
    }
  }

  bytes[6] = (bytes[6] & 0x0f) | 0x40
  bytes[8] = (bytes[8] & 0x3f) | 0x80

  const hex = [...bytes].map((byte) => byte.toString(16).padStart(2, '0')).join('')
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`
}

function isUuid(value) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    value || '',
  )
}
