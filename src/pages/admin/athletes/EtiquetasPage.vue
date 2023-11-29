<template>
  <div class="botoes-acao">
    <q-btn
      icon="arrow_back"
      label="Voltar"
      class="bg-green-6 text-white text-bold"
      to="/admin/atletas"
    />
  </div>

  <div
    class="q-pa-md row justify-center items-start q-gutter-md width-45.5rem height-15.25rem"
  >
    <q-col cols="6" class="my-card">
      <label class="text-h6">DADOS DOS ATLETAS</label>
      <q-card class="bg-grey-2">
        <q-card-section class="q-card-section--vert flex">
          <div class="dados_atleta q-col-8 pl-50">
            <div class="q-mb-md text-p">{{ atleta_nome }}</div>
            <div class="q-mb-md text-p">{{ atleta_idade }} Anos</div>
            <div class="q-mb-md text-p">{{ atleta_telefone }}</div>
            <div class="q-mb-md text-p">Etiqueta n°{{ etiqueta_numero }}</div>
          </div>

          <img
            :src="`public/favicon.ico`"
            alt="Atleta Foto"
            class="atleta_imagem"
          />
        </q-card-section>
      </q-card>
    </q-col>
    <q-col cols="6" class="my-card">
      <label class="text-h6">PERFORMANCE DA ULTIMA CORRIDA</label>
      <q-card class="bg-grey-2"
        ><div class="q-pa-md">
          <div class="q-mb-md">
            <h2 class="text-h5 flex">Distância Percorrida</h2>
            <q-linear-progress
              color="green"
              :value="distanciaPercorrida / totalDistancia"
              size="44px"
            >
              <template v-slot:top="{ props }"> {{ props.value }} km </template>
            </q-linear-progress>

            <div class="text-h6">{{ distanciaPercorrida.toFixed(2) }} km</div>
          </div>

          <div class="q-mb-md">
            <h2 class="text-h5">Tempo de Percurso</h2>
            <q-linear-progress
              size="44px"
              color="blue"
              :value="tempoPercurso / totalTempo"
            ></q-linear-progress>
            <div class="text-h6">{{ formatarTempo(tempoPercurso) }}</div>
          </div>
        </div>
      </q-card>
    </q-col>
    <q-col cols="3" class="my-card width-45.5rem height-15.25rem">
      <label class="text-h6">ATIVIDADES RECENTES</label>
      <q-card class="bg-grey-2">
        <q-card-section class="q-card-section--vert">
          <div class="dias-corridos-horizontal flex-row">
            <!-- Adicione a classe flex-row -->
            <div
              v-for="dia in diasCorridos"
              :key="dia.nome"
              class="dia-horizontal"
            >
              <div class="dia-nome">{{ dia.nome }}</div>
              <q-linear-progress
                class="dia-progresso"
                color="green"
                :value="dia.caminhado ? 1 : 0"
                size="44px"
              >
                <template v-slot:top="{ value }">
                  <div class="q-linear-progress__track-text">
                    {{ value === 1 ? "✔" : "✘" }}
                  </div>
                </template>
              </q-linear-progress>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-col>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  setup() {
    const atleta_nome = "Louise Ana Valentina Mendes";
    const atleta_idade = "55";
    const atleta_telefone = "(73) 99101-2345";
    const etiqueta_numero = "0";
    const alteta_foto = "isso é uma foto";
    const distanciaPercorrida = 2;
    const totalDistancia = 8;
    const tempoPercurso = 25;
    const totalTempo = 60;
    const diasCorridos = [
      { nome: "Seg", caminhado: true },
      { nome: "Ter", caminhado: false },
      { nome: "Qua", caminhado: true },
      { nome: "Qui", caminhado: true },
      { nome: "Sex", caminhado: false },
      { nome: "Sáb", caminhado: true },
      { nome: "Dom", caminhado: true },
    ];

    function formatarTempo(minutos) {
      const horas = Math.floor(minutos / 60);
      const minutosRestantes = minutos % 60;
      return `${horas}h ${minutosRestantes}min`;
    }

    return {
      atleta_nome,
      atleta_idade,
      atleta_telefone,
      etiqueta_numero,
      alteta_foto,
      distanciaPercorrida,
      totalDistancia,
      tempoPercurso,
      totalTempo,
      diasCorridos,
      formatarTempo,
    };
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
.my-card {
  width: 100%;
  max-width: 45.5rem;
}

.botoes-acao {
  padding: 20px 20px 5px 20px;
}

.dias-corridos {
  display: flex;
  flex-direction: column;
}

.dia-barra {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 4px;
  background-color: #f2f2f2;
}

.dia-caminhado {
  background-color: green;
  color: white;
  font-weight: bold;
}
.atleta_imagem {
  width: 9.56rem;
  height: 9.68rem;
  border-radius: 100%;
  margin: 1rem;
}
.dados_atleta {
  width: 28rem;

  font-size: 1.56rem;
  font-family: "Roboto", sans-serif;
}
</style>
