<template>
  <div class="bg-green-300 w-full flex justify-between items-center h-20 my-auto">

    <NuxtLink
      to="/"
    >
      <NuxtImg
        class="ms-4 mt-2"
        src="/logo-cedotte.png"
      />
    </NuxtLink>

    <div>
      <UIcon
        size="30"
        class="me-4 text-black cursor-pointer"
        name="fluent:navigation-24-regular"
        dynamic
      />
    </div>
  </div>
  <slot />

  <div class="flex justify-center mt-24">
    <p>{{ footerRightsText }}</p>
  </div>
</template>

<script setup lang="ts">
const headerNavBarText: string = 'cedotte'


const footerRightsText: string = 'Cedotte 2024 © All rights reserved.'

</script>
