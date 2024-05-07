<template>
  <div class="flex flex-col items-center justify-center">
    <section>
      <UButton
        color="primary"
        variant="soft"
        class="mb-8 mt-4"
        @click="navigateToBoardsPage"
      >
        Voltar para catálogo
      </UButton>
    </section>

    <section class="flex flex-col items-center my-8">
      <h1 class="text-4xl my-2 tracking-widest text-gray-200">
        {{ boardData.name }}
      </h1>

      <NuxtImg
        :src="boardData.src"
        class="w-2/3"
      />

      <p class="text-gray-400 mt-2">
        R$ {{ boardData.price }}
      </p>
    </section>

    <section class="flex flex-col items-center my-8">
      <h2 class="w-10/12 text-lg text-center text-gray-300">
        {{ boardData.description }}
      </h2>
    </section>

    <section class="w-10/12">
      <BoardSpecs />
    </section>
  </div>
</template>

<script setup lang="ts">

const fallbackBoard = {
  name: '',
  price: '0',
  src: '',
  availableSizes: [],
  description: '',
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
