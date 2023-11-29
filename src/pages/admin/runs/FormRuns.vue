<template>
  <q-page padding>
    <div>
      <FormRunComponent @submitDataRun="onSubmitRunData" :idRun="id" />
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

// function formatDate(date) {
//   let data = parse(date, "dd-MM-yyyy HH:mm", new Date());
//   let isoFormatDate = format(data, "yyyy-MM-ddTHH:mm:SSZ");
//   // isoFormatDate += "Z";
//   console.log("a data", date);
//   console.log("a data", isoFormatDate);
//   return isoFormatDate;
// }

async function updateRun(data) {
  // console.log("atualizando", data);
  // console.log("horario", data.data_horario);
  // // console.log("horario ISO", new Date(data.data_horario).toISOString());
  // // console.log("horario ISO", format(
  // //     new Date(data.data_horario),
  // //     "dd-MM-yyyy HH:mm"
  // //   ));
  // formatDate(data.data_horario);
  // // console.log("horario ISO", formatDate(data.data_horario));
  // // console.log(
  // //   "horario ISO",
  // //   format(
  // //     parse(data.data_horario, "dd-MM-yyyy", new Date()),
  // //     "yyyy-MM-dd'T'HH:mm:ssxxx"
  // //   )
  // // );

  data.data_horario = new Date(data.data_horario).toISOString();
  console.log("horario", data.data_horario);
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
    const resposta = await api.patch(`/corrida/${id}`, dados);

    if (resposta.status == 200) {
      $q.notify({
        color: "positive",
        icon: "check",
        position: "top",
        timeout: 1000,
        message: "Corrida atualizada com sucesso",
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
