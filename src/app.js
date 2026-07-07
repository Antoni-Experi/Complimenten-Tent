import { eventConfig, getSortedPeople, pickUniqueCompliments } from './data.js'
import { pickAnimation, playMicroAnimation } from './animations.js'
import { clearMission, loadMission, saveMission } from './storage.js'

export function createApp(root) {
  const state = {
    screen: loadMission() ? 'resume_prompt' : 'target_selection',
    selectedPerson: null,
    shownCompliments: [],
    selectedCompliment: null,
    selectedAnimation: null,
    mission: loadMission(),
  }

  function setScreen(screen) {
    state.screen = screen
    render()
  }

  function choosePerson(person) {
    state.selectedPerson = person
    state.shownCompliments = pickUniqueCompliments(person)
    state.selectedCompliment = null
    state.selectedAnimation = null
    setScreen('target_overlay')
  }

  function chooseCompliment(compliment) {
    state.selectedCompliment = compliment
    state.selectedAnimation = pickAnimation()
    const rewardText = state.selectedPerson.reward || eventConfig.defaultReward
    const mission = {
      eventSlug: eventConfig.slug,
      personId: state.selectedPerson.id,
      personSlug: state.selectedPerson.slug,
      personDisplayName: state.selectedPerson.displayName,
      imagePath: state.selectedPerson.image,
      complimentId: state.selectedCompliment.id,
      complimentMessage: state.selectedCompliment.message,
      rewardText,
      selectedAt: new Date().toISOString(),
    }

    saveMission(mission)
    state.mission = mission
    setScreen('mission')
    playMicroAnimation(root, state.selectedAnimation)
  }

  function restartFlow() {
    clearMission()
    state.mission = null
    state.selectedPerson = null
    state.shownCompliments = []
    state.selectedCompliment = null
    state.selectedAnimation = null
    setScreen('target_selection')
  }

  function render() {
    root.replaceChildren()

    if (state.screen === 'resume_prompt') {
      root.append(renderResumePrompt())
    }

    if (state.screen === 'target_selection') {
      root.append(renderTargetSelection())
    }

    if (state.screen === 'target_overlay') {
      root.append(renderTargetOverlay())
    }

    if (state.screen === 'mission') {
      root.append(renderMission(state.mission))
    }
  }

  function renderResumePrompt() {
    const main = pageShell('resume-prompt')
    const prompt = section('resume-card')

    prompt.append(
      textNode('p', 'resume-title', 'Verdergaan met je missie?'),
      renderMiniPerson(state.mission),
      button('Hervatten', 'primary-action compact-action', () => setScreen('mission')),
      button('Opnieuw kiezen', 'secondary-action compact-action', restartFlow),
    )

    main.append(prompt)
    return main
  }

  function renderTargetSelection() {
    const main = pageShell('selection')
    const header = section('selection-header')
    header.append(textNode('p', 'start-copy', eventConfig.intro))

    const grid = document.createElement('div')
    grid.className = 'target-grid'

    getSortedPeople().forEach((person) => {
      const card = button('', 'target-card', () => choosePerson(person))
      card.setAttribute('aria-label', person.displayName)
      card.append(renderPersonImage(person.image, person.displayName, 'target-image'))
      card.append(textNode('span', 'target-name', person.displayName))
      grid.append(card)
    })

    main.append(header, grid)
    return main
  }

  function renderTargetOverlay() {
    const main = pageShell('overlay-screen')
    const overlay = section('target-overlay')
    const person = state.selectedPerson

    const closeButton = button('Andere figuur', 'ghost-action', () => setScreen('target_selection'))
    closeButton.setAttribute('aria-label', 'Kies een andere figuur')

    const identity = section('overlay-identity')
    identity.append(
      renderPersonImage(person.image, person.displayName, 'overlay-image'),
      textNode('h1', 'overlay-name', person.displayName),
    )

    overlay.append(closeButton, identity)

    const list = section('compliment-list')
    list.append(textNode('p', 'eyebrow', 'Kies een compliment'))

    state.shownCompliments.forEach((compliment) => {
      list.append(button(compliment.message, 'compliment-option', () => chooseCompliment(compliment)))
    })

    overlay.append(list)

    main.append(overlay)
    return main
  }

  function renderMission(mission) {
    const main = pageShell('mission-screen')
    const card = section('mission-card')
    const changeButton = button('Andere figuur', 'ghost-action mission-change-action', restartFlow)
    changeButton.setAttribute('aria-label', 'Kies een andere figuur')

    card.append(
      changeButton,
      renderPersonImage(mission.imagePath, mission.personDisplayName, 'mission-image'),
      textNode('h1', 'mission-name', mission.personDisplayName),
      textNode('p', 'mission-quote', mission.complimentMessage),
      textNode(
        'p',
        'mission-instruction',
        'Zie je deze figuur? Geef het gekozen compliment in het echt.',
      ),
      textNode('p', 'reward-bridge', 'Dan wacht je als beloning:'),
      textNode('p', 'reward-text', mission.rewardText),
      textNode('p', 'consent-note', 'Alles vrijwillig. Wildeburg blijft liefde met toestemming.'),
    )

    main.append(card)
    return main
  }

  render()

  return {
    getState: () => ({ ...state }),
  }
}

function pageShell(name) {
  const main = document.createElement('main')
  main.className = `app-shell app-shell--${name}`
  return main
}

function section(className) {
  const element = document.createElement('section')
  element.className = className
  return element
}

function textNode(tagName, className, value) {
  const element = document.createElement(tagName)
  element.className = className
  element.textContent = value
  return element
}

function button(label, className, onClick) {
  const element = document.createElement('button')
  element.className = className
  element.type = 'button'
  element.textContent = label
  element.addEventListener('click', onClick)
  return element
}

function renderPersonImage(src, alt, className) {
  const image = document.createElement('img')
  image.className = className
  image.src = src
  image.alt = alt
  image.loading = 'lazy'
  image.decoding = 'async'
  return image
}

function renderMiniPerson(mission) {
  const wrap = document.createElement('div')
  wrap.className = 'mini-person'
  wrap.append(
    renderPersonImage(mission.imagePath, mission.personDisplayName, 'mini-image'),
    textNode('span', 'mini-name', mission.personDisplayName),
  )
  return wrap
}
