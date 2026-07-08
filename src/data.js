export const eventConfig = {
  slug: 'wildeburg-2026',
  title: 'De Complimenten-tent',
  intro:
    'Proficiat: je bent uitverkoren om op Wildeburg op zoek te gaan naar één van de 8 volgende figuren.',
  defaultReward: 'een scheutje godendrank, of liever ineens een tongtwister?',
}

export const complimentPool = [
  compliment('compliment-01', 'Ik vind dat muilen verplicht moet zijn minstens. Maar ja, wie ben ik hé?'),
  compliment('compliment-02', 'Moest je een drankjeton zijn, ik zou voor jou betalen.'),
  compliment(
    'compliment-03',
    'Als je ogen konden spreken, ze zouden mijn broek spontaan doen uitvallen.',
  ),
  compliment('compliment-04', 'Consent is key. En jouw slot wil ik wel openbeuken.'),
  compliment('compliment-05', 'Stop die tijger in mijn tank.'),
  compliment(
    'compliment-06',
    'Gelukkig droeg je dat badpak, want nu kan je verdrinken in mijn ogen.',
  ),
  compliment('compliment-07', 'Jij mag kiezen: blussen of kussen?'),
  compliment('compliment-08', 'Pietje voor een tietje?'),
]

export const people = [
  {
    id: 'person-01',
    slug: 'de-discobalie',
    displayName: 'René de Rukker',
    sortOrder: 1,
    image: '/images/people/person-01.webp',
    imagePosition: '50% 0%',
    reward: 'een fluisterzegen met denkbeeldige glitter',
    compliments: complimentPool,
  },
  {
    id: 'person-02',
    slug: 'kapitein-kuslicht',
    displayName: 'Fabian Fellatio',
    sortOrder: 2,
    image: '/images/people/person-02.webp',
    imagePosition: '50% 10%',
    compliments: complimentPool,
  },
  {
    id: 'person-03',
    slug: 'madame-mist',
    displayName: 'Zuchtende Zorro',
    sortOrder: 3,
    image: '/images/people/person-03.webp',
    imagePosition: '50% 0%',
    reward: 'een koninklijke knipoog en een compleet vrijwillig luchtapplaus',
    compliments: complimentPool,
  },
  {
    id: 'person-04',
    slug: 'baron-banaan',
    displayName: 'Hitsige Hannes',
    sortOrder: 4,
    image: '/images/people/person-04.webp',
    imagePosition: '50% 10%',
    compliments: complimentPool,
  },
  {
    id: 'person-05',
    slug: 'neon-nonkel',
    displayName: 'Diego Dekhengst',
    sortOrder: 5,
    image: '/images/people/person-05.webp',
    imagePosition: '50% 0%',
    reward: 'een mini-preek over licht, liefde en slechte timing',
    compliments: complimentPool,
  },
  {
    id: 'person-06',
    slug: 'prinses-plakband',
    displayName: 'MasturMatthi',
    sortOrder: 6,
    image: '/images/people/person-06.webp',
    imagePosition: '50% 14%',
    compliments: complimentPool,
  },
  {
    id: 'person-07',
    slug: 'dokter-dubbelzien',
    displayName: 'Prinses Plakbek',
    sortOrder: 7,
    image: '/images/people/person-07.webp',
    imagePosition: '50% 0%',
    reward: 'een diagnose van acute feestelijkheid',
    compliments: complimentPool,
  },
  {
    id: 'person-08',
    slug: 'sint-schuim',
    displayName: 'Stijve Stylo',
    sortOrder: 8,
    image: '/images/people/person-08.webp',
    imagePosition: '50% 10%',
    compliments: complimentPool,
  },
]

export function getSortedPeople() {
  return [...people].sort((a, b) => a.sortOrder - b.sortOrder)
}

export function pickUniqueCompliments(person, amount = 3, random = Math.random) {
  const pool = [...person.compliments]

  for (let index = pool.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1))
    ;[pool[index], pool[swapIndex]] = [pool[swapIndex], pool[index]]
  }

  return pool.slice(0, amount)
}

function compliment(id, message) {
  return { id, message }
}
