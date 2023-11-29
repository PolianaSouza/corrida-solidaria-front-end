<template>
  <q-card class="container q-px-md">
    <div>
      <h1 class="title-form">Nova Corrida</h1>
    </div>
    <q-form
      class="row flex q-col-gutter-x-md q-col-gutter-y-md"
      @submit="submitForm"
    >
      <div class="col-xs-11 col-sm-6 col-md-6 col-lg-3">
        <q-input
          filled
          label="Título da corrida"
          v-model="formRun.nome"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Digite o título dessa corrida',
          ]"
        />
      </div>
      <div class="col-xs-11 col-sm-6 col-md-6 col-lg-3">
        <q-input
          filled
          label="Local da corrida"
          v-model="formRun.local"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Digite o local da corrida',
          ]"
        />
      </div>

      <div class="col-xs-11 col-sm-6 col-md-6 col-lg-3">
        <q-input
          filled
          label="Distância"
          v-model="formRun.distancia"
          lazy-rules
          :rules="[
            (val) =>
              (val && val.length !== 0) ||
              'Digite a distância a ser percorrida',
          ]"
        />
      </div>
      <div class="col-xs-11 col-sm-6 col-md-6 col-lg-3">
        <q-input
          filled
          v-model="formRun.data_horario"
          label="Dia e horário"
          :rules="validateDate"
        >
          <template v-slot:prepend>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="formRun.data_horario" mask="YYYY-MM-DD HH:mm">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>

          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-time
                  v-model="formRun.data_horario"
                  mask="YYYY-MM-DD HH:mm"
                  format24h
                >
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <div class="col-xs-11 col-sm-6 col-md-6 col-lg-3">
        <q-select
          filled
          label="Status"
          v-model="formRun.status"
          :options="optionsStatus"
          :option-label="optionsStatus.label"
          :option-value="optionsStatus.value"
          map-options
          emit-value
          lazy-rules
          :rules="[(val) => !!val || 'Informe o status da corrida']"
          behavior="menu"
        />
      </div>
      <div class="col-12" style="margin-top: 80px">
        <q-btn :label="labelButton" type="submit" color="primary" unelevated />
        <q-btn
          label="Cancelar"
          color="red"
          flat
          class="q-ml-sm"
          to="/admin/corridas"
        />
      </div>
    </q-form>
  </q-card>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { api } from "src/boot/axios";
// import { format } from "date-fns";

onMounted(() => {
  getRun();
});

const props = defineProps({
  idRun: {
    type: String,
    default: "",
  },
});

const labelButton = (props.idRun ? "Atualizar" : "Cadastrar") + " corrida";
const formRun = ref({
  nome: "",
  local: "",
  data_horario: null,
  distancia: null,
  status: null,
});

const validateDate = [
  (val) =>
    (val && val.length !== null) || "Informe a data e horário da corrida",
];

const optionsStatus = ref([
  { label: "Ativo", value: true },
  { label: "Inativo", value: false },
]);

const emit = defineEmits(["submitDataRun"]);
function submitForm() {
  emit("submitDataRun", formRun.value);
}

async function getRun() {
  try {
    const { data } = await api.get(`/corrida/${props.idRun}`);
    console.log(data);
    formRun.value = data;
    // formRun.value.data_horario = format(
    //   new Date(data.data_horario),
    //   "dd-MM-yyyy HH:mm"
    // );
  } catch (error) {
    console.log(error);
  }
}
</script>

<style scoped>
.title-form {
  font-size: 2rem;
  font-weight: 500;
}

.container {
  height: 100%;
  min-height: 80vh;
  width: 100%;
}
</style>
