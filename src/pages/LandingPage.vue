<template>
  <div>
    <base-card>
      <div>
        <h1>Bem-vindos!</h1>
        <p>
          Este é o website dedicado ao evento da Feira das Universidades EAS
          2022, realizado pelas Escolas Alegria de Saber.
        </p>
        <p>Reconhecida pelo MEC.</p>
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
</style>
