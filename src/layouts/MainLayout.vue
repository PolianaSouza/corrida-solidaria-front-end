<template>
  <q-layout view="hHh lpR fff">
    <q-header class="bg-primary text-black">
      <q-toolbar class="transparent-toolbar">
        <q-toolbar-title align="center">
          <div class="q-gutter-md q-layout-gutter-x">
            <q-img
              src="https://images2.imgbox.com/64/84/wF8M2Jgb_o.png"
              alt="Ícone"
              width="55px"
              height="55px"
              class="mr-md"
            />
            <q-btn
              dense
              flat
              label="Início"
              @click="navigateTo('inicio')"
              class="mr-md"
            />
            <q-btn
              dense
              flat
              label="Inscrever-se"
              @click="navigateTo('inscrever')"
              class="mr-md"
            />
            <q-btn
              dense
              flat
              label="Ajudar"
              @click="navigateTo('ajuda')"
              class="mr-md"
            />
            <q-btn
              dense
              flat
              label="Placar"
              @click="navigateTo('placar')"
              class="mr-md"
            />
            <q-btn
              dense
              flat
              label="Sobre Nós"
              @click="navigateTo('sobrenos')"
              class="mr-md"
            />
            <q-btn
              dense
              flat
              class="login-button"
              label="Login"
              @click="navigateTo('login')"
            />
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

function navigateTo(route) {}
</script>

<style scoped>
.mr-md {
  margin-right: 80px;
}
.transparent-toolbar {
  background-color: rgba(255, 255, 255, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
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
