<template>
  <base-card>
    <div>
      <h1>Bem-vindos!</h1>
      <p>
        Este é o website dedicado ao evento da Feira das Universidades EAS 2022,
        realizado pelas Escolas Alegria de Saber.
      </p>
      <p>Reconhecida pelo MEC.</p>
    </div>
  </base-card>
</template>

<script>
export default {
  
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
