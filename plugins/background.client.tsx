import { render } from 'vue'

function BackgroundClient() {
  const Style = {
    background: 'radial-gradient(closest-side,var(--bg-dot-color) var(--bg-dot-size),transparent 0) black',
    backgroundSize: '20px 20px',
  }

  return (
    <div class="fixed min-h-screen min-w-screen top-0 left-0 z-[-1]" style={Style}>
      <div
        class="w-screen h-screen backdrop-blur-[0px]"
      ></div>
    </div>
  )
}

export default defineNuxtPlugin({
  name: 'my-plugin',
  parallel: true,
  async setup(nuxtApp) {
    const div = document.createElement('div')

    render(<BackgroundClient/>, div)
    document.body.appendChild(div)
  }
})
