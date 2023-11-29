<template>
  <q-page padding>
    <div class="flex justify-center">
      <q-card class="my-card q-pb-xl">
        <q-card-section class="q-mb-md">
          <q-card-title class="q-mb-md text-h6 font-poppins font-bold">Corridas</q-card-title>
        </q-card-section>
        <q-card-section class="q-pt-xs q-pb-xs">
          <TableRun title="Em Andamento" :columns="columns" :rows="rows1" />
        </q-card-section>
        <q-card-section class="q-pt-xs q-pb-xs">
          <TableRun title="Finalizadas" :columns="columns" :rows="rows2" />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import TableRun from "src/components/common/TableRun.vue";
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
    required: true,
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
]);

const rows1 = ref([]);
const rows2 = ref([]);


async function getRuns() {
  try {
  const resposta = await api.get("/corrida");

    // Filtra as corridas com base na data
    const currentDate = new Date();
    resposta.data.forEach((corrida) => {
      const corridaData = new Date(corrida.data_horario);

      // Verifica se a data da corrida é anterior à data atual
      if (corridaData < currentDate) {
        rows2.value.push(corrida);
      } else {
        rows1.value.push(corrida);
      }
    });

  console.log(resposta.data);
  } catch (error) {
  console.error(error);
  }

}
</script>

<style lang="scss" scoped>
.font-poppins {
  font-family: "Poppins", sans-serif;
}

.my-card {
  width: 100%;
  max-width: 1400px;
}

.text-center {
  text-align: center;
}

.text-h6 {
  font-size: 3em;
  margin-left: 0.3em;
}

.q-my-xs {
  margin-top: 0em; /* Ajuste a margem superior conforme necessário */
  margin-bottom: 0em; /* Ajuste a margem inferior conforme necessário */
}

.q-pt-xs {
  padding-top: 0em; /* Ajuste o padding superior conforme necessário */
}

.q-pb-xs {
  padding-bottom: 0em; /* Ajuste o padding inferior conforme necessário */
}
</style>
