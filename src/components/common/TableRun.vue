<template>
  <div class="q-pa-md">
    <q-table
      :title="title"
      :rows="rows"
      :columns="columns"
      row-key="name"
      flat
      bordered
    >
    </q-table>
  </div>
</template>

<script setup>
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
});

function viewTag(atleta_id) {}
</script>

<style lang="scss" scoped></style>
