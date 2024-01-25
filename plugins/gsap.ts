import { gsap } from "gsap";

declare module "vue" {
  interface ComponentCustomProperties {
    vGsap: (option: { method: string; config: gsap.TweenVars }) => void;
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("gsap", {
    mounted(el, binding) {
      (gsap as any)[binding.value.method](el, binding.value.config);
    },
    getSSRProps(binding) {
      return {};
    },
  });
});
