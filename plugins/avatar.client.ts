import { gsap } from 'gsap'
import Avatar from '~/assets/images/avatar.jpg'

let homeAvatarContainer: HTMLElement | null = null
let headerAvatarContainer: HTMLElement | null = null
let avatarFromHeader: HTMLImageElement | null = null
let avatarFromHome: HTMLImageElement | null = null

const handleFromHome = (next: () => void) => {
  createHeaderAvatar()
  document.startViewTransition(() => {
    avatarFromHome?.remove()
    headerAvatarContainer?.appendChild(avatarFromHeader!)
    next()
  })
}

const createHeaderAvatar = () => {
  avatarFromHeader = document.createElement('img')
  avatarFromHeader.src = Avatar
  avatarFromHeader.style.setProperty('width', '100%')
  avatarFromHeader.style.setProperty('height', '100%')
  avatarFromHeader.style.setProperty('border-radius', '100%')
  avatarFromHeader?.style.setProperty('view-transition-name', 'avatar_transition')
}

const handleBackHome = (refresh: boolean) => {
  createHomeAvatar()
  if (refresh) {
    homeAvatarContainer = document.getElementById('home_avatar_container')
    homeAvatarContainer?.appendChild(avatarFromHome!)
    gsap.from(avatarFromHome, {
      duration: 0.5,
      opacity: 0,
      y: 50,
    })
  } else {
    useMacroTask(() => {
      useMacroTask(() => {
        homeAvatarContainer = document.getElementById('home_avatar_container')
        document.startViewTransition(() => {
          avatarFromHeader?.remove()
          homeAvatarContainer?.appendChild(avatarFromHome!)
        })
      })
    })
  }
}

const useMacroTask = (fn: () => void) => {
  setTimeout(fn, 0)
}

const useMicroTask = (fn: () => void) => {
  Promise.resolve().then(fn)
}

const createHomeAvatar = () => {
  avatarFromHome = document.createElement('img')
  avatarFromHome.src = Avatar
  avatarFromHome.style.setProperty('width', '100%')
  avatarFromHome.style.setProperty('height', '100%')
  avatarFromHome.style.setProperty('border-radius', '100%')
  avatarFromHome.style.setProperty('view-transition-name', 'avatar_transition')
}

export default defineNuxtPlugin({
  name: 'avatar-plugin',
  async setup(nuxtApp) {
    const router = useRouter()
    headerAvatarContainer = document.getElementById('header_avatar_container')
    router.afterEach((to, from) => {
      const toHomePage = to.path === '/'
      toHomePage && handleBackHome(from.path === to.path)
    })
    router.beforeEach((to, from, next) => {
      const refresh = from.path === to.path
      if (refresh && to.path !== '/') {
        createHeaderAvatar()
        headerAvatarContainer?.appendChild(avatarFromHeader!)
        gsap.from(avatarFromHeader, {
          duration: 0.5,
          opacity: 0,
          x: -50,
        })
        next()
      } else {
        const fromHomePage = from.path === '/' && from.path !== to.path
        fromHomePage ? handleFromHome(next) : next()
      }
    })
  },
})
