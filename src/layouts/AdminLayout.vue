<template>
  <q-layout view="hHh lpR fff">
    <q-header class="text-white">
      <q-toolbar class="row flex justify-around">
        <div class="col-xs-1 col-md-2 col-lg-2">
          <q-img
            src="https://images2.imgbox.com/64/84/wF8M2Jgb_o.png"
            alt="Ícone"
            width="4rem"
            height="3.5rem"
            class="q-ml-md borderImage"
          />
        </div>
        <div class="col-xs-9 col-md-6 col-lg-7 flex justify-end">
          <q-tabs
            class="q-gutter-x-xl text-bold"
            inline-label
            outside-arrows
            mobile-arrows
            align="center"
            indicator-color="amber-12"
            active-color="amber-12"
          >
            <q-route-tab to="/admin/dashboard" label="Dashboard" />
            <q-route-tab to="/admin/usuarios" label="Usuários" />
            <q-route-tab to="/admin/corridas" label="Corridas" />
            <q-route-tab to="/admin/atletas" label="Atletas" />
          </q-tabs>
        </div>

        <div class="col-xs-2 col-md-1 flex justify-center">
          <q-btn dense flat class="login-button" label="Usuário" to="/login" />
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
  width: 80%;
}

.login-button:hover {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}
</style>
