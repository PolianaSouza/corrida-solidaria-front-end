<template>
  <q-page padding>
    <div class="flex justify-center">
      <q-card class="my-card q-pb-xl">
        <TableManager
          title="Atletas"
          labelButton="Novo Atleta"
          :columns="columns"
          :rows="rows"
          routeBtnNew="/admin/atletas/novo-atleta"
          routeUpdate="/admin/atletas/editar-atleta"
          :isAthlete="isAthlete"
          @removeItem="deleteAthlete"
        />
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import TableManager from "src/components/common/TableManager.vue";
import { api } from "src/boot/axios";
import { ref, onMounted } from "vue";

onMounted(() => {
  getAthletes();
});

const isAthlete = ref(true);
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
    name: "idade",
    requird: true,
    label: "Idade",
    field: "idade",
    align: "center",
    sortable: true,
  },
  {
    name: "sexo",
    required: true,
    label: "Sexo",
    field: "sexo",
    align: "center",
    sortable: true,
  },
  {
    name: "telefone",
    required: true,
    label: "Telefone",
    field: "telefone",
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
async function getAthletes() {
  try {
    const resposta = await api.get("/atleta");
    rows.value = resposta.data;
  } catch (error) {
    console.log(error);
  }
}

async function deleteAthlete(data) {
  try {
    console.log(data);
    const resposta = await api.delete("/atleta/" + data);
    rows.value = resposta.data;
    getAthletes();
    console.log(resposta.data);
  } catch (error) {
    console.log(error);
  }
}
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 1400px;
}
</style>
