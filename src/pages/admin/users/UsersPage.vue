<template>
  <q-page padding>
    <div class="flex justify-center">
      <q-card class="my-card q-pb-xl">
        <TableManager
          labelButton="Novo Usuário"
          :columns="columns"
          :rows="rows"
          routeBtnNew="/admin/usuarios/novo-usuario"
        />
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import TableManager from "src/components/common/TableManager.vue";
import { ref } from "vue";

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
    name: "email",
    requird: true,
    label: "Email",
    field: "email",
    align: "left",
    sortable: true,
  },
  {
    name: "login",
    required: true,
    label: "Login",
    field: "login",
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

const rows = ref([
  {
    nome: "João Silva",
    email: "joao.silvaemailcom",
    login: "joao123",
    status: "ativo",
  },
  {
    nome: "Maria Santos",
    email: "maria.santosemailcom",
    login: "maria456",
    status: "ativo",
  },
  {
    nome: "Carlos Pereira",
    email: "carlos.pereiraemailcom",
    login: "carlos789",
    status: "ativo",
  },
  {
    nome: "Ana Oliveira",
    email: "ana.oliveiraemailcom",
    login: "ana101",
    status: "inativo",
  },
  {
    nome: "Paulo Sousa",
    email: "paulo.sousaemailcom",
    login: "paulo202",
    status: "inativo",
  },
  {
    nome: "Lúcia Ferreira",
    email: "lucia.ferreiraemailcom",
    login: "lucia303",
    status: "ativo",
  },
  {
    nome: "Antônio Alves",
    email: "antonio.alvesemailcom",
    login: "antonio404",
    status: "inativo",
  },
  {
    nome: "Mariana Costa",
    email: "mariana.costaemailcom",
    login: "mariana505",
    status: "ativo",
  },
  {
    nome: "Pedro Rodrigues",
    email: "pedro.rodriguesemailcom",
    login: "pedro606",
    status: "ativo",
  },
  {
    nome: "Sandra Gomes",
    email: "sandra.gomesemailcom",
    login: "sandra707",
    status: "inativo",
  },
]);
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 1400px;
}
</style>
