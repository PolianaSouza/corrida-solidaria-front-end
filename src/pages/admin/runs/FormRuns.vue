<template>
  <q-page padding>
    <div>
      <FormRunComponent @submitDataRun="createRun" />
    </div>
  </q-page>
</template>

<script setup>
import FormRunComponent from "../../../components/forms/FormRunComponent.vue";
import { api } from "src/boot/axios";
import { QSpinnerBall, useQuasar } from "quasar";
import { useRouter, useRoute } from "vue-router";

const $q = useQuasar();
const router = useRouter();
const route = useRoute();
const { id } = route.params;

async function createRun(data) {
  data.data_horario = new Date(data.data_horario);
  data.distancia = Number(data.distancia);
  const dados = { ...data };
  console.log("horario", dados);
  console.log("cadastrando", dados);
  $q.loading.show({
    message: "Cadastrando corrida, aguarde...",

    delay: 400,
    spinner: QSpinnerBall,
    spinnerColor: "purple-6",
    spinnerSize: 140,
  });

  try {
    const resposta = await api.post("/corrida", dados);
    if (resposta.status == 201) {
      $q.notify({
        color: "positive",
        icon: "check",
        position: "top",
        timeout: 1000,
        message: "Corrida cadastrada com sucesso",
      });
    } else {
      $q.notify({
        color: "negative",
        icon: "report_problem",
        position: "top",
        timeout: 1000,
        message: "Erro ao cadastrar corrida",
      });
    }
    router.push("/admin/corridas");
    $q.loading.hide();
  } catch (error) {
    $q.loading.hide();
    $q.notify({
      color: "negative",
      icon: "report_problem",
      position: "top",
      timeout: 1000,
      message: "Erro ao cadastrar corrida",
      error,
    });
    console.log(error);
  }
}

async function updateRun(data) {
  data.data_horario = new Date(data.data_horario);
  data.distancia = Number(data.distancia);
  const dados = { ...data };
  $q.loading.show({
    message: "Buscando informações no servidor...",

    delay: 400,
    spinner: QSpinnerBall,
    spinnerColor: "purple-6",
    spinnerSize: 140,
  });
  try {
    const resposta = await api.put(`/corrida/${id}`, dados);

    if (resposta.status == 200) {
      $q.notify({
        color: "positive",
        icon: "check",
        position: "top",
        timeout: 1000,
        message: "Corrida atualizado com sucesso",
      });
    } else {
      $q.notify({
        color: "negative",
        icon: "report_problem",
        position: "top",
        timeout: 1000,
        message: "Erro ao atualizar corrida",
      });
    }
    router.push("/admin/corridas");
    $q.loading.hide();
  } catch (error) {
    console.log(error);
    $q.loading.hide();
  }
}

async function onSubmitRunData(data) {
  console.log("cheguei", data);
  if (id) {
    await updateRun(data);
  } else {
    console.log("aqui", data);
    await createRun(data);
  }
}
</script>

<style lang="scss" scoped></style>
