export const eventConfig = {
  slug: 'wildeburg-2026',
  title: 'De Complimenten-tent',
  intro:
    'Proficiat: je bent uitverkoren om op Wildeburg op zoek te gaan naar één van de 8 volgende figuren.',
  defaultReward: 'een scheutje godendrank, mits iedereen daar zin in heeft',
}

const colors = [
  ['#ff4b6e', '#ffe66d'],
  ['#11d9ff', '#ff7a1a'],
  ['#ff45d4', '#32ff9f'],
  ['#f8ff45', '#7a5cff'],
  ['#ff6b35', '#00f5d4'],
  ['#f72585', '#b9fbc0'],
  ['#00bbf9', '#fee440'],
  ['#ff99c8', '#9b5de5'],
]

export const people = [
  {
    id: 'person-01',
    slug: 'de-discobalie',
    displayName: 'De Discobalie',
    sortOrder: 1,
    image: placeholderImage(0, 'DB'),
    reward: 'een fluisterzegen met denkbeeldige glitter',
    compliments: [
      compliment('p01-c01', 'Jij lijkt op iemand die zelfs schaduw warmer kan maken.'),
      compliment('p01-c02', 'Als jouw blik een tent was, stond ik al vooraan te dansen.'),
      compliment('p01-c03', 'Jij hebt de energie van een lampje dat weigert uit te gaan.'),
      compliment('p01-c04', 'Je gezicht zegt: ik heb de nacht vriendelijk ontregeld.'),
      compliment('p01-c05', 'Jij draagt chaos alsof het maatwerk is.'),
      compliment('p01-c06', 'Je lijkt verdacht veel op een goed idee na middernacht.'),
      compliment('p01-c07', 'Jouw aanwezigheid heeft meer glans dan mijn beste excuus.'),
      compliment('p01-c08', 'Ik vertrouw je niet helemaal, maar wel op een feestelijke manier.'),
    ],
  },
  {
    id: 'person-02',
    slug: 'kapitein-kuslicht',
    displayName: 'Kapitein Kuslicht',
    sortOrder: 2,
    image: placeholderImage(1, 'KK'),
    compliments: [
      compliment('p02-c01', 'Jij ziet eruit alsof de maan net je styling heeft gedaan.'),
      compliment('p02-c02', 'Als charme geluid maakte, stond jij nu op de mainstage.'),
      compliment('p02-c03', 'Je hebt een hoofd waar kleine legendes aan blijven plakken.'),
      compliment('p02-c04', 'Jij maakt rondlopen ineens verdacht ceremonieel.'),
      compliment('p02-c05', 'Je straalt alsof je per ongeluk heilig bent verklaard.'),
      compliment('p02-c06', 'Jij bent precies het soort storing dat een festival nodig heeft.'),
      compliment('p02-c07', 'Mijn dag had net meer licht nodig en toen stond jij daar.'),
      compliment('p02-c08', 'Jouw vibe is zacht, luid en volkomen onverklaarbaar.'),
    ],
  },
  {
    id: 'person-03',
    slug: 'madame-mist',
    displayName: 'Madame Mist',
    sortOrder: 3,
    image: placeholderImage(2, 'MM'),
    reward: 'een koninklijke knipoog en een compleet vrijwillig luchtapplaus',
    compliments: [
      compliment('p03-c01', 'Jij ziet eruit alsof je net uit een geheime droom bent gestapt.'),
      compliment('p03-c02', 'Je hebt de kalmte van iemand die de mist persoonlijk kent.'),
      compliment('p03-c03', 'Jouw blik kan waarschijnlijk een wachtrij laten fluisteren.'),
      compliment('p03-c04', 'Jij maakt mysterie praktisch en draagbaar.'),
      compliment('p03-c05', 'Als wolken complimenten gaven, klonken ze ongeveer als jij.'),
      compliment('p03-c06', 'Je aanwezigheid voelt als een zachte coup in de realiteit.'),
      compliment('p03-c07', 'Jij bent ongrijpbaar op een heel geruststellende manier.'),
      compliment('p03-c08', 'Zelfs de rookmachine zou even naar je omkijken.'),
    ],
  },
  {
    id: 'person-04',
    slug: 'baron-banaan',
    displayName: 'Baron Banaan',
    sortOrder: 4,
    image: placeholderImage(3, 'BB'),
    compliments: [
      compliment('p04-c01', 'Jij hebt de waardigheid van een fruitmand met geheimen.'),
      compliment('p04-c02', 'Je loopt rond alsof absurditeit je achternaam is.'),
      compliment('p04-c03', 'Jouw aura is rijp, zeldzaam en licht verdacht.'),
      compliment('p04-c04', 'Als elegantie kon struikelen, deed ze dat graag naast jou.'),
      compliment('p04-c05', 'Jij maakt onzin ineens professioneel.'),
      compliment('p04-c06', 'Ik wist niet dat charisma krom kon zijn, tot nu.'),
      compliment('p04-c07', 'Je lijkt op een grap waar de kosmos trots op is.'),
      compliment('p04-c08', 'Jij bent het bewijs dat stijl geen verklaring nodig heeft.'),
    ],
  },
  {
    id: 'person-05',
    slug: 'neon-nonkel',
    displayName: 'Neon Nonkel',
    sortOrder: 5,
    image: placeholderImage(4, 'NN'),
    reward: 'een mini-preek over licht, liefde en slechte timing',
    compliments: [
      compliment('p05-c01', 'Jij lijkt opgeladen door een illegale zonsondergang.'),
      compliment('p05-c02', 'Je hebt het soort glimlach waar kabels spontaan van gaan zingen.'),
      compliment('p05-c03', 'Jouw energie is een stopcontact met festivalrechten.'),
      compliment('p05-c04', 'Als neon kon knuffelen, zag het er ongeveer zo uit.'),
      compliment('p05-c05', 'Je aanwezigheid geeft mijn interne batterij rare hoop.'),
      compliment('p05-c06', 'Jij bent fel zonder te schreeuwen, en dat is knap.'),
      compliment('p05-c07', 'Je lijkt de nooduitgang naar een betere stemming.'),
      compliment('p05-c08', 'Jij draagt licht alsof het een ondeugende jas is.'),
    ],
  },
  {
    id: 'person-06',
    slug: 'prinses-plakband',
    displayName: 'Prinses Plakband',
    sortOrder: 6,
    image: placeholderImage(5, 'PP'),
    compliments: [
      compliment('p06-c01', 'Jij houdt deze realiteit duidelijk tijdelijk bij elkaar.'),
      compliment('p06-c02', 'Je hebt de uitstraling van een oplossing met glitterrand.'),
      compliment('p06-c03', 'Als improvisatie royalty had, droeg jij de kroon.'),
      compliment('p06-c04', 'Jij maakt vastzitten bijna romantisch.'),
      compliment('p06-c05', 'Je lijkt iemand die kapotte plannen mooi terugplakt.'),
      compliment('p06-c06', 'Jouw stijl zegt: alles mag, zolang het blijft hangen.'),
      compliment('p06-c07', 'Ik bewonder je structurele bijdrage aan de chaos.'),
      compliment('p06-c08', 'Jij bent praktisch, poëtisch en een beetje gevaarlijk.'),
    ],
  },
  {
    id: 'person-07',
    slug: 'dokter-dubbelzien',
    displayName: 'Dokter Dubbelzien',
    sortOrder: 7,
    image: placeholderImage(6, 'DD'),
    reward: 'een diagnose van acute feestelijkheid',
    compliments: [
      compliment('p07-c01', 'Jij ziet eruit als het antwoord op een vraag die niemand durfde stellen.'),
      compliment('p07-c02', 'Mijn ogen overleggen nog, maar ze zijn allebei fan.'),
      compliment('p07-c03', 'Je hebt een blik die zelfs de horizon even herberekent.'),
      compliment('p07-c04', 'Jij maakt verwarring opmerkelijk aantrekkelijk.'),
      compliment('p07-c05', 'Als je ogen konden spreken, zouden ze mijn planning saboteren.'),
      compliment('p07-c06', 'Jij bent helder op een compleet onbetrouwbare manier.'),
      compliment('p07-c07', 'Je aanwezigheid geeft mijn kompas een persoonlijk probleem.'),
      compliment('p07-c08', 'Ik zie je misschien dubbel, maar dat voelt als winst.'),
    ],
  },
  {
    id: 'person-08',
    slug: 'sint-schuim',
    displayName: 'Sint Schuim',
    sortOrder: 8,
    image: placeholderImage(7, 'SS'),
    compliments: [
      compliment('p08-c01', 'Jij hebt de heilige zachtheid van een schuimkraag bij zonsondergang.'),
      compliment('p08-c02', 'Je ziet eruit alsof plezier net een beschermheilige kreeg.'),
      compliment('p08-c03', 'Jouw aanwezigheid maakt de lucht net iets feestelijker.'),
      compliment('p08-c04', 'Als genade kon bruisen, stond jij hier te glimlachen.'),
      compliment('p08-c05', 'Jij bent kalmte met een rare bijsmaak, en ik bedoel dat goed.'),
      compliment('p08-c06', 'Je straalt als iemand die de nacht netjes heeft ingezegend.'),
      compliment('p08-c07', 'Jij maakt schuim filosofisch en dat is niet iedereen gegeven.'),
      compliment('p08-c08', 'Ik weet niet wat je precies doet, maar het werkt.'),
    ],
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

function placeholderImage(index, initials) {
  const [start, end] = colors[index]
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 900">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop stop-color="${start}"/>
        <stop offset="1" stop-color="${end}"/>
      </linearGradient>
      <filter id="glow"><feGaussianBlur stdDeviation="11" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    <rect width="720" height="900" fill="#120914"/>
    <circle cx="${170 + index * 18}" cy="160" r="170" fill="${end}" opacity=".23"/>
    <circle cx="${500 - index * 12}" cy="710" r="230" fill="${start}" opacity=".18"/>
    <path d="M80 690 C210 520 320 820 500 570 C610 420 640 620 676 350" fill="none" stroke="url(#g)" stroke-width="24" stroke-linecap="round" opacity=".75"/>
    <g filter="url(#glow)">
      <circle cx="360" cy="365" r="156" fill="url(#g)"/>
      <rect x="220" y="500" width="280" height="190" rx="92" fill="url(#g)" opacity=".88"/>
      <circle cx="300" cy="342" r="18" fill="#160916"/>
      <circle cx="420" cy="342" r="18" fill="#160916"/>
      <path d="M294 425 Q360 474 426 425" fill="none" stroke="#160916" stroke-width="16" stroke-linecap="round"/>
    </g>
    <text x="360" y="806" fill="#fff7d7" font-family="Arial, sans-serif" font-size="94" font-weight="800" text-anchor="middle">${initials}</text>
  </svg>`

  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}
