<template>
  <div class="flex flex-col items-center justify-center">
    <section class="flex flex-col items-center my-8">
      <h1 class="text-lg font-light my-2 tracking-widest">
        Paulo Cedotte
      </h1>

      <p class="w-9/12 my-4 text-gray-300">
        {{ firstParagraph }}
      </p>

      <p class="w-9/12 my-4 text-gray-300">
        {{ secondParagraph }}
      </p>

      <NuxtImg
        src="/shaping.jpeg"
        class="w-full"
      />

      <p class="w-9/12 my-4 text-gray-300">
        {{ thirdParagraph }}
      </p>

    </section>
  </div>
</template>

<script setup lang="ts">
const firstParagraph: string = 'A Cedotte Shapes começa quando o shaper Paulo Cedotte decide viajar pelo mundo atrás de ondas e com um sonho na cabeça: parar na Austrália e aprender as melhores técnicas de shape e fabricação de pranchas em um dos locais mais tradicionais do surf mundial: Gold Coast, na praia de Snapper Rocks.'
const secondParagraph: string = 'Surpreendido pelas oportunidades que apareceram, teve acesso às melhores fábricas de pranchas e aos ensinamentos que nem mesmo os próprios australianos tinham, pois os mestres não o viam como um futuro concorrente.'
const thirdParagraph: string = 'Inspirado por tudo o que aprendeu e com a confiança de quem adquiriu respeito dos melhores shapers do mundo, começa a desenvolver seus modelos de pranchas. Todas elas foram criadas com a supervisão de mestres do shape australiano.'
</script>
