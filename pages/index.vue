<template>
  <div class="flex flex-col items-center justify-center">
    <section class="flex flex-col items-center justify-center h-[200px]">
      <div class="flex items-center justify-center px-2">
        <h1 class="text-xl font-bold tracking-[0.4rem]">
          TECNOLOGIA
        </h1>

        <h1 class="self-end ms-2 text-sm tracking-widest">
          AUSTRALIANA,
        </h1>
      </div>

      <div class="flex justify-center mt-4">
        <h1 class="text-xl font-bold tracking-[0.4rem]">
          PERFORMANCE
        </h1>

        <h1 class="self-end ms-2 text-sm tracking-widest">
          BRASILEIRA.
        </h1>
      </div>
    </section>

    <section class="flex flex-col items-center">
      <UCarousel
        ref="carouselRef"
        v-slot="{ item }"
        :items="homeImagesCarousel"
        :ui="{ item: 'basis-full' }"
        class="rounded-lg overflow-hidden lg:h-screen"
        indicators
      >
        <NuxtImg :src="item" class="w-full" draggable="false" alt="imagem-surf"/>
      </UCarousel>
    </section>

    <section class="flex flex-col items-center justify-center relative">
      <UButton
        variant="soft"
        class="text-3xl absolute top-[80%] right-12 tracking-wider"
        @click="navigateToBoardsPage"
      >
        Ver catálogo >
      </UButton>

      <h1 class="flex items-center text-center text-lg tracking-widest h-[240px]">
        SUA PRÓXIMA PRANCHA ESTÁ AQUI
      </h1>

      <NuxtImg
        :src="homeImages[1].src"
        class="w-full"
        alt="pranchas-cedotte"
      />
    </section>

    <section class="flex flex-col items-center relative">
      <UButton
        variant="soft"
        class="text-3xl absolute top-[80%] right-12 tracking-wider"
        @click="navigateToShaperPage"
      >
        A história >
      </UButton>

      <h1 class="flex items-center text-lg tracking-widest h-[240px]">
        CONHEÇA O SHAPER
      </h1>

      <NuxtImg
        :src="homeImages[3].src"
        class="w-full"
        alt="shaper"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
const homeImages = [
  { src: 'home/cutback.jpg' },
  { src: 'home/pranchas-stock-cedotte.jpg' },
  { src: 'home/aereo.jpg' },
  { src: 'home/shaper.jpeg' },
]

const homeImagesCarousel = [
  'home/aereo-2.jpeg',
  'home/tubo.jpeg',
  'home/aereo.jpg',
  'home/cutback.jpg',
  'home/rasgada.jpeg',
]

const navigateToBoardsPage = async () => {
  await navigateTo('/boards')
}

const navigateToShaperPage = async () => {
  await navigateTo('/shaper')
}

const carouselRef = ref()

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 2800)
})
</script>
