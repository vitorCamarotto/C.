<template>
  <div class="w-full flex justify-center border border-green-500">
    <h1>
      {{ headerNavBarText }}
    </h1>
  </div>
  <slot />

  <div>
    <p>{{ footerRightsText }}</p>
  </div>
</template>

<script setup lang="ts">
const headerNavBarText: string = 'Bedotte'


const footerRightsText: string = 'Bedotte 2024 © All rights reserved.'

</script>
