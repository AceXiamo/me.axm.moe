import { gsap } from 'gsap'
import Avatar from '~/assets/images/avatar.jpg'

let homeAvatarContainer: HTMLElement | null = null
let headerAvatarContainer: HTMLElement | null = null
let avatarFromHeader: HTMLImageElement | null = null
let avatarFromHome: HTMLImageElement | null = null

const handleFromHome = (next: () => void) => {
  avatarFromHeader = document.createElement('img')
  avatarFromHeader.src = Avatar
  avatarFromHeader.style.setProperty('width', '50px')
  avatarFromHeader.style.setProperty('height', '50px')
  avatarFromHeader.style.setProperty('border-radius', '100%')
  avatarFromHeader?.style.setProperty('view-transition-name', 'avatar_transition')
  document.startViewTransition(() => {
    avatarFromHome?.remove()
    headerAvatarContainer?.appendChild(avatarFromHeader!)
    next()
  })
}

const handleBackHome = (refresh: boolean) => {
  createHomeAvatar()
  if (refresh) {
    homeAvatarContainer = document.getElementById('home_avatar_container')
    homeAvatarContainer?.appendChild(avatarFromHome!)
    gsap.from(avatarFromHome, {
      duration: 0.5,
      opacity: 0,
      y: 50
    })
  } else {
    useMacroTask(() => {
      homeAvatarContainer = document.getElementById('home_avatar_container')
      document.startViewTransition(() => {
        avatarFromHeader?.remove()
        homeAvatarContainer?.appendChild(avatarFromHome!)
      })
    })
  }
}

const useMacroTask = (fn: () => void) => {
  setTimeout(fn, 0)
}

const createHomeAvatar = () => {
  avatarFromHome = document.createElement('img')
  avatarFromHome.src = Avatar
  avatarFromHome.style.setProperty('width', '150px')
  avatarFromHome.style.setProperty('height', '150px')
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
      console.log(to.path, from.path)
      const fromHomePage = from.path === '/' && from.path !== to.path
      fromHomePage ? handleFromHome(next) : next()
    })
  },
})
