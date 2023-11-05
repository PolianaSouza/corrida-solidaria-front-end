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
      title="Treats"
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
              @click="updateItem(props.row.id)"
            />
            <q-btn
              icon="delete"
              dense
              flat
              title="excluir"
              color="red-8"
              @click="deleteItem(props.row.id)"
            />
          </div>
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script setup>
const props = defineProps({
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
});
</script>

<style lang="scss" scoped></style>
