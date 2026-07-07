const variants = ['love', 'neon', 'absurd']

export function pickAnimation(random = Math.random) {
  return variants[Math.floor(random() * variants.length)]
}

export function playMicroAnimation(root, variant) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return
  }

  const burst = document.createElement('div')
  burst.className = `micro-burst micro-burst--${variant}`
  burst.setAttribute('aria-hidden', 'true')

  const symbols = {
    love: ['<3', 'x', '<3', '+'],
    neon: ['◇', '+', '○', '△'],
    absurd: ['?', '!', '~', '*'],
  }[variant]

  symbols.forEach((symbol, index) => {
    const item = document.createElement('span')
    item.textContent = symbol
    item.style.setProperty('--i', String(index))
    burst.append(item)
  })

  root.append(burst)
  window.setTimeout(() => burst.remove(), 1050)
}
