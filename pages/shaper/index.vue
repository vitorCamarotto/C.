<template>
  <div class="flex flex-col items-center justify-center">
    <section class="flex flex-col items-center my-8">
      <h1 class="text-lg font-light my-2 tracking-widest">
        Paulo Cedotte
      </h1>

      <p class="w-9/12 my-4 text-gray-300">
        {{ firstParagraph }}
      </p>

      <p class="w-9/12 my-4 text-gray-300">
        {{ secondParagraph }}
      </p>

      <NuxtImg
        src="/shaping.webp"
        class="w-full"
      />

      <p class="w-9/12 my-4 text-gray-300">
        {{ thirdParagraph }}
      </p>

      <UButton
        variant="soft"
        class="text-xl mt-12 tracking-wider"
        @click="navigateToBoardsPage"
      >
        Ver catálogo >
      </UButton>

    </section>
  </div>
</template>

<script setup lang="ts">
import { firstParagraph, secondParagraph, thirdParagraph } from '@/utils/shaper/paragraphs'

const navigateToBoardsPage = async () => {
  await navigateTo('/boards')
}
</script>
