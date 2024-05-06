<template>
  <div class="flex flex-col items-center justify-center">
    <section class="flex flex-col items-center my-8">
      <h1 class="text-lg font-bold my-2">
        Paulo Cedotte
      </h1>

      <p class=my-4>
        {{ firstParagraph }}
      </p>
      <NuxtImg
        src="/shaping.jpeg"
        class="w-full"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
const firstParagraph: string = 'A Cedotte Shapes começa quando o shaper Paulo Cedotte decide viajar pelo mundo atrás de ondas e com um sonho na cabeça: parar na Austrália e aprender as melhores técnicas de shape e fabricação de pranchas em um dos locais mais tradicionais do surf mundial: Gold Coast, na praia de Snapper Rocks.'

</script>
