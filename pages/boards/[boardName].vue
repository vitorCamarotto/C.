<template>
  <div class="flex flex-col items-center justify-center">
    <section>
      <UButton
        color="primary"
        variant="solid"
        class="mb-24 mt-4"
        @click="navigateToBoardsPage"
      >
        Voltar para catálogo
      </UButton>
    </section>

    <section class="flex flex-col items-center my-8">
      <h1 class="text-2xl font-bold my-2">
        {{ boardData.name }}
      </h1>

      <NuxtImg
        :src="boardData.src"
        class="w-2/3"
      />

      <p class="text-lg">
        R$ {{ boardData.price }}
      </p>
    </section>

    <section class="flex flex-col items-center my-8">
      <h2 class="w-10/12 text-lg text-center">
        {{ boardData.description }}
      </h2>

    </section>
  </div>
</template>

<script setup lang="ts">

const fallbackBoard = {
  name: '',
  price: '0',
  src: '',
  availableSizes: []
}

const boardData = ref(fallbackBoard)

const loadBoardData = async () => {
  const route = useRoute()
  const boardName = route.params.boardName

  try {
    const module = await import(`@/utils/boards/${boardName}.ts`)

    console.log("Loaded the board data:", module.default)
    boardData.value = module.default

  } catch (error) {
    console.error("Failed to load the board data:", error)
  }
}

const navigateToBoardsPage = async () => {
  await navigateTo('/boards')
}

onMounted(loadBoardData)
</script>
