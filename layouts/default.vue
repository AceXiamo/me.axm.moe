<template>
  <div class="flex flex-col">
    <div class="mt-[30px] w-full grid place-content-center relative">
      <div class="bg-white/20 flex w-max p-[10px] rounded-md gap-[20px]">
        <div
          class="flex items-center gap-[5px] text-[16px] cursor-pointer"
          @click="to('/')"
        >
          <icon name="heroicons:home" />
          <span class="select-none">Home</span>
        </div>
        <div
          class="flex items-center gap-[5px] text-[16px] cursor-pointer"
          @click="to('/say')"
        >
          <icon name="heroicons:chat-bubble-bottom-center-text" />
          <span class="select-none">Say</span>
        </div>
      </div>

      <div class="absolute right-[50px]" id="avatar_container"></div>
    </div>
    <slot class="mt-[200px]" />
  </div>
</template>

<script lang="ts" setup>
import Avatar from "~/assets/images/avatar.jpg";

const route = useRoute();
let avatarContainer: HTMLElement | null = null;
let avatarItem: HTMLImageElement | null = null;

const to = (path: string) => {
  if (route.path === path) return;

  if (route.path === "/") {
    avatarHandle(() => navigateTo(path));
  } else if (path === "/") {
    avatarHandleBack(() => navigateTo(path));
  } else {
    navigateTo(path);
  }
};

const avatarHandle = (hook: () => void) => {
  const avatarFromHome = document.getElementById("avatar_form_home");
  avatarFromHome?.style.setProperty(
    "view-transition-name",
    "avatar_transition",
  );

  avatarItem = document.createElement("img");
  avatarItem.src = Avatar;
  avatarItem.classList.add("w-[50px]", "h-[50px]", "rounded-full");

  document.startViewTransition(() => {
    avatarItem?.style.setProperty("view-transition-name", "avatar_transition");
    avatarContainer?.appendChild(avatarItem!);
    hook();
  });
};

const avatarHandleBack = (hook: () => void) => {
  hook();
  const homeAvatar = document.createElement("img");
  homeAvatar.src = Avatar;
  homeAvatar.classList.add("w-[150px]", "h-[150px]", "rounded-full");
  homeAvatar.style.setProperty("view-transition-name", "avatar_transition");

  document.startViewTransition(() => {
    avatarItem?.remove();
    const homeAvatarContainer = document.getElementById(
      "home_avatar_container",
    );
    homeAvatarContainer?.appendChild(homeAvatar);
  });
};

onMounted(() => {
  avatarContainer = document.getElementById("avatar_container");
});
</script>

<style>
/* ::view-transition-new(avatar_transition),
::view-transition-old(avatar_transition) {
  transition-duration: 1s;
} */
</style>
