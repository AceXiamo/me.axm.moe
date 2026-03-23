import gsap from 'gsap'
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

const lightId = 'the_light'

const generate = () => {
  if (document.getElementById(lightId)) return

  const div = document.createElement('div')
  div.id = lightId
  div.style.position = 'fixed'
  div.style.pointerEvents = 'none'
  div.style.left = `${window.innerWidth / 2}px`
  div.style.top = `${window.innerHeight / 2}px`
  div.style.transform = 'translate(-50%, -50%)'
  div.style.zIndex = '9999'
  render(<Light />, div)
  document.body.appendChild(div)

  gsap.set(div, { scale: 0, autoAlpha: 0 })

  const xTo = gsap.quickTo(div, 'left', { duration: 0.5, ease: 'power3.out' })
  const yTo = gsap.quickTo(div, 'top', { duration: 0.5, ease: 'power3.out' })

  document.addEventListener('mousemove', e => {
    xTo(e.clientX)
    yTo(e.clientY)
  })

  document.addEventListener('mouseenter', () => {
    gsap.to(div, { scale: 1, autoAlpha: 1, duration: 0.4, ease: 'power2.out' })
  })

  document.addEventListener('mouseleave', () => {
    gsap.to(div, { scale: 0, autoAlpha: 0, duration: 0.4, ease: 'power2.out' })
  })
}

export default { generate }
