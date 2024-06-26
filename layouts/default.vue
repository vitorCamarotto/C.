<template>
  <div class="bg-emerald-400 w-full flex justify-between items-center h-20 my-auto fixed z-10">
    <NuxtLink to="/">
      <NuxtImg
        class="ms-4 mt-2"
        sizes="100px"
        src="/logo-cedotte.webp"
        alt="logo-cedotte"
      />
    </NuxtLink>

    <div class="md:hidden">
      <UIcon
        size="30"
        class="me-4 text-black cursor-pointer block"
        name="fluent:navigation-24-regular"
        @click="toggleNavDrawer"
        dynamic
      />
    </div>

    <div class="hidden md:flex">
      <div class="mx-3" v-for="path in paths" :key="path.to">
        <NuxtLink
          :to="path.to"
          class="
            text-xl font-semibold my-4 tracking-wide hover:underline
            underline-offset-0 transition-all duration-300 decoration-transparent hover:decoration-black
            hover:decoration-2 hover:underline-offset-4
          "
          :class="selectedPathClass(path.to)"
        >
          {{ path.title}}
        </NuxtLink>
        </div>
    </div>
  </div>

  <LayoutNavDrawer
    :visible="navDrawerVisible"
    @drawerClosed="closeNavDrawer"
  />
  <slot />

  <UDivider class="mt-10"/>

  <div class="flex flex-col items-center justify-center mt-24 mb-4 text-center">
    <NuxtLink to="/">
      <NuxtImg
        class="mb-8"
        sizes="40px"
        src="/gas-mask-white.webp"
        alt="gas-mask"
      />
    </NuxtLink>


    <div class="flex mt-2">
      <div v-for="icon in socialLinks" :key="icon.iconName">
        <a :href="icon.link" target="_blank">
          <UIcon
            class="cursor-pointer mx-4"
            size="50"
            :name="icon.iconName"
            dynamic
          />
        </a>
      </div>
    </div>

    <p class="mt-4">{{ addressText }}</p>
    <p class="mt-4">{{ footerRightsText }}</p>
  </div>
</template>

<script setup lang="ts">
import paths from '@/utils/paths'

const navDrawerVisible = ref<boolean>(false)

const footerRightsText: string = 'Cedotte 2024 © Todos os direitos reservados.'
const addressText: string = 'Rua Guarani, 725 - Ubatuba, Brasil'

const toggleNavDrawer = () => {
  navDrawerVisible.value = !navDrawerVisible.value
}

const closeNavDrawer = () => {
  navDrawerVisible.value = false
}

const socialLinks: { iconName: string, link: string }[] = [
  {
    iconName: 'mdi:facebook',
    link: 'https://www.facebook.com/cedottestore?locale=pt_BR'
  },
  {
    iconName: 'mdi:instagram',
    link: 'https://www.instagram.com/cedottestore/'
  }
]

const selectedPathClass = (path: string) => {
  return path === useRoute().path ? 'text-black' : ''
}
</script>
