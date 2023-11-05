<template>
  <q-page class="login-page flex justify-around items-center">
    <div class="container-form q-mx-xl">
      <q-form
        class="column flex justify-center items-center q-my-xl q-gutter-y-lg"
      >
        <q-input
          color="grey-10"
          bg-color="white"
          outlined
          v-model="formUser.userName"
          label="Usuário"
          class="inputs"
        >
          <template v-slot:prepend>
            <q-icon name="person" />
          </template>
        </q-input>
        <q-input
          color="grey-10"
          bg-color="white"
          outlined
          v-model="formUser.password"
          label="Senha"
          class="inputs"
          :type="isPwd ? 'password' : 'text'"
        >
          <template v-slot:prepend>
            <q-icon name="key" />
          </template>
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
        <q-btn
          label="Login"
          class="btn-login"
          unelevated
          to="/admin/dashboard"
        />
      </q-form>
    </div>
    <div>
      <q-img src="../../assets/logo_unex.png" width="25em" />
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const isPwd = ref(true);
const formUser = ref({
  userName: "",
  password: "",
});
</script>

<style scoped>
.login-page {
  background-image: url("../../assets/login-ok.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
}

.container-form {
  width: 100%;
  max-width: 600px;
  background-color: rgba(61, 61, 61, 0.575);
  border-radius: 25px;
  height: 50vh;
}

.btn-login {
  background-color: #f7c000;
  border-radius: 10px;
  width: 90%;
  margin-top: 80px;
  color: #ffffff;
  font-weight: bold;
  font-size: 1.4em;
}

.inputs {
  width: 90%;
}
</style>
