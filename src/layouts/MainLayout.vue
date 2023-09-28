<template>
  <q-layout view="hHh lpR fff">
    <q-header class="text-black">
      <q-toolbar class="transparent-toolbar row flex justify-around">
        <div class="col-xs-1 col-md-2 col-lg-2">
          <q-img
            src="https://images2.imgbox.com/64/84/wF8M2Jgb_o.png"
            alt="Ícone"
            width="55px"
            height="55px"
            class="mr-md"
          />
        </div>
        <div class="col-xs-9 col-md-6 col-lg-7">
          <q-tabs
            class="q-gutter-x-md text-bold"
            inline-label
            outside-arrows
            mobile-arrows
            align="justify"
            indicator-color="yellow-10"
            active-color="orange-10"
          >
            <q-route-tab to="/" label="Início" />
            <q-route-tab to="/inscrever" label="Inscrever-se" />
            <q-route-tab to="/" label="Ajudar" />
            <q-route-tab to="/" label="Placar" />
            <q-route-tab to="/sobre" label="Sobre nós" />
          </q-tabs>
        </div>

        <div class="col-xs-1 col-md-1 flex justify-center">
          <q-btn dense flat class="login-button" label="Login" to="/login" />
        </div>
      </q-toolbar>
    </q-header>

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
