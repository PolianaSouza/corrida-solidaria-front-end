<template>
  <q-page padding>
    <div class="flex justify-center">
      <q-card class="my-card q-pb-xl">
        <TableManager
          title="Em Andamento"
          :columns="columns"
          :rows="rows"
        />
        <TableManager title="Finalizadas" :columns="columns" :rows="rows" />
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import TableManager from "src/components/common/TableRun.vue";
import { api } from "src/boot/axios";
import { ref, onMounted } from "vue";
import { date } from "quasar";

onMounted(() => {
  getRuns();
});

const columns = ref([
  {
    name: "data_horario",
    required: true,
    label: "Data e horário",
    field: (row) => date.formatDate(row.data_horario, "DD/MM/YYYY - HH:mm"),
    align: "center",
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
    name: "nome_corrida",
    required: true,
    label: "Nome da Corrida",
    field: "nome_corrida",
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
    name: "quantidade_inscricoes",
    required: true,
    label: "Qtd. de Inscrições",
    field: "quantidade_inscricoes",
    align: "center",
    sortable: true,
  },
]);

const rows = ref([]);

async function getRuns() {
  try {
    const resposta = await api.get("/corrida");
    rows.value = resposta.data;
    console.log(resposta.data);
  } catch (error) {
    console.log(error);
  }
}
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 1400px;
}
</style>
