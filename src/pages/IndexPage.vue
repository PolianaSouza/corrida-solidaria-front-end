<template>
  <q-page class="flex flex-center flex-column background-image">
    <div class="text-center">
      <h1 class="font-poppins font-bold" style="margin-bottom: 1px">
        <span class="hash-symbol">#</span
        ><span class="white-text">VocêEmMovimento</span>
      </h1>
      <h2
        class="font-poppins font-bold"
        style="font-size: 20px; color: #ffffff"
      >
        Um ser humano solidário é um ser humano melhor.
      </h2>
    </div>
  </q-page>
</template>

<script setup></script>

<script>
export default {
  data() {
    return {
      labels: [
        "Início da corrida:",
        "Fim da corrida:",
        "Distância:",
        "Dia e horário:",
      ],
      data: ["Avenida Ilhéus", "Rua São João", "10 km", "2023-11-25 09:30"],
    };
  },
};
</script>

<style scoped>
.font-poppins {
  font-family: "Poppins", sans-serif;
}

.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.background-image {
  background-image: url("../assets/corrida.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
}

.title {
  font-weight: bold;
  font-size: 20px;
}

.font-bold {
  font-weight: bold;
}

.hash-symbol {
  color: #ffc400;
}

.white-text {
  color: #ffffff;
}
.card {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: rgba(17, 18, 75, 0.719);
  color: #ffffff;
  padding: 10px;
  border-radius: 5px;
  width: 200px;
  height: 200px;
  border-radius: 20px;
}
.card-title {
  font-size: 18px;
  font-weight: bold;
  margin: 0;
}

.card-subtitle {
  background-color: #ffc400;
  color: #000000;
  font-size: 39px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
}

.left-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2ch;
  background-color: #fefbf4;
  margin: 30px;
}

.right-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fefbf4;
  margin: 30px;
  border-radius: 2ch;
}

.rectangle {
  padding: 10px;
  margin: 10px;
  text-align: center;
  border-radius: 30px;
}

.data-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.square {
  width: 10px;
  height: 10px;
  margin-right: 10px;
}

.green {
  background-color: green;
}

.red {
  background-color: red;
}

.icon {
  width: 20px;
  height: 20px;
}

.label {
  font-weight: bold;
}

.value {
  margin-left: 10px;
}
</style>
