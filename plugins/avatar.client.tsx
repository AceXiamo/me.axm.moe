import { gsap } from 'gsap'
import { render } from 'vue'
import Avatar from '~/assets/images/avatar.png'

let homeAvatarContainer: HTMLElement | null = null
let headerAvatarContainer: HTMLElement | null = null
let avatarFromHeader: HTMLElement | null = null
let avatarFromHome: HTMLElement | null = null

type AvatarType = 'home' | 'header'

function AvatarComponent({ type }: { type: AvatarType }) {
  return (
    <div
      style="view-transition-name: avatar_transition"
      class={[
        `rounded-full flex p-[2px] transition-all duration-300`,
        type === 'header' &&
          `border border-solid border-gray-500/10 shadow-md dark:border-white/30 dark:border-dashed`,
      ]}
    >
      <img src={Avatar} style={{ width: '100%', height: '100%', borderRadius: '100%' }} />
    </div>
  )
}

const handleAnimateAvatar = (avatar: HTMLElement | null, fromProps: gsap.TweenVars) => {
  gsap.from(avatar, {
    duration: 0.5,
    ...fromProps,
  })
}

const handleFromHome = (next: () => void) => {
  renderHeaderAvatar()
  const fun = () => {
    avatarFromHome?.remove()
    headerAvatarContainer?.appendChild(avatarFromHeader!)
    next()
  }
  if (document.startViewTransition) {
    document.startViewTransition(() => {
      fun()
    })
  } else {
    fun()
  }
}

const renderHeaderAvatar = () => {
  avatarFromHeader = document.createElement('div')
  render(<AvatarComponent type="header" />, avatarFromHeader!)
}

const handleBackHome = (refresh: boolean) => {
  avatarFromHome = document.createElement('div')
  render(<AvatarComponent type="home" />, avatarFromHome!)
  if (refresh) {
    homeAvatarContainer = document.getElementById('home_avatar_container')
    homeAvatarContainer?.appendChild(avatarFromHome!)
    handleAnimateAvatar(avatarFromHome, { opacity: 0, y: 50 })
  } else {
    initContainer(() => {
      homeAvatarContainer = document.getElementById('home_avatar_container')
      
      const fun = () => {
        avatarFromHeader?.remove()
        homeAvatarContainer?.appendChild(avatarFromHome!)
      }
      if (document.startViewTransition) {
        document.startViewTransition(() => {
          fun()
        })
      } else fun()
    })
  }
}

const initContainer = (hook: () => void) => {
  homeAvatarContainer = document.getElementById('home_avatar_container')
  if (homeAvatarContainer) {
    hook()
  } else {
    useMacroTask(() => {
      initContainer(hook)
    })
  }
}

const useMacroTask = (fn: () => void) => {
  setTimeout(fn, 0)
}

export default defineNuxtPlugin({
  name: 'avatar-plugin',
  async setup() {
    const router = useRouter()
    headerAvatarContainer = document.getElementById('header_avatar_container')

    router.afterEach((to, from) => {
      const toHomePage = to.path === '/'
      toHomePage && handleBackHome(from.name === to.name)
    })

    router.beforeEach((to, from, next) => {
      const refresh = from.name === to.name
      if (refresh && to.path !== '/') {
        renderHeaderAvatar()
        headerAvatarContainer?.appendChild(avatarFromHeader!)
        handleAnimateAvatar(avatarFromHeader, { opacity: 0, x: -50 })
        next()
      } else {
        const fromHomePage = from.path === '/' && from.name !== to.name
        fromHomePage ? handleFromHome(next) : next()
      }
    })
  },
})
