<template>
  <div class="page-container">
    <form @submit="submitForm" class="form-card">
      <div class="form-column">
        <div class="form-card-section">
          <input
            v-model="formData.nomeCompleto"
            placeholder="Nome Completo"
            required
            class="colored-input"
          />
        </div>

        <div class="form-card-section">
          <input
            v-model="formData.dataNascimento"
            placeholder="Data de Nascimento"
            type="date"
            required
            class="colored-input"
          />
        </div>

        <div class="form-card-section">
          <input
            v-model="formData.cpf"
            placeholder="CPF"
            pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
            required
            class="colored-input"
          />
        </div>

        <div class="form-card-section">
          <input
            v-model="formData.email"
            placeholder="Email"
            type="email"
            required
            class="colored-input"
          />
        </div>
      </div>

      <div class="form-column">
        <div class="form-card-section">
          <input
            v-model="formData.endereco"
            placeholder="Endereço"
            required
            class="colored-input"
          />
        </div>

        <div class="form-card-section">
          <input
            v-model="formData.cep"
            placeholder="CEP"
            pattern="\d{5}-\d{3}"
            required
            class="colored-input"
          />
        </div>

        <div class="form-card-section">
          <select v-model="formData.sexo" required class="colored-input">
            <option value="" disabled>Selecione o Sexo</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Outro">Outro</option>
          </select>
        </div>

        <div class="form-card-section">
          <input
            v-model="formData.telefone"
            placeholder="Telefone"
            pattern="\(\d{2}\) \d{4}-\d{4}"
            required
            class="colored-input"
          />
        </div>
      </div>

      <div class="submit-button-container">
        <button type="submit">Inscrever-se</button>
      </div>
    </form>
  </div>
</template>

<script>
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

.form-card {
  display: flex;
  flex-wrap: nowrap;
  width: 80%;
  max-width: 800px;
  padding: 20px;
}

.form-card-section {
  margin-bottom: 10px;
}

.form-column {
  flex-basis: 50%;
  margin-right: 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

input,
select,
button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  margin-top: 5px;
  font-size: 16px;
}

button {
  background-color: #ffc400;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #727272;
}

.submit-button-container {
  position: fixed;
  bottom: 110px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 10%;
}
.colored-input {
  background-color: #ffdb5b;
  color: #000000;
}
@media (max-width: 600px) {
  .form-column {
    flex-basis: 100%;
    margin-right: 0;
  }
}
</style>
