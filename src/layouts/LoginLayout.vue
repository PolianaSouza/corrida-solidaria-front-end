<template>
  <q-layout view="hHh lpR fff">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup></script>

<style scoped>
.transparent-toolbar {
  background-color: rgba(255, 255, 255, 0.45);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0px 8px 10px 0px rgba(129, 126, 126, 0.25);
}
.login-button {
  background-color: #ffc400;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  transition: box-shadow 0.3s;
  width: 100px;
}

.login-button:hover {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}
</style>
