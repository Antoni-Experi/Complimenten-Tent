import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'

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
  const expectedImages = Array.from(
    { length: 8 },
    (_, index) => `/images/people/person-${String(index + 1).padStart(2, '0')}.webp`,
  )
  const expectedPositions = [
    '50% 34%',
    '50% 10%',
    '50% 10%',
    '50% 10%',
    '50% 10%',
    '50% 14%',
    '50% 10%',
    '50% 10%',
  ]

  for (const [index, person] of getSortedPeople().entries()) {
    assert.equal(person.image, expectedImages[index])
    assert.equal(person.imagePosition, expectedPositions[index])
    assert.equal(existsSync(`public${person.image}`), true)
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
