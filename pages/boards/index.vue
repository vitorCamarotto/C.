<template>
  <div class="flex flex-col items-center justify-center">
    <section class="flex flex-col items-center my-8">
      <h1 class="text-lg font-light my-2 tracking-widest">
        PRANCHAS
      </h1>
    </section>

    <section class="flex flex-col items-center lg:content-center lg:grid lg:grid-cols-2 lg:gap-x-24 xl:grid-cols-3">
      <div
        v-for="surfboard in surfboardsArray"
        :key="surfboard.name"
        @click="navigateToBoard(surfboard.path)"
        class="w-2/3 flex flex-col items-center justify-center mx-auto mt-4 mb-16 cursor-pointer"
      >
        <NuxtImg :src="surfboard.src" :alt="`imagem-prancha-${surfboard.path}`"/>

        <h1 class="flex flex-col items-center mt-2 text-2xl tracking-widest">
          {{ surfboard.name }}
        </h1>

        <p class="flex flex-col items-center text-sm text-gray-400">
          R$ {{ surfboard.price }}
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { surfboardsArray } from '@/utils/surfboards'

const navigateToBoard = async (path: string) => {
  await navigateTo(`/boards/${path}`)
}

</script>
