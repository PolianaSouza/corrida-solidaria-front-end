<template>
  <q-page padding>
    <div class="flex justify-center">
      <q-card class="my-card q-pb-xl">
        <TableManager
          labelButton="Nova corrida"
          :columns="columns"
          :rows="rows"
          routeBtnNew="/admin/corridas/nova-corrida"
          routeUpdate="/admin/corridas/editar-corrida"
          :remove="removeRun"
        />
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import TableManager from "src/components/common/TableManager.vue";
import { api } from "src/boot/axios";
import { ref, onMounted } from "vue";
import { date } from "quasar";
import { useQuasar } from "quasar";

const $q = useQuasar();
onMounted(() => {
  getRuns();
});

const columns = ref([
  {
    name: "nome",
    required: true,
    label: "Nome",
    field: "nome",
    align: "left",
    sortable: true,
  },
  {
    name: "local",
    requird: true,
    label: "Local",
    field: "local",
    align: "local",
    sortable: true,
  },
  {
    name: "data_horario",
    required: true,
    label: "Data e horário",
    field: (row) => date.formatDate(row.data_horario, "DD/MM/YYYY - HH:mm"),
    align: "center",
    sortable: true,
  },
  {
    name: "distancia",
    required: true,
    label: "Distância",
    field: "distancia",
    align: "center",
    sortable: true,
  },
  {
    name: "status",
    required: true,
    label: "Status",
    field: "status",
    align: "center",
    sortable: true,
  },
  {
    name: "acoes",
    required: true,
    label: "Ações",
    field: "acoes",
    align: "center",
    sortable: true,
  },
]);

const rows = ref([]);

async function getRuns() {
  try {
    const resposta = await api.get("/corrida");
    rows.value = resposta.data;
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

async function removeRun(id) {
  console.log("corrida id", id);
  $q.dialog({
    title: "Excluir Corrida",
    message: "Tem certeza que deseja excluir essa corrida?",
    cancel: true,
    persistent: true,
    ok: {
      push: true,
      color: "red-14",
      label: "Excluir",
    },
    cancel: {
      push: true,
      color: "grey-5",
      label: "Cancelar",
    },
  }).onOk(async () => {
    try {
      const { status } = await api.delete(`corrida/${id}`);
      if (status == 200) {
        $q.notify({
          color: "positive",
          icon: "check",
          position: "top",
          timeout: 1000,
          message: "Corrida excluída com sucesso",
        });
      }
    } catch (error) {
      $q.notify({
        color: "negative",
        icon: "report_problem",
        position: "top",
        timeout: 1000,
        message: "Erro ao excluir corrida",
      });
    }
    rows.value = [];
    getRuns();
  });
}
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 1400px;
}
</style>
