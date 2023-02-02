<template>
  <div class="wrap">
  <the-header></the-header>
  <base-card>
    <h1>Lista dos alunos prematriculados</h1>
    <table>
      <thead>
        <tr>
          <td>Nome do aluno</td>
          <td>Escola</td>
          <td>Acessar os dados</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in studentsList" :key="student.studentRef">
          <td>{{ student.studentName }}</td>
          <td>{{ student.enrollSchool }}</td>
          <td><a :href="editLink + student.studentRef">Acessar</a></td>
        </tr>
      </tbody>
    </table>
  </base-card>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("signup/fetchStudentsList");
  },
  computed: {
    studentsList() {
      return this.$store.getters["signup/getStudentsList"];
    },
    editLink() {
      return "/matricula/studentdetails?ref=";
    },
  },
};
</script>

<style scoped>
.wrap {
  padding-top: 9rem;
}
table {
  background-color: white;
  color: black;
  font-size: 16px;
  margin: 0 auto;
  width: 100%;
}

thead {
  font-weight: bold;
  background-color: #888;
}

tr:hover {
  background-color: #ccc;
}

table,
th,
td {
  border: 1px solid #333;
  border-collapse: collapse;
  padding: 5px;
}

h1 {
  margin-bottom: 20px;
}
</style>
