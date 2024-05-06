<template>
  <div class="flex flex-col items-center justify-center">
    <section class="flex flex-col items-center my-8">
      <h1 class="text-lg font-bold my-2">
        PRANCHAS
      </h1>
    </section>

    <section class="flex flex-col items-center">
      <div
        @click="navigateToBoard"
        class="w-2/3 flex flex-col items-center justify-center border-white rounded-lg border-2"
      >
        <h1 class="flex flex-col items-center text-2xl">
          Bullet
        </h1>

        <NuxtImg
          src="/boards/bullet.jpeg"
        ></NuxtImg>

        <p class="flex flex-col items-center text-lg">
          R$ 2.000,00
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const navigateToBoard = async () => {
  await navigateTo('/boards/bullet')
}
</script>
