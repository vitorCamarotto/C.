<template>
  <div class="flex flex-col items-center justify-center w-full">
    <UAccordion :items="boardSpecs" size="xl">
      <template #board-size>
        <div class="flex flex-col justify-center items-center text-center h-36 text-white font-bold">
          <p class="mb-2">
            Escolha o tamanho da prancha:
          </p>

          <USelect v-model="boardSize" :options="boardSizes" />
        </div>
      </template>

      <template #board-construction>
        <div class="flex flex-col justify-center items-center text-center h-auto font-bold text-white">
          <div class="my-4">
            <p class="mb-2">
              Material:
            </p>

            <USelect v-model="material" :options="materials" />
          </div>

          <div class="my-4">
            <p class="mb-2">
              Sistema de quilhas:
            </p>

            <USelect v-model="finSystem" :options="finSystems" />
          </div>

          <div class="my-4">
            <p class="mb-2">
              Configuração de quilhas:
            </p>

            <USelect v-model="finConfiguration" :options="finConfigurations" />
          </div>

          <div class="my-4">
            <p class="mb-2">
              Rabeta:
            </p>

            <USelect v-model="tailType" :options="tailTypes" />
          </div>
        </div>
      </template>

      <template #board-paint>
        <div class="flex flex-col justify-center items-center text-center h-auto font-bold text-white">
          <div class="my-4">
            <p class="mb-2">
              Quer pintura?
            </p>

            <USelect v-model="colorChoice" :options="colorChoices" />

            <p v-if="colorChoice === 'Sim, com pintura (+ R$150,00)'" class="mt-4">
              Iremos entrar em contato para definir os detalhes da pintura.
            </p>
          </div>
        </div>
      </template>

      <template #user-info>
        <div class="flex flex-col justify-center items-center text-center h-auto font-bold text-white">
          <div class="my-4">
            <p class="mb-2">
              Seu nome (para ser escrito na prancha):
            </p>

            <UInput v-model="userName" />
          </div>

          <div class="my-4">
            <p class="mb-2">
              Informações adicionais para o Shaper:
            </p>

            <UTextarea v-model="extraInfo" />
          </div>
        </div>
      </template>


    </UAccordion>

    <UButton
      color="primary"
      variant="solid"
      class="mb-8 mt-4"
      @click="console.log('Pedido realizado com sucesso! Em breve entraremos em contato.')"
    >
      Finalizar pedido no WhatsApp
    </UButton>

    <p class="text-sm">
      Prazo de entrega: 30 a 45 dias úteis
    </p>
  </div>
</template>

<script setup lang="ts">
import boardSpecs from '@/utils/board_specs'

const boardSizes = ["", "Peça conselho do shaper", "5'10 x 19 x 2 1/2 x 24L", "5'11 x 19 x 2 1/2 x 27L", "6'0 x 19 x 2 1/2 x 29L"]
const boardSize = ref(boardSizes[0])

const materials = ["", "Peça conselho do shaper",'PU', 'Epoxy', 'Carbon (+ R$250,00)']
const material = ref(materials[0])

const finSystems = ["", "Peça conselho do shaper", 'FCS II', 'Futures']
const finSystem = ref(finSystems[0])

const finConfigurations = ["", "Peça conselho do shaper", '3 quilhas', '4 quilhas', '5 quilhas']
const finConfiguration = ref(finConfigurations[0])

const tailTypes = ["", "Peça conselho do shaper", 'Squash', 'Round', 'Swallow', 'Diamond']
const tailType = ref(tailTypes[0])

const colorChoices = ["", "Sim, com pintura (+ R$150,00)", "Não, sem pintura"]
const colorChoice = ref(colorChoices[0])

const userName = ref('')
const extraInfo = ref('')
</script>