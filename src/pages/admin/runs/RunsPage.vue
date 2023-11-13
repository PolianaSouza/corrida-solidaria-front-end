<template>
  <q-page padding>
    <div class="flex justify-center">
      <q-card class="my-card q-pb-xl">
        <TableManager
          labelButton="Nova corrida"
          :columns="columns"
          :rows="rows"
          routeBtnNew="/admin/corridas/nova-corrida"
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
    console.log(resposta.data);
  } catch (error) {
    console.log(error);
  }
}

//rows mock
// const rows = ref([
//   {
//     nome: "Corrida da Montanha",
//     local: "Vitória da Conquista",
//     data_horario: "15/12/2023 às 08:00 hrs",
//     distancia: "10 km",
//     status: "ativo",
//   },
//   {
//     nome: "Corrida Beira-Mar",
//     local: "Salvador",
//     data_horario: "20/12/2023 às 07:30 hrs",
//     distancia: "5 km",
//     status: "ativo",
//   },
//   {
//     nome: "Meia Maratona de Feira",
//     local: "Feira de Santana",
//     data_horario: "25/12/2023 às 09:15 hrs",
//     distancia: "21 km",
//     status: "ativo",
//   },
//   {
//     nome: "Corrida Noturna de Itabuna",
//     local: "Itabuna",
//     data_horario: "30/12/2023 às 20:00 hrs",
//     distancia: "8 km",
//     status: "inativo",
//   },
//   {
//     nome: "Corrida das Praias",
//     local: "Salvador",
//     data_horario: "10/01/2024 às 06:45 hrs",
//     distancia: "15 km",
//     status: "ativo",
//   },
//   {
//     nome: "Maratona da Serra",
//     local: "Vitória da Conquista",
//     data_horario: "15/01/2024 às 07:30 hrs",
//     distancia: "42 km",
//     status: "ativo",
//   },
//   {
//     nome: "Corrida do Cacau",
//     local: "Itabuna",
//     data_horario: "20/01/2024 às 08:00 hrs",
//     distancia: "10 km",
//     status: "inativo",
//   },
//   {
//     nome: "Corrida dos Parques",
//     local: "Salvador",
//     data_horario: "25/01/2024 às 09:00 hrs",
//     distancia: "12 km",
//     status: "ativo",
//   },
//   {
//     nome: "Corrida da Cidade",
//     local: "Feira de Santana",
//     data_horario: "30/01/2024 às 07:00 hrs",
//     distancia: "7 km",
//     status: "inativo",
//   },
//   {
//     nome: "Corrida Noturna de Verão",
//     local: "Vitória da Conquista",
//     data_horario: "05/02/2024 às 20:30 hrs",
//     distancia: "5 km",
//     status: "ativo",
//   },
// ]);
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 1400px;
}
</style>
