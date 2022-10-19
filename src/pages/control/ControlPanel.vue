<template>
  <div>
    <update-form
      v-if="isUpdateFormVisible"
      :editName="editStudent.name"
      :editEmail="editStudent.email"
      :editSchool="editStudent.school"
      :editId="editStudent.studentId"
      @closeEdit="closeEditForm"
      @editSent="closeEditForm"
    ></update-form>
    <base-card v-if="!isUpdateFormVisible">
      <h1>Lista de pessoas inscritas individualmente</h1>
      <h3>Número de inscritos/Total de inscritos: {{inscritosNumbers}}</h3>
      <div class="form-control">
        <label for="searchstudent">Procurar por aluno</label>
        <input
          id="searchstudent"
          placeholder="Procure aqui..."
          v-model.trim="searchedstudent"
        />
      </div>
      <table class="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Escola</th>
            <th>Email</th>
            <th>Data</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="inscrito in filteredStudentsList" :key="inscrito.id">
            <td>{{ inscrito.fullName }}</td>
            <td>{{ inscrito.school }}</td>
            <td>{{ inscrito.email }}</td>
            <td>{{ inscrito.date }}</td>
            <td>
              <button
                class="editaritem"
                @click="
                  editItemStudent(
                    inscrito.fullName,
                    inscrito.school,
                    inscrito.email,
                    inscrito.id
                  )
                "
              >
                Editar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </base-card>

    <base-card v-if="!isUpdateFormVisible">
      <h1>Lista de escolas inscritas</h1>
      <table class="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Alunos</th>
            <th>Professores</th>
            <th>Email</th>
            <th>Data</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="inscrito in schoolList" :key="inscrito.id">
            <td>{{ inscrito.schoolFullName }}</td>
            <td>{{ inscrito.numberStudents }}</td>
            <td>{{ inscrito.numberTeachers }}</td>
            <td>{{ inscrito.schoolEmail }}</td>
            <td>{{ inscrito.date }}</td>
            <td>
              <button
                class="editaritem"
                @click="
                  editItemSchool(
                    inscrito.schoolFullName,
                    inscrito.numberStudents,
                    inscrito.numberTeachers,
                    inscrito.schoolEmail,
                    inscrito.date
                  )
                "
              >
                Editar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </base-card>
  </div>
</template>

<script>
import UpdateForm from "../../components/messages/UpdateForm.vue";
export default {
  components: {
    UpdateForm,
  },
  data() {
    return {
      searchedstudent: "",
      isUpdateFormVisible: false,
      editStudent: {
        name: "",
        school: "",
        email: "",
        studentId: "",
      },
    };
  },
  created() {
    this.fetchInscritos();
  },
  methods: {
    closeEditForm() {
      this.isUpdateFormVisible = false;
      this.editStudent.name = "";
      this.editStudent.school = "";
      this.editStudent.email = "";
      this.editStudent.studentId = "";
      this.searchedstudent = "";
      this.fetchInscritos();
    },
    editItemStudent(nome, escola, email, id) {
      this.editStudent.name = nome;
      this.editStudent.school = escola;
      this.editStudent.email = email;
      this.editStudent.studentId = id;
      this.isUpdateFormVisible = true;
    },
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
    filteredStudentsList() {
      let searched = this.searchedstudent;
      const list = this.inscritosList;

      return list.filter(
        (student) =>
          student.school.toLowerCase().includes(searched.toLowerCase()) ||
          student.fullName.toLowerCase().includes(searched.toLowerCase())
      );
    },
    inscritosNumbers() {
      return this.filteredStudentsList.length + "/" + this.inscritosList.length;
    },
    schoolList() {
      return this.$store.getters["signup/getSchoolList"];
    },
    inscritosList() {
      const inscritosList = this.$store.getters["signup/getInscritos"];
      return inscritosList.sort((a, b) => a.fullName.localeCompare(b.fullName));
    },
  },
};
</script>

<style scoped>
.editaritem {
  text-decoration: none;
  cursor: default;
  background-color: #a1000099;
  color: #fff;
  padding: 0.15rem;
  border: 1px solid #aaaaaa99;
  border-radius: 5px;
}

.form-control {
  margin: 1.6rem 0;
}

label {
  font-weight: bold;
  display: block;
  text-align: left;
  margin-bottom: 0.5rem;
}

input {
  display: block;
  width: 100%;
  font-family: inherit;
  padding: 0.15rem;
  border: 1px solid #8a8a8a;
  background-color: transparent;
}

input:focus {
  outline: none;
  background-color: rgba(255, 255, 255, 0.69);
  border-color: #229922;
}

h1 {
  margin-bottom: 2rem;
}

.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  border: 1px solid #909090;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #909090;
  overflow: clip;
  padding: 1rem 0.2rem;
}

tr:nth-child(even) {
  background-color: rgba(230, 230, 230, 0.7);
}

tr:nth-child(odd) {
  background-color: rgba(255, 255, 255, 0.7);
}

tr:hover {
  background-color: rgb(106, 105, 143);
  color: #fff;
}

@media screen and (max-width: 600px) {
  table {
    font-size: 1rem;
  }

  td {
    padding: 0.5rem 0.05rem;
  }
}
</style>
