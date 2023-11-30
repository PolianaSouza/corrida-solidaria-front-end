<template>
  <q-card class="container q-px-md">
    <div>
      <h1 class="title-form">Novo Atleta</h1>
    </div>
    <q-form
      class="row flex q-col-gutter-x-md q-col-gutter-y-md"
      @submit="submitForm"
    >
      <div class="col-xs-11 col-sm-6 col-md-6 col-lg-3">
        <q-input
          filled
          label="Nome do atleta"
          v-model="formAthlete.nome"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Digite o nome do atleta',
          ]"
        />
      </div>

      <div class="col-xs-11 col-sm-6 col-md-6 col-lg-3">
        <q-input
          filled
          label="Email do atleta"
          v-model="formAthlete.email"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Digite o email do atleta',
          ]"
        />
      </div>

      <div class="col-xs-11 col-sm-6 col-md-6 col-lg-3">
        <q-input
          filled
          v-model="formAthlete.data_nascimento"
          label="Data de nascimento do atleta"
          :rules="validateDate"
        >
          <template v-slot:prepend>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="formAthlete.data_nascimento" mask="YYYY-MM-DD">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>

      <div class="col-xs-11 col-sm-6 col-md-6 col-lg-3">
        <q-select
          filled
          label="Sexo"
          v-model="formAthlete.sexo"
          :options="optionsSexo"
          :option-label="optionsSexo.label"
          :option-value="optionsSexo.value"
          map-options
          emit-value
          lazy-rules
          :rules="[(val) => !!val || 'Informe o sexo do atleta']"
          behavior="menu"
        />
      </div>

      <div class="col-xs-11 col-sm-6 col-md-6 col-lg-3">
        <q-input
          filled
          type="tel"
          label="Telefone"
          v-model="formAthlete.telefone"
          lazy-rules
          :rules="validateTelefone"
        />
      </div>

      <div class="col-xs-11 col-sm-6 col-md-6 col-lg-3">
        <q-select
          filled
          label="Corrida"
          v-model="formAthlete.corridaId"
          :options="corridas"
          option-label="nome"
          option-value="id"
          emit-value
          map-options
          lazy-rules
          :rules="[(val) => !!val || 'Informe a corrida que deseja participar']"
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
          to="/admin/atletas"
        />
      </div>
    </q-form>
  </q-card>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { api } from "src/boot/axios";

onMounted(() => {
  getRuns();
  getAthlete();
});

const props = defineProps({
  idAthlete: {
    type: String,
    default: "",
  },
});

const labelButton = (props.idAthlete ? "Atualizar" : "Cadastrar") + " atleta";
const formAthlete = ref({
  nome: "",
  email: "",
  data_nascimento: null,
  sexo: null,
  telefone: null,
  etiqueta: Math.floor(Math.random() * 1000) + 1,
  corridaId: ""
});


const validateDate = [
  (val) =>
    (val !== null) || "Informe a data de nascimento do atleta",
  (val) => {
    const runDate = new Date(val);
    if (runDate > new Date()) {
      return "A data não pode ser anterior a data atual";
    }
    return true;
  },
];

let corridas = [];
async function getRuns() {
  try {
    const resposta = await api.get("/corrida");
    corridas = resposta.data;
  } catch (error) {
    $q.notify({
      color: "negative",
      icon: "report_problem",
      position: "top",
      timeout: 1000,
      message: "Erro ao carregar dados",
    });
    console.log(error);
  }
}

const validateTelefone = [
  (val) =>
    (val && val.length !== null) || "Digite um telefone para contato do atleta",
  (val) => {
    if (val.includes(" ")) {
      return "Digite o número sem espaços";
    } else {
      if (val.length == 10 || val.length == 11) {
        return true;
      } else {
        return "Número de telefone inválido, informe o DDD e o número";
      }
    }
  },
];

const optionsSexo = ref([
  { label: "Masculino", value: "M" },
  { label: "Feminino", value: "F" },
]);

const emit = defineEmits(["submitDataAthlete"]);
function submitForm() {
  emit("submitDataAthlete", formAthlete.value);
}

async function getAthlete() {
  try {
    const { data } = await api.get(`/atleta/${props.idAthlete}`);
    formAthlete.value = data;
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
