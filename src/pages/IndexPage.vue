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

<style scoped>
.font-poppins {
  font-family: "Poppins", sans-serif;
}

.background-image {
  background-image: url("https://images2.imgbox.com/ac/a8/gmRhUCch_o.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
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
</style>
