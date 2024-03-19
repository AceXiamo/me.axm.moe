import { render } from 'vue'

const LIGHT_SIZE = 100

function Light() {
  return (
    <div
      class="blur-[10px] dark:bg-white/5 bg-gray-500/5 rounded-full"
      style={{
        width: LIGHT_SIZE + 'px',
        height: LIGHT_SIZE + 'px',
      }}
    />
  )
}

let targetX: number = 0,
  targetY: number = 0,
  x: number = 0,
  y: number = 0,
  ease: number = 0.05,
  rafId: number | null = null

const moveByEase = (): { x: number; y: number } => {
  x += (targetX - x) * ease
  y += (targetY - y) * ease
  return { x, y }
}

const lightId = 'the_light'
const generate = (init?: { x: number; y: number }) => {
  if (document.getElementById(lightId)) {
    return
  }

  const div = document.createElement('div')
  div.id = lightId
  div.style.position = 'fixed'
  div.style.pointerEvents = 'none'
  div.style.left = (init?.x ?? window.innerWidth / 2) + 'px'
  div.style.top = (init?.y ?? window.innerHeight / 2) + 'px'
  div.style.transform = 'translate(-50%, -50%)'
  div.style.transition = 'transform 0.7s ease, opacity 0.7s ease'
  div.style.zIndex = '9999'
  render(<Light />, div)
  document.body.appendChild(div)

  const animate = () => {
    const { x, y } = moveByEase()
    div.style.left = `${x}px`
    div.style.top = `${y}px`
    const dist = Math.hypot(targetX - x, targetY - y)
    if (dist > 1) {
      rafId = requestAnimationFrame(animate)
    }
  }

  document.addEventListener('mousemove', e => {
    targetX = e.clientX
    targetY = e.clientY
    if (rafId !== null) {
      cancelAnimationFrame(rafId)
    }
    animate()
  })

  document.addEventListener('mouseenter', () => {
    div.style.transform = `translate(-50%, -50%) scale(1)`
    div.style.opacity = '1'
  })
  document.addEventListener('mouseleave', () => {
    div.style.transform = `translate(-50%, -50%) scale(0)`
    div.style.opacity = '0'
  })
}

export default { generate }
