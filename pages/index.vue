<template>
  <div class="flex justify-center">
    <UCarousel
      v-slot="{ item }"
      :items="homeImages"
      :ui="{ item: 'basis-full' }"
      class="rounded-lg overflow-hidden w-2/3"
      indicators
    >
      <NuxtImg :src="item" class="w-full" draggable="true" />
    </UCarousel>

  </div>
</template>

<script setup lang="ts">
const homeImages = [
  '/surf-cedotte-1.jpg',
  '/pranchas-stock-cedotte.jpg',
  '/shaper-paulo-cedotte.jpg',
]

</script>

<style>

</style>