import { render } from 'vue'

const VIEW_TRANSITION_NAME = 'image_viewer_transition'

function ImageNode({ url }: { url: string }) {
  return (
    <div class="flex w-[70%] h-[80%] justify-center items-center z-9">
      <img src={url} class="max-h-[80%]" style={{ 'view-transition-name': VIEW_TRANSITION_NAME }} />
    </div>
  )
}

function Shadow() {
  return (
    <div
      class="fixed inset-0 bg-black opacity-50 "
    ></div>
  )

}

const show = (url: string, e: Event) => {
  const el = (e.currentTarget || e.target) as HTMLElement
  const div = document.createElement('div')
  div.style.position = 'fixed'
  div.style.inset = '0'
  div.style.display = 'flex'
  div.style.justifyContent = 'center'
  div.style.alignItems = 'center'
  render(<ImageNode url={url} />, div)
  const shadow = document.createElement('div')
  div.appendChild(shadow)
  render(<Shadow />, shadow)
  el.style.setProperty('view-transition-name', VIEW_TRANSITION_NAME)
  document.startViewTransition(() => {
    el.style.opacity = '0'
    el.style.removeProperty('view-transition-name')
    document.body.appendChild(div)
  })
  div.addEventListener('click', () => {
    const vt = document.startViewTransition(() => {
      el.style.opacity = '1'
      el.style.setProperty('view-transition-name', VIEW_TRANSITION_NAME)
      div.remove()
    })
    vt.finished.then(() => {
      el.style.removeProperty('view-transition-name')
    })
  })
}

export default { show }
