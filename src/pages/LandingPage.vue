<template>
  <div>
    <the-header></the-header>
    <base-card>
      <div class="just">
        <h1>Bem-vindos!</h1>
        <p>
          Este é o sistema de pré-matrículas das Escolas Alegria de Saber - EAS.
        </p>
        <p>
          Para facilitar e poupar tempo, a EAS preparou esse sistema para
          agilizar o processo de matrícula. Clicando
          <span @click="routeForm">aqui</span>, você pode preencher a
          pré-matrícula com seus dados de forma online, do celular, do tablet,
          do computador em qualquer momento.
          <br />
          Ao vir realizar a matrícula na EAS, todos os seus dados já estão no
          nosso sistema. Portanto, só será necessário assinar a matrícula já
          preenchida.
        </p>
        <p>
          Dessa forma, você garante
          <span class="bold">educação brasileira e de qualidade no Japão</span>
          de forma rápida e segura.
        </p>
      </div>
    </base-card>
    <universities-list></universities-list>
  </div>
</template>

<script>
import UniversitiesList from "../components/event/UniversitiesList.vue";
export default {
  components: {
    UniversitiesList,
  },
  computed: {
    userName() {
      return this.$store.getters.getUserName;
      // return "isso"
    },
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 2.4rem;
  margin-bottom: 2rem;
}

p {
  text-align: justify;
}

span {
  font-weight: bold;
  cursor: default;
}

.just {
  text-align: justify;
}
</style>
