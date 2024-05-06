<template>
  <div class="flex flex-col items-center justify-center">
    <section class="flex flex-col items-center my-8">
      <h1 class="text-lg font-bold my-2">
        TECNOLOGIA.
      </h1>

      <h1 class="text-lg font-bold my-2">
        DESIGN.
      </h1>
      <h1 class="text-lg font-bold my-2">
        PERFORMANCE.
      </h1>
    </section>

    <section class="flex flex-col items-center">

      <NuxtImg
        :src="homeImages[2].src"
        class="w-full"
      />
      <NuxtImg
        :src="homeImages[0].src"
        class="w-full"
      />
    </section>

    <section class="flex flex-col items-center">
      <h1 class="text-lg font-bold mt-24">
        SUA PRÓXIMA PRANCHA ESTÁ AQUI
      </h1>

      <UButton
        color="primary"
        variant="solid"
        class="mb-24 mt-4"
      >
        Ver catálogo

      </UButton>

      <NuxtImg
        :src="homeImages[1].src"
        class="w-full"
      />
    </section>

    <section class="flex flex-col items-center">
      <h1 class="text-lg font-bold mt-24">
        CONHEÇA O SHAPER
      </h1>

      <NuxtImg
        :src="homeImages[3].src"
        class="w-full"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
const homeImages = [
  { src: '/surf-cedotte-1.jpg' },
  { src: '/pranchas-stock-cedotte.jpg' },
  { src: '/aereo-1.jpg' },
  { src: '/shaper.jpeg' },
]

</script>
