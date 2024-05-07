<template>
  <div class="flex flex-col items-center justify-center">
    <section class="flex flex-col items-center justify-center h-[200px]">
      <div class="flex items-center justify-center px-2">
        <h1 class="text-xl font-bold tracking-[0.4rem] md:text-2xl lg:text-4xl">
          TECNOLOGIA
        </h1>

        <h1 class="self-end ms-2 text-sm tracking-widest md:text-base lg:text-xl lg:ms-6">
          AUSTRALIANA,
        </h1>
      </div>

      <div class="flex justify-center mt-4 lg:mt-12">
        <h1 class="text-xl font-bold tracking-[0.4rem] md:text-2xl lg:text-4xl">
          PERFORMANCE
        </h1>

        <h1 class="self-end ms-2 text-sm tracking-widest md:text-base lg:text-xl lg:ms-6">
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
        class="rounded overflow-hidden lg:w-6/12"
        indicators
      >
        <NuxtImg :src="item" class="w-full" draggable="false" alt="imagem-surf"/>
      </UCarousel>
    </section>

    <div class="xl:flex xl:gap-20 px-12">
      <section class="flex flex-col items-center justify-center relative">
        <UButton
          variant="soft"
          class="text-2xl border border-emerald-300 absolute top-[80%] right-12 tracking-wider xl:top-[91%] xl:right-28"
          @click="navigateToBoardsPage"
        >
          Ver catálogo
        </UButton>

        <h1 class="flex items-center text-center text-lg tracking-widest h-[240px] md:text-2xl xl:h-[160px] xl:mt-20">
          SUA PRÓXIMA PRANCHA ESTÁ AQUI
        </h1>

        <NuxtImg
          :src="homeImages[1].src"
          class="w-full xl:w-9/12"
          alt="pranchas-cedotte"
        />
      </section>

      <section class="flex flex-col items-center relative">
        <UButton
          variant="soft"
          class="text-2xl border border-emerald-300 absolute top-[80%] right-12 tracking-wider xl:top-[86%] xl:right-4"
          @click="navigateToShaperPage"
        >
          A história
        </UButton>

        <h1 class="flex items-center text-lg tracking-widest h-[240px] md:text-2xl xl:h-[160px] xl:mt-20">
          CONHEÇA O SHAPER
        </h1>

        <NuxtImg
          :src="homeImages[3].src"
          class="w-full"
          alt="shaper"
        />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const homeImages = [
  { src: 'home/cutback.webp' },
  { src: 'home/pranchas-stock-cedotte.webp' },
  { src: 'home/aereo.webp' },
  { src: 'home/shaper.webp' },
]

const homeImagesCarousel = [
  'home/aereo-2.webp',
  'home/tubo.webp',
  'home/aereo.webp',
  'home/cutback.webp',
  'home/rasgada.webp',
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
