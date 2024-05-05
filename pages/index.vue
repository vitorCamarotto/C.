<template>
  <div class="flex justify-center">
    <UCarousel
      v-slot="{ item }"
      :items="homeImages"
      :ui="{ item: 'basis-full' }"
      class="rounded-lg overflow-hidden flex w-10/12"
      indicators
    >
      <NuxtImg :src="item" class="mx-auto" draggable="true" />
    </UCarousel>

  </div>
</template>

<script setup lang="ts">
const homeImages = [
  '/surf-cedotte-1.jpg',
  '/pranchas-stock-cedotte.jpg',
  '/aereo-1.jpg',
  '/shaper-paulo-cedotte.jpg',
]

</script>

<style>

</style>