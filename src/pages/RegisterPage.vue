<template>
  <div class="page-container">
    <div class="form-container">
      <div class="form-column">
        <div class="form-card-section colored-input">
          <q-input
            v-model="formData.nomeCompleto"
            filled
            label="Nome Completo"
          />
        </div>
        <div class="form-card-section colored-input">
          <q-input
            v-model="formData.dataNascimento"
            filled
            label="Data de Nascimento"
          />
        </div>
        <div class="form-card-section colored-input">
          <q-input v-model="formData.cpf" filled label="CPF" />
        </div>
        <div class="form-card-section colored-input">
          <q-input v-model="formData.email" filled label="Email" />
        </div>
      </div>
      <div class="form-column" style="margin-left: 20px">
        <div class="form-card-section colored-input">
          <q-select
            v-model="formData.sexo"
            filled
            label="Selecione o Sexo"
            :options="sexOptions"
          />
        </div>
        <div class="form-card-section colored-input">
          <q-input v-model="formData.endereco" filled label="Endereço" />
        </div>
        <div class="form-card-section colored-input">
          <q-input v-model="formData.cep" filled label="CEP" />
        </div>
        <div class="form-card-section colored-input">
          <q-input v-model="formData.telefone" filled label="Telefone" />
        </div>
      </div>
    </div>
    <div class="submit-button-container">
      <q-btn label="Inscrever-se" color="amber" glossy @click="submitForm" />
    </div>
  </div>
</template>

<script>
import { QSelect, QInput, QBtn } from "quasar";

export default {
  data() {
    return {
      formData: {
        nomeCompleto: "",
        dataNascimento: "",
        cpf: "",
        email: "",
        endereco: "",
        cep: "",
        sexo: "",
        telefone: "",
      },
      sexOptions: ["Masculino", "Feminino", "Outro"],
    };
  },
  methods: {
    submitForm() {
      console.log(this.formData);
      this.formData = {
        nomeCompleto: "",
        dataNascimento: "",
        cpf: "",
        email: "",
        endereco: "",
        cep: "",
        sexo: "",
        telefone: "",
      };
    },
  },
  components: {
    QSelect,
    QInput,
    QBtn,
  },
};
</script>

<style scoped>
.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("https://images2.imgbox.com/58/3d/Y0CTXMjo_o.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.form-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 80%;
  max-width: 800px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.form-column {
  width: 50%;
}
.form-card-section {
  margin-bottom: 10px;
}

.submit-button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 100px;
  left: 0;
  right: 0;
}
.submit-button-container .q-btn {
  background-color: #ffa500;
  color: #ffffff;
  padding: 10px 70px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.submit-button-container .q-btn:hover {
  background-color: #ffd900;
  color: #ffffff;
}

.colored-input {
  background-color: #ffdb5b;
  color: #ffffff;
}
@media (max-width: 600px) {
  .form-column {
    flex-basis: 100%;
    margin-right: 0;
  }
}
</style>
