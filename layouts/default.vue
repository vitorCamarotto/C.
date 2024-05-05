<template>
  <div class="w-full flex justify-center items-center h-12 my-auto">
    <h1>
      {{ headerNavBarText }}
    </h1>
  </div>
  <slot />

  <div class="flex justify-center mt-6">
    <p>{{ footerRightsText }}</p>
  </div>
</template>

<script setup lang="ts">
const headerNavBarText: string = 'Bedotte'


const footerRightsText: string = 'Bedotte 2024 © All rights reserved.'

</script>
