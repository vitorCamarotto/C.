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

    <div>
      <UIcon
        size="30"
        class="me-4 text-black cursor-pointer"
        name="fluent:navigation-24-regular"
        @click="toggleNavDrawer"
        dynamic
      />
    </div>
  </div>

  <LayoutNavDrawer
    :visible="navDrawerVisible"
    @drawerClosed="closeNavDrawer"
  />
  <slot />
  <UDivider class="mt-10"/>

  <div class="flex justify-center mt-24 mb-4">
    <p>{{ footerRightsText }}</p>
  </div>
</template>

<script setup lang="ts">
const navDrawerVisible = ref<boolean>(false)

const footerRightsText: string = 'Cedotte 2024 © Todos os direitos reservados.'

const toggleNavDrawer = () => {
  navDrawerVisible.value = !navDrawerVisible.value
  console.log(navDrawerVisible.value)
}

const closeNavDrawer = () => {
  console.log('closing nav drawer')
  navDrawerVisible.value = false
}
</script>
