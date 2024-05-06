<template>
  <div class="bg-green-300 w-full flex justify-between items-center h-20 my-auto">
    <NuxtImg
      class="ms-4"
      src="/logo-cedotte.png"
    />

    <div>
      <UIcon
        size="30"
        class="me-4 text-black"
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
