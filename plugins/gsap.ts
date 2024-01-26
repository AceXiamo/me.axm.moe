import { gsap } from "gsap";

type GsapDirectiveValue = { method: "from" | "to"; config: gsap.TweenVars };
type GsapMethod = "from" | "to";
type GsapAttr =
  | "initial"
  | "enter"
  | "leave"
  | "hovered"
  | "tapped"
  | "focused";
type GsapProp = {
  [key in GsapAttr]?: gsap.TweenVars;
};

// declare module "@vue/runtime-core" {
//   export interface ComponentCustomProperties {
//     $gsap?: GsapDirectiveValue;
//   }
// }

declare module "@vue/runtime-dom" {
  interface HTMLAttributes {
    initial?: gsap.TweenVars & { duration?: number };
    enter?: gsap.TweenVars;
    leave?: gsap.TweenVars;
    hovered?: gsap.TweenVars;
    tapped?: gsap.TweenVars;
    focused?: gsap.TweenVars;
  }
}

declare module "vue" {
  interface ComponentCustomProperties {
    vGsap: (option:GsapDirectiveValue) => void;
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("gsap", {
    mounted(el, binding, vnode) {
      const { method, config } = binding.value as GsapDirectiveValue;
      gsap[method](el, config);
    },
    getSSRProps(binding) {
      return {};
    },
  });
});
