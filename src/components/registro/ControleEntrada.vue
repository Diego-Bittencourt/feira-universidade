<template>
  <base-card>
    <h1>Lista dos inscritos que ainda não deram check-in no evento</h1>
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
          <th>Check In</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="inscrito in filteredStudentsList" :key="inscrito.id">
          <td>{{ inscrito.fullName }}</td>
          <td>{{ inscrito.school }}</td>
          <td>
            <button
              class="editaritem"
              @click="
                checkinInscrito(
                  inscrito.fullName,
                  inscrito.school,
                  inscrito.email,
                  inscrito.id
                )
              "
            >
             Check In
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </base-card>
</template>

<script>
export default {
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
    this.fetchCheckin();
  },
  methods: {
    fetchCheckin() {
      this.$store.dispatch("signup/fetchAllCheckins");
    },
    checkinInscrito(name, school, email, id) {
      const inscrito = {
        fullName: name,
        school: school,
        email: email,
        inscritoId: id
      }
      this.$store.dispatch("signup/checkinInscrito", inscrito);
      setTimeout(() => {
        this.fetchCheckin()
      }, 1000);
    }
  },
  computed: {
    checkinDone() {
      return this.$store.getters['signup/getCheckins'];
    },
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
      const checkedIn = this.checkinDone;
      const notCheckin = inscritosList.filter((element) => !checkedIn.includes(element.fullName))
      return notCheckin.sort((a, b) => a.fullName.localeCompare(b.fullName));
    },
  },
};
</script>

<style scoped>
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

h3 {
  font-size: 1.6rem;
  font-weight: 400;
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
