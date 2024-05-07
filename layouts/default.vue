<template>
  <div class="bg-emerald-400 w-full flex justify-between items-center h-20 my-auto fixed z-10">
    <NuxtLink to="/">
      <NuxtImg
        class="ms-4 mt-2"
        sizes="100px"
        src="/logo-cedotte.png"
        alt="logo-cedotte"
      />
    </NuxtLink>

    <UIcon
      size="30"
      class="me-4 text-black cursor-pointer"
      name="fluent:navigation-24-regular"
      @click="toggleNavDrawer"
      dynamic
    />
  </div>

  <LayoutNavDrawer
    :visible="navDrawerVisible"
    @drawerClosed="closeNavDrawer"
  />
  <slot />

  <UDivider class="mt-10"/>

  <div class="flex flex-col items-center justify-center mt-8 mb-4 text-center">
    <NuxtImg
      class="mb-8"
      sizes="40px"
      src="/gas-mask-white.png"
      alt="gas-mask"
    />

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
</script>
