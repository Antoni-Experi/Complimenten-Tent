import test from 'node:test'
import assert from 'node:assert/strict'

import { eventConfig, getSortedPeople, pickUniqueCompliments } from '../src/data.js'
import { pickAnimation } from '../src/animations.js'

test('prototype has exactly eight temporary figures', () => {
  const people = getSortedPeople()

  assert.equal(people.length, 8)
  assert.deepEqual(
    people.map((person) => person.sortOrder),
    [1, 2, 3, 4, 5, 6, 7, 8],
  )
})

test('each figure has enough complete local compliments', () => {
  for (const person of getSortedPeople()) {
    assert.ok(person.image.startsWith('data:image/svg+xml,'))
    assert.ok(person.displayName.length > 0)
    assert.ok(person.compliments.length >= 8)

    for (const compliment of person.compliments) {
      assert.match(compliment.message, /[.!?]$/)
      assert.ok(compliment.message.length > 24)
    }
  }
})

test('compliment picker returns three unique options', () => {
  const [person] = getSortedPeople()
  const picked = pickUniqueCompliments(person, 3, () => 0.41)

  assert.equal(picked.length, 3)
  assert.equal(new Set(picked.map((compliment) => compliment.id)).size, 3)
})

test('mission config remains local-only prototype data', () => {
  assert.equal(eventConfig.slug, 'wildeburg-2026')
  assert.equal(
    eventConfig.intro,
    'Proficiat: je bent uitverkoren om op Wildeburg op zoek te gaan naar één van de 8 volgende figuren.',
  )
  assert.ok(eventConfig.defaultReward.length > 0)
  assert.equal('cta' in eventConfig, false)
})

test('animation picker exposes exactly the three approved variants', () => {
  assert.equal(pickAnimation(() => 0), 'love')
  assert.equal(pickAnimation(() => 0.4), 'neon')
  assert.equal(pickAnimation(() => 0.8), 'absurd')
})
