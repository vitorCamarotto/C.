<template>
  <div class="flex flex-col items-center justify-center">
    <section class="flex flex-col items-center my-8">
      <h1 class="text-xl font-bold my-2">
        TECNOLOGIA AUSTRALIANA,
      </h1>

      <h1 class="text-xl font-bold my-2">
        PERFORMANCE BRASILEIRA
      </h1>
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
        <NuxtImg :src="item" class="w-full" draggable="false" />
      </UCarousel>
    </section>

    <section class="flex flex-col items-center">
      <h1 class="text-lg font-bold mt-24">
        SUA PRÓXIMA PRANCHA ESTÁ AQUI
      </h1>

      <UButton
        color="primary"
        variant="solid"
        class="mb-24 mt-4 text-lg"
        @click="navigateToBoardsPage"
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
