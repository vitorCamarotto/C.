<template>
  <div class="bg-emerald-400 w-full flex justify-between items-center h-20 my-auto fixed z-10">
    <NuxtLink
      to="/"
    >
      <NuxtImg
        class="ms-4 mt-2"
        sizes="120px"
        src="/logo-cedotte.png"
      />
    </NuxtLink>

    <div>
      <UIcon
        size="30"
        class="me-4 text-black cursor-pointer"
        name="fluent:navigation-24-regular"
        @click="isNavBarOpen = !isNavBarOpen"
        dynamic
      />
    </div>
  </div>

  <div>
      <USlideover class="mt-20" v-model="isNavBarOpen" :overlay="false">
        <div class="p-4 flex-1">
          <div class="flex flex-col items-center">
            <NuxtLink
              to="/"
              class="text-2xl font-bold my-4"
              @click="isNavBarOpen = false"
            >
              HOME
            </NuxtLink>
            <NuxtLink
              to="/boards"
              class="text-2xl font-bold my-4"
              @click="isNavBarOpen = false"
            >
              PRANCHAS
            </NuxtLink>
            <NuxtLink
              to="/shaper"
              class="text-2xl font-bold my-4"
              @click="isNavBarOpen = false"
            >
              SHAPER
            </NuxtLink>
            </div>
        </div>
      </USlideover>
    </div>
  <slot />
  <UDivider class="mt-10"/>

  <div class="flex justify-center mt-24 mb-4">
    <p>{{ footerRightsText }}</p>
  </div>
</template>

<script setup lang="ts">
const isNavBarOpen = ref<boolean>(false)

const footerRightsText: string = 'Cedotte 2024 © Todos os direitos reservados.'

</script>
