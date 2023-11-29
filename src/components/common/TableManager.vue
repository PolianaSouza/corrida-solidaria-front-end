<template>
  <div class="q-pa-md">
    <div class="q-my-md">
      <q-btn
        icon="add"
        :label="labelButton"
        class="bg-green-7 text-white text-bold"
        :to="routeBtnNew"
      />
    </div>
    <q-table
      :title="title"
      :rows="rows"
      :columns="columns"
      row-key="name"
      flat
      bordered
    >
      <template v-slot:body-cell-acoes="props">
        <q-td :props="props">
          <div class="q-gutter-x-sm">
            <q-btn
              icon="edit"
              dense
              flat
              title="Editar"
              color="orange-9"
              @click="updated(props.row.id)"
            />

            <q-btn
              icon="delete"
              dense
              flat
              title="Excluir"
              color="red-8"
              @click="remove(props.row.id)"
            />
            <q-btn
              v-if="isAthlete"
              icon="sell"
              dense
              flat
              title="Visualizar Etiqueta"
              color="green-10"
              to="/admin/atletas/tag-atleta"
            />
          </div>
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  title: {
    type: String,
    required: false,
  },
  columns: {
    type: Array,
    required: true,
  },
  rows: {
    type: Array,
    required: true,
  },
  labelButton: {
    type: String,
    required: true,
    default: "Novo",
  },
  routeBtnNew: {
    type: String,
    required: true,
    default: "/",
  },
  routeUpdate: {
    type: String,
    required: false,
    default: "/",
  },
  remove: {
    type: Function,
    required: false,
  },
  isAthlete: {
    type: Boolean,
    required: false,
    default: false,
  },
});

function updated(id) {
  router.push(`${props.routeUpdate}/${id}`);
}
</script>

<style lang="scss" scoped></style>
