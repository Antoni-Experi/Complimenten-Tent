import './style.css'

const root = document.querySelector('#app')

if (root) {
  const main = document.createElement('main')
  main.className = 'app-shell app-shell--selection'

  const card = document.createElement('section')
  card.className = 'resume-card'

  const title = document.createElement('p')
  title.className = 'resume-title'
  title.textContent = 'De Complimenten-tent is gesloten.'

  const body = document.createElement('p')
  body.className = 'start-copy'
  body.textContent =
    'Wildeburg is voorbij. Bedankt voor de liefde, de awkward complimenten en de moedige missies.'

  const footer = document.createElement('p')
  footer.className = 'consent-note'
  footer.textContent = 'Tot de volgende editie.'

  card.append(title, body, footer)
  main.append(card)
  root.replaceChildren(main)
}
