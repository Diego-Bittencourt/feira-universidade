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
      <h1>Cronograma</h1>
      <table>
        <tr>
          <td>10:30</td>
          <td>Recepção das escolas (Alunos do Ensino Médio).</td>
        </tr>
        <tr>
          <td>10:45</td>
          <td>
            Abertura do evento. Coordenador Geral das unidades EAS Sr. Habby
            Ilerika.
          </td>
        </tr>
        <tr>
          <td>11:00</td>
          <td>
            Palestra Motivacional - Excelentíssimo Embaixador Cônsul-geral de
            Nagoya, Luís Galvão Abbout
          </td>
        </tr>
        <tr>
          <td>11:30 às 14:00</td>
          <td>Visitação aos estandes das universidades.</td>
        </tr>
        <tr>
          <td>14:00</td>
          <td>
            Palestra sobre experiência em intercâmbio estudantil - Professor e
            ex-aluno EAS Wataru Kawakami.
          </td>
        </tr>
        <tr>
          <td>14:30</td>
          <td>Encerramento do evento - Coordenadora Geral Virgínia Morais.</td>
        </tr>
      </table>
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
}

table {
  border-collapse: collapse;
}

table td {
  text-align: left;
  border: 1px solid #333;
  padding: 0 0.5rem;
}

tr {
  transition: 0.3s all ease-in-out;
}

tr:hover {
  background-color: #c2c2c2;
}
</style>
