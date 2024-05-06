<template>
  <div>
    <USlideover class="mt-20" v-model="drawerVisible" :overlay="false">
      <div class="p-4 flex-1">
        <div class="flex flex-col items-center" v-for="path in paths" :key="path.to">
          <NuxtLink
            :to="path.to"
            class="text-2xl font-bold my-4"
            :class="selectedPathClass(path.to)"
            @click="drawerVisible = false"
          >
            {{ path.title}}
          </NuxtLink>
        </div>
      </div>
    </USlideover>
  </div>
</template>

<script setup lang="ts">
import paths from '@/utils/paths'

const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['drawerClosed'])

const drawerVisible = ref<boolean>(props.visible);

watch(() => props.visible, (value) => {
  drawerVisible.value = value
})

watch(() => drawerVisible.value, (value) => {
  if (!value) {
    emit('drawerClosed')
  }
})

const selectedPathClass = (path: string) => {
  return path === useRoute().path ? 'text-emerald-400' : ''
}
</script>
