import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'

import { complimentPool, eventConfig, getSortedPeople, pickUniqueCompliments } from '../src/data.js'
import { pickAnimation } from '../src/animations.js'

const expectedCompliments = [
  {
    id: 'compliment-01',
    message: 'Ik vind dat muilen verplicht moet zijn minstens. Maar ja, wie ben ik hé?',
  },
  {
    id: 'compliment-02',
    message: 'Moest je een drankjeton zijn, ik zou voor jou betalen.',
  },
  {
    id: 'compliment-03',
    message: 'Als je ogen konden spreken, ze zouden mijn broek spontaan doen uitvallen.',
  },
  {
    id: 'compliment-04',
    message: 'Consent is key. En jouw slot wil ik wel openbeuken.',
  },
  {
    id: 'compliment-05',
    message: 'Stop die tijger in mijn tank.',
  },
  {
    id: 'compliment-06',
    message: 'Gelukkig droeg je dat badpak, want nu kan je verdrinken in mijn ogen.',
  },
  {
    id: 'compliment-07',
    message: 'Jij mag kiezen: blussen of kussen?',
  },
  {
    id: 'compliment-08',
    message: 'Pietje voor een tietje?',
  },
]

test('prototype has exactly eight temporary figures', () => {
  const people = getSortedPeople()

  assert.equal(people.length, 8)
  assert.deepEqual(
    people.map((person) => person.sortOrder),
    [1, 2, 3, 4, 5, 6, 7, 8],
  )
})

test('each figure uses the same approved local compliment pool', () => {
  const expectedImages = Array.from(
    { length: 8 },
    (_, index) => `/images/people/person-${String(index + 1).padStart(2, '0')}.webp`,
  )
  const expectedPositions = [
    '50% 0%',
    '50% 10%',
    '50% 0%',
    '50% 10%',
    '50% 0%',
    '50% 14%',
    '50% 0%',
    '50% 10%',
  ]
  const expectedDisplayNames = [
    'René de Rukker',
    'Fabian Fellatio',
    'Zuchtende Zorro',
    'Hitsige Hannes',
    'Diego Dekhengst',
    'MasturMatthi',
    'Prinses Plakbek',
    'Stijve Stylo',
  ]

  for (const [index, person] of getSortedPeople().entries()) {
    assert.equal(person.image, expectedImages[index])
    assert.equal(person.imagePosition, expectedPositions[index])
    assert.equal(existsSync(`public${person.image}`), true)
    assert.equal(person.displayName, expectedDisplayNames[index])
    assert.deepEqual(person.compliments, expectedCompliments)
  }
})

test('runtime compliment pool contains exactly the approved eight compliments', () => {
  assert.deepEqual(complimentPool, expectedCompliments)
})

test('compliment picker returns three unique options from the shared pool', () => {
  const [person] = getSortedPeople()
  const picked = pickUniqueCompliments(person, 3, () => 0.41)

  assert.equal(picked.length, 3)
  assert.equal(new Set(picked.map((compliment) => compliment.id)).size, 3)
  assert.ok(picked.every((compliment) => complimentPool.includes(compliment)))
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
