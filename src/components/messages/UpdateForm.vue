<template>
  <base-card v-if="msgSent && !isLoading">
    <div class="msgwrapper">
      <h2>Edição efetuada com sucesso.</h2>
      <hr/>
    </div>
  </base-card>
  <base-card v-if="!msgSent && !isLoading">
  
  
    <transition name="msgform" mode="out-in">
      <form @submit.prevent="editInscrito">
        <div class="form-control">
          <h1>Editar informação do participante</h1>
          </div>
        <div class="form-control">
          <label for="fullName">Nome Completo:</label>
          <input type="fullName" v-model.trim="fullName" @input="validateFullName"/>
          <p v-if="!fullNameIsValid" class="errors">Este nome já foi cadastrado.</p>
        </div>
        <div class="form-control">
          <label for="receiver">A escola que frequenta</label>
          <select name="receiver" id="receiver" v-model="school">
            <option disabled value="">Escolha uma opção...</option>
            <option value="toyota">EAS Toyota</option>
            <option value="hekinan">EAS Hekinan</option>
            <option value="suzuka">EAS Suzuka</option>
            <option value="hamamatsu">EAS Hamamatsu</option>
            <option value="toyohashi">EAS Toyohashi</option>
            <option value="none">Não sou mais estudante</option>
            <option value="outro">Outro</option>
          </select>
        </div>
        <div class="form-control" v-if="school === 'outro'">
          <label for="anotherschool">Qual escola?</label>
        <input type="text" id="anotherschool"  v-model.trim="otherSchool"/>
        </div>
        <div class="form-control">
          <label for="email">Email do participante</label>
          <input
            type="email"
            placeholder="algo@algumlugar.server"
            v-model.trim="email"
            @input="validateEmail"
          />
           <p v-if="!emailIsValid" class="errors">Este email já foi cadastrado.</p>
        </div>
        <p class="errors" v-if="!formIsValid">
          Por favor, insira os dados corretamente.
        </p>
        <div class="actions">
          <!-- <base-button simplebutton>Send Message</base-button> -->
          <base-button mode="normalbtn" class="normalbtn">Atualizar</base-button>
          <base-button nome="normalbtn" class="normalbtn" @click="editCancel">Cancelar</base-button>
        </div>
      </form>
    </transition>
  </base-card>
</template>

<script>
export default {
  props: ["editName", "editEmail", "editSchool", "editId"],
  created() {
    this.email = this.editEmail;
    this.fullName = this.editName;
    this.school = this.editSchool;
    this.inscritoId = this.editId;
  },
  data() {
    return {
      formType: "individual",
      //Start individual data
      email: "",
      fullName: "",
      school: "",
      otherSchool: "",
      date: "",
      inscritoId: "",
      emailIsValid: true,
      fullNameIsValid: true,
      //End individual data

      signDate: "",
      formIsValid: true,
      isLoading: false,
      msgSent: false,
      
    };
  },
  computed: {
    allEmailInscritos() {
      return this.$store.getters["signup/getEmailInscritos"];
    },
    allNomeInscritos() {
      return this.$store.getters["signup/getNomeInscritos"];
    },
    allInscritos() {
      return this.$store.getters["signup/getInscritos"];
    },
    allSchoolEmail() {
      return this.$store.getters["signup/getSchoolEmail"];
    },
    allSchoolName() {
      return this.$store.getters["signup/getSchoolName"];
    }
  },
  methods: {
    editCancel() {
    this.email = "";
    this.fullName = "";
    this.school = "";
    this.inscritoId = "";
    this.$emit("closeEdit");
    },
    resetForm() {
      this.$router.push("/controlpanel");
    },
    validateSchoolFullName() {
      this.schoolFullNameIsValid = true;
    },
    toggleForm(method) {
      this.formType = method;
    },
    validateEmail() {
      this.emailIsValid = true;
    },
    validateFullName() {
      this.fullNameIsValid = true;
    },
    editInscrito() {
      //setting load page
      this.isLoading = true;

      //validate form to avoid bugs
      this.formIsValid = true;

      //validating form
      if (this.fullName === "" || this.school === "" || this.email === "") {
        this.formIsValid = false;
        this.isLoading = false;
        return;
      }

      //check if the email is already subscribed
      // let emails = this.allEmailInscritos;
      // let schoolEmail = this.allSchoolEmail;
      // if (emails.includes(this.email) || schoolEmail.includes(this.email)) {
      //   this.emailIsValid = false;
      //   this.isLoading = false;
      //   return
      // }

      //check if the user is already subscribed
      // let names = this.allNomeInscritos;
      // if (names.includes(this.fullName)) {
      //   this.fullNameIsValid = false;
      //   this.isLoading = false;
      //   return
      // }

      //creating and assigning date
      let currentDate = new Date();
      let month = currentDate.getMonth() + 1;
      this.signDate =
        currentDate.getDate() + "/" + month + "/" + currentDate.getFullYear();

      //inserting the school input
      if (this.school === "outro") {
        this.school = this.otherSchool;
      }

      const editsignup = {
        editDate: this.signDate,
        fullName: this.fullName,
        email: this.email,
        school: this.school,
        studentId: this.inscritoId
      };

      this.$store.dispatch("signup/editStudent", editsignup);
      

      this.isLoading = false;  

      this.msgSent = true;
      setTimeout(() => {
        this.resetForm();
        this.$emit("editSent");
      }, 3000);
    }
  },
};
</script>

<style scoped>
.actions {
  display: flex;
  justify-content: space-around;
}

.formbtn {
  display: flex;
  width: 100%;
  margin-bottom: 30px;
}

.msgwrapper {
  padding: 1.5rem;
}

hr {
  border: 0px solid;
  border-radius: 30px;
  margin-top: 10px;
  animation: 3.4s countbar linear;
  background-color: greenyellow;
  height: 10px;
}
@keyframes countbar {
  0% {
    width: 100%;
  }
  90% {
    width: 0%;
  }
  100% {
    width: 0%;
  }
}

.msgform-enter-from {
  transform: translateY(30px);
  opacity: 0;
}

.msgform-leave-to {
  transform: translateY(-30px);
  opacity: 0;
}

.msgform-enter-to,
.msgform-leave_from {
  opacity: 1;
  transform: translateY(0);
}

.msgform-leave-active,
.msgform-enter-active {
  transition: 0.4s all ease-in-out;
}

button {
  margin: 0 auto;
}

.form-control {
  margin: 1.6rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
  text-align: left;
}

input,
select,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
select:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  color: red;
  font-style: italic;
}
</style>
