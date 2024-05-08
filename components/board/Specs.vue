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
              Rabeta:
            </p>

            <USelect v-model="tailType" :options="tailTypes"/>
          </div>
        </div>
      </template>

      <template #board-fins>
        <div class="flex flex-col justify-center items-center text-center h-auto font-bold text-white">
          <div class="my-4">
            <p class="mb-2">
              Sistema:
            </p>

            <USelect v-model="finSystem" :options="finSystems" />
          </div>

          <div class="my-4">
            <p class="mb-2">
              Configuração:
            </p>

            <USelect v-model="finConfiguration" :options="finConfigurations" />
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

    <p class="mt-8 tracking-wide text-gray-200">
      Preço final: {{ calculateFinalPrice() }}
    </p>

    <UButton
      color="primary"
      variant="solid"
      size="xl"
      class="mb-2 mt-8"
      @click="sendToWhatsApp"
    >
      Finalizar pedido no WhatsApp
    </UButton>

    <p class="text-sm text-gray-200">
      Prazo de entrega: 30 a 45 dias úteis
    </p>

    <div
      v-show="userClickedSubmit"
      class="flex flex-col items-center justify-center mt-12 p-2 rounded border border-rose-300"
    >
      <p class="text-gray-200" >
        O envio automático não funcionou?
      </p>

      <p class="text-gray-200 mt-2">
        Entre em contato pelo WhatsApp:
      </p>

      <p
        @click="copyWhatsAppNumberToClipboard"
        class="text-center text-blue-400 underline cursor-pointer"
      >
        {{ formatPhoneNumber(whatsAppNumber) }}
      </p>

      <p class="mt-2">
        e
      </p>

      <div class="mt-4 flex flex-col items-center cursor-pointer" @click="copyBoardSpecsToClipboard">
        <p class="text-blue-400 underline">
          Copie as informações da prancha:
        </p>

        <UIcon
          name="material-symbols:content-copy-rounded"
          class="mt-2"
          size="40"
          dynamic
        />

      </div>
    </div>

    <UNotifications />
  </div>
</template>

<script setup lang="ts">
import boardSpecs from '@/utils/board_specs'
const toast = useToast()

const props = defineProps({
  price: {
    type: Number,
    required: true,
  },
});

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

const userClickedSubmit = ref(false)

const whatsAppNumber = ref('5512997184721')

function formatPhoneNumber(phoneNumber: string) {
  if (phoneNumber.length !== 13) {
    return 'Invalid phone number length';
  }

  const countryCode = phoneNumber.substring(0, 2);
  const areaCode = phoneNumber.substring(2, 4);
  const firstPart = phoneNumber.substring(4, 9);
  const secondPart = phoneNumber.substring(9, 13);

  return `+${countryCode} (${areaCode}) ${firstPart}-${secondPart}`;
}

const whatsAppMessage = computed(() => {
  return `Salve! Novo pedido de prancha personalizada!:

  - Tamanho: ${boardSize.value}
  - Material: ${material.value}
  - Sistema de quilhas: ${finSystem.value}
  - Configuração de quilhas: ${finConfiguration.value}
  - Rabeta: ${tailType.value}
  - Pintura: ${colorChoice.value}
  - Nome no cliente: ${userName.value}
  - Informações adicionais: ${extraInfo.value}`
})

const sendToWhatsApp = () => {
  const encodedMessage = encodeURIComponent(whatsAppMessage.value);
  const whatsappUrl = `https://wa.me/${whatsAppNumber.value}?text=${encodedMessage}`;

  window.open(whatsappUrl, '_blank');

  userClickedSubmit.value = true;
}

const calculateFinalPrice = () => {
  let price = props.price || 0;

  if (material.value === 'Carbon (+ R$250,00)') {
    price += 250;
  }

  if (colorChoice.value === 'Sim, com pintura (+ R$150,00)') {
    price += 150;
  }

  return `R$ ${price}`;
}

const copyWhatsAppNumberToClipboard = () => {
  navigator.clipboard.writeText(whatsAppNumber.value);

  toast.add({ title: 'Número copiado!' });
}

const copyBoardSpecsToClipboard = () => {
  navigator.clipboard.writeText(whatsAppMessage.value);

  toast.add({ title: 'Informações da prancha copiadas!' });
}

</script>
