import { eventConfig, getSortedPeople, pickUniqueCompliments } from './data.js'
import { pickAnimation, playMicroAnimation } from './animations.js'
import { clearMission, loadMission, saveMission } from './storage.js'

export function createApp(root) {
  setupGalleryDrift()

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

  function openPerson(person, card) {
    if (document.startViewTransition && !prefersReducedMotion()) {
      card.querySelector('.target-image').style.viewTransitionName = 'selected-target'
      document.startViewTransition(() => choosePerson(person))
      return
    }

    choosePerson(person)
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

    getSortedPeople().forEach((person, index) => {
      const card = button('', 'target-card', () => openPerson(person, card))
      card.setAttribute('aria-label', person.displayName)
      card.style.setProperty('--tilt', `${getCardTilt(index)}deg`)
      card.append(
        renderPersonImage(person.image, person.displayName, 'target-image', person.imagePosition),
      )
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
      renderPersonImage(person.image, person.displayName, 'overlay-image', person.imagePosition),
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
      renderPersonImage(
        mission.imagePath,
        mission.personDisplayName,
        'mission-image',
        getMissionImagePosition(mission),
      ),
      textNode('h1', 'mission-name', mission.personDisplayName),
      textNode('p', 'mission-quote', mission.complimentMessage),
      textNode(
        'p',
        'mission-instruction',
        'Vind deze figuur en geef dit compliment in het echt.',
      ),
      renderReward(mission.rewardText),
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

function renderReward(rewardText) {
  const reward = document.createElement('p')
  reward.className = 'reward-text'

  const label = document.createElement('span')
  label.className = 'reward-label'
  label.textContent = 'Beloning:'

  reward.append(label, document.createTextNode(` ${rewardText}`))
  return reward
}

function getCardTilt(index) {
  return [-1.2, 0.8, 1.1, -0.7, -0.9, 1.3, 0.6, -1][index] || 0
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function setupGalleryDrift() {
  let ticking = false

  function update() {
    ticking = false

    if (prefersReducedMotion()) {
      document.documentElement.style.setProperty('--gallery-drift-left', '0px')
      document.documentElement.style.setProperty('--gallery-drift-right', '0px')
      return
    }

    const drift = Math.max(-12, Math.min(12, window.scrollY * 0.035))
    document.documentElement.style.setProperty('--gallery-drift-left', `${drift.toFixed(2)}px`)
    document.documentElement.style.setProperty('--gallery-drift-right', `${(-drift).toFixed(2)}px`)
  }

  function requestUpdate() {
    if (ticking) {
      return
    }

    ticking = true
    window.requestAnimationFrame(update)
  }

  update()
  window.addEventListener('scroll', requestUpdate, { passive: true })
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

  if (motionQuery.addEventListener) {
    motionQuery.addEventListener('change', update)
  } else {
    motionQuery.addListener(update)
  }
}

function renderPersonImage(src, alt, className, imagePosition) {
  const image = document.createElement('img')
  image.className = className
  image.src = src
  image.alt = alt
  image.loading = 'lazy'
  image.decoding = 'async'

  if (imagePosition) {
    image.style.setProperty('--image-position', imagePosition)
  }

  return image
}

function getMissionImagePosition(mission) {
  return getSortedPeople().find(
    (person) => person.id === mission.personId || person.slug === mission.personSlug,
  )?.imagePosition
}

function renderMiniPerson(mission) {
  const wrap = document.createElement('div')
  wrap.className = 'mini-person'
  wrap.append(
    renderPersonImage(
      mission.imagePath,
      mission.personDisplayName,
      'mini-image',
      getMissionImagePosition(mission),
    ),
    textNode('span', 'mini-name', mission.personDisplayName),
  )
  return wrap
}
