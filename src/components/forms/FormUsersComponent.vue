<template>
  <q-card class="container q-px-md">
    <div>
      <h1 class="title-form">Adicionar Usuário</h1>
    </div>
    <q-form
      class="row flex q-col-gutter-x-md q-col-gutter-y-md"
      @submit="submitForm"
    >
      <div class="col-xs-11 col-sm-6 col-md-6 col-lg-3">
        <q-input
          filled
          label="nome"
          v-model="formRegister.nome"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Digite seu nome']"
        />
      </div>
      <div class="col-xs-11 col-sm-6 col-md-6 col-lg-3">
        <q-input
          filled
          label="Matrícula"
          v-model="formRegister.matricula"
          mask="###.###.###-##"
          unmasked-value
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Digite sua matrícula']"
        />
      </div>

      <div class="col-xs-11 col-sm-6 col-md-6 col-lg-3">
        <q-input
          filled
          label="email"
          v-model="formRegister.email"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Digite seu e-mail']"
        />
      </div>
      <div class="col-xs-11 col-sm-6 col-md-6 col-lg-3">
        <q-input
          filled
          label="Telefone"
          v-model="formRegister.telefone"
          mask="(##)#####-####"
          unmasked-value
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Digite seu telefone']"
        />
      </div>

      <div class="col-xs-11 col-sm-6 col-md-6 col-lg-3">
        <q-input
          filled
          label="Usuario"
          v-model="formRegister.login"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Digite seu nome de usuário',
          ]"
        />
      </div>
      <div class="col-xs-11 col-sm-6 col-md-6 col-lg-3">
        <q-input
          v-model="formRegister.senha"
          filled
          :type="isPwd ? 'password' : 'text'"
          label="Senha"
          lazy-rules
          :rules="[(val) => (val && val.length >= 6) || 'Digite sua senha']"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
      </div>
      <div class="col-xs-11 col-sm-6 col-md-6 col-lg-3">
        <q-select
          filled
          label="Status"
          v-model="formRegister.status"
          :options="optionsStatus"
          :option-label="optionsStatus.label"
          :option-value="optionsStatus.value"
          map-options
          emit-value
          lazy-rules
          :rules="[(val) => !!val || 'informe a situação do usuário']"
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
          to="/usuarios"
        />
      </div>
    </q-form>
  </q-card>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { api } from "src/boot/axios";

onMounted(() => {});

const props = defineProps({
  idUser: {
    type: String,
    default: "",
  },
});

const labelButton = (props.idUser ? "Atualizar" : "Cadastrar") + " usuário";
const isPwd = ref(true);
const formRegister = ref({
  nome: "",
  email: "",
  telefone: "",
  matricula: "",
  login: "",
  senha: "",
  status: "",
});

const optionsStatus = ref([
  { label: "Ativo", value: "ativo" },
  { label: "Inativo", value: "inativo" },
]);

const emit = defineEmits(["submitDataUser"]);
function submitForm() {
  emit("submitDataUser", formRegister.value);
}

//na api ainda não tem rota para usuários
async function getUser(id) {
  const { data } = await api.get(`/usuarios/${id}`, {
    //ainda não tem token
    // headers: {
    //   Authorization: `Bearer ${token}`,
    // },
  });
  formRegister.value = data;
  formRegister.value.senha = "";
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
