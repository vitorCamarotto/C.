<template>
  <div class="flex flex-col items-center justify-center">
    <section class="flex flex-col items-center my-8">
      <h1 class="text-lg font-bold my-2">
        PRANCHAS
      </h1>
    </section>

    <section class="flex flex-col items-center">
      <div
        v-for="surfboard in surfboardsArray"
        :key="surfboard.name"
        @click="navigateToBoard(surfboard.path)"
        class="w-2/3 flex flex-col items-center justify-center rounded-lg border-2 my-4 border-emerald-200"
      >
        <h1 class="flex flex-col items-center text-2xl">
          {{ surfboard.name }}
        </h1>

        <NuxtImg :src="surfboard.src" :alt="`imagem-prancha-${surfboard.path}`"/>

        <p class="flex flex-col items-center text-lg">
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
