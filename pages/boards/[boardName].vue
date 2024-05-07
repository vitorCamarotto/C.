<template>
  <div class="flex flex-col items-center justify-center md:max-w-[768px] md:mx-auto">
    <section>
      <UButton
        color="primary"
        variant="soft"
        class="mb-2 mt-4"
        @click="navigateToBoardsPage"
      >
        Voltar para catálogo
      </UButton>
    </section>

    <section class="flex flex-col items-center my-2">
      <NuxtImg
        :src="boardData.nameSrc"
        :alt="boardData.name"
        class="w-2/3 mb-4 mt-8"
      />

      <NuxtImg
        :src="boardData.src"
        :alt="boardData.name"
        class="w-2/3"
      />

      <h1 class="text-4xl mt-4 tracking-wider text-gray-200">
        {{ boardData.name }}
      </h1>

      <p class="text-gray-400 mt-2">
        R$ {{ boardData.price }}
      </p>
    </section>

    <section class="flex flex-col items-center my-8">
      <h2 class="w-10/12 text-lg text-center text-gray-300">
        {{ boardData.description }}
      </h2>
    </section>

    <section class="w-10/12 flex flex-col items-center">
      <UBadge
        variant="outline"
        class="mb-12 cursor-pointer shadow-lg hover:shadow-emerald-800 transition-all duration-500"
        size="lg"
        @click="scrollToBoardSpecs"
      >
        Monte sua prancha
      </UBadge>

      <BoardSpecs id="board-specs"/>
    </section>
  </div>
</template>

<script setup lang="ts">

const fallbackBoard = {
  name: '',
  price: '0',
  src: '',
  nameSrc: '',
  availableSizes: [],
  description: '',
}

const boardData = ref(fallbackBoard)

const loadBoardData = async () => {
  const route = useRoute()
  const boardName = route.params.boardName

  try {
    const module = await import(`@/utils/boards/${boardName}.ts`)

    boardData.value = module.default
  } catch (error) {
    console.error("Failed to load the board data:", error)
  }
}

const navigateToBoardsPage = async () => {
  await navigateTo('/boards')
}

const scrollToBoardSpecs = () => {
  const boardSpecs = document.getElementById('board-specs')

  boardSpecs?.scrollIntoView({ behavior: 'smooth', block: "end", inline: "nearest" })
}

onMounted(loadBoardData)
</script>
