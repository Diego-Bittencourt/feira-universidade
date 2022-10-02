<template>
  <div>
    <base-card>
      <h1>Lista de pessoas inscritas individualmente</h1>
      <table class="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Escola</th>
            <th>Email</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="inscrito in inscritosList" :key="inscrito.id">
            <td>{{ inscrito.fullName }}</td>
            <td>{{ inscrito.school }}</td>
            <td>{{ inscrito.email }}</td>
            <td>{{ inscrito.date }}</td>
          </tr>
        </tbody>
      </table>
    </base-card>

    <base-card>
      <h1>Lista de escolas inscritas</h1>
      <table class="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Alunos</th>
            <th>Professores</th>
            <th>Email</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="inscrito in schoolList" :key="inscrito.id">
            <td>{{ inscrito.schoolFullName }}</td>
            <td>{{ inscrito.numberStudents }}</td>
            <td>{{ inscrito.numberTeachers }}</td>
            <td>{{ inscrito.schoolEmail }}</td>
            <td>{{ inscrito.date }}</td>
          </tr>
        </tbody>
      </table>
    </base-card>
  </div>
</template>

<script>
export default {
  created() {
    this.fetchInscritos();
  },
  methods: {
    async fetchInscritos() {
      //setting page to loading
      this.isLoading = true;

      try {
        //fetching messages from firebase
        await this.$store.dispatch("signup/fetchInscritos");
        await this.$store.dispatch("signup/fetchEscolas");
      } catch (error) {
        this.error = error.message || "Something went wrong";
      } // end of the catch

      this.isLoading = false;
    },
  },
  computed: {
    schoolList() {
      return this.$store.getters["signup/getSchoolList"];
    },
    inscritosList() {
      return this.$store.getters["signup/getInscritos"];
    },
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 2rem;
}

.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  border: 1px solid #909090;
}

th,
td {
  border: 1px solid #909090;
}
</style>
