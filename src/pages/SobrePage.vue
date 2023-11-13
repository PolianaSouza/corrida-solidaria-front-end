<template>
  <div class="page-container">
    <div class="left-column">
      <div class="rectangle">
        <h1 class="title">Sobre Nós:</h1>
        <p class="text">
          Em 1995, um grupo de executivos uniu-se em prol de um ideal comum:
          realizar um programa transformador que fosse economicamente viável,
          socialmente justo e ambientalmente correto. Dessa combinação nasceu o
          Instituto Reciclar, organização sem fins lucrativos que atua para
          promover a inclusão produtiva de jovens em situação de vulnerabilidade
          social, por meio da qualificação profissional, conexão com o mercado
          de trabalho e compartilhamento de nossa expertise. Em 2017, em conexão
          permanente com a inovação, reformulamos nosso Programa Educacional,
          desenvolvendo uma metodologia em parceria com a Comunidade Educativa
          (CEDAC). Voltado para a construção de uma trajetória de vida pautada
          pelo protagonismo e por uma atuação responsável na sociedade, nosso
          modelo educativo combina o desenvolvimento de competências
          socioemocionais com qualificação técnica e apoio à empregabilidade.
          Nós acreditamos que a educação é fundamental para a construção de um
          país justo e com oportunidades para todos. Assim, em 2022 demos início
          ao nosso Programa de Apoio à Universidade, apoiando jovens formados
          pelo nosso Programa Educacional a darem continuidade a seus estudos e
          ingressarem no ensino superior. Também atuamos como catalisador de
          conhecimento, compartilhando nossa expertise técnica em diversas áreas
          do saber educacional. Com nossos Programas de Multiplicação, ampliamos
          nosso impacto atuando em rede para que mais jovens possam se
          beneficiar do saber construído pelo Instituto ao longo de nossa
          trajetória.
        </p>
      </div>
    </div>
    <div class="right-column">
      <div class="rectangle">
        <p class="text">
          A ONG "Mãos Solidárias" está contando com a solidariedade de empresas
          locais, voluntários dedicados e a comunidade em geral para tornar este
          evento um sucesso. Cada passo dado na corrida representa um passo em
          direção a um mundo onde a fome é uma preocupação do passado.
        </p>
      </div>
      <div class="rectangle">
        <h2 class="title2">Seja Parte da Mudança!!</h2>
        <p class="text">
          Se você deseja se juntar a essa nobre causa e fazer a diferença em sua
          comunidade, junte-se à corrida solidária da ONG "Mãos Solidárias".
          Através do esforço coletivo, podemos alimentar aqueles que mais
          precisam e trabalhar juntos para um mundo mais justo e solidário.
          Junte-se a nós, corra por uma causa, e faça parte dessa incrível
          jornada de solidariedade. Juntos, podemos transformar vidas e criar um
          impacto positivo duradouro em nossa sociedade.
        </p>
      </div>
      <button class="subscribe-button" onclick="window.location.href=''">
        Me Inscrever
      </button>
    </div>
  </div>
</template>
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

.left-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.right-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.rectangle {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  margin: 10px;
  text-align: center;
  border-radius: 30px;
}

.title {
  font-size: 25px;
  color: #000000;
  font-weight: bold;
  margin: 0;
}
.title2 {
  font-size: 25px;
  color: #ffc400;
  font-weight: bold;
  margin: 0;
}
.text {
  font-size: 13px;
}
.subscribe-button {
  margin-top: 20px;
  padding: 10px 150px;
  background-color: #ffc400;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  border-radius: 10px;
  border-color: #ffffff00;
  transition: background-color 0.3s ease;
}

.subscribe-button:hover {
  background-color: #ff9900;
}
</style>
