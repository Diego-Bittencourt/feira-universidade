<template>
  <base-card v-if="msgSent && !isLoading">
    <div class="msgwrapper">
      <h2>Inscrição efetuada com sucesso.</h2>
      <hr/>
    </div>
  </base-card>
  <base-card v-if="!msgSent && !isLoading">
  <div class="formbtn">
    <base-button @click="toggleForm(true)">Individual</base-button>
    <base-button @click="toggleForm(false)">Escola</base-button>
  </div>
  <!-- FORM FOR INDIVIDUAL -->
    <transition name="msgform" mode="out-in">
      <form @submit.prevent="createInscrito" v-if="formType">
        <div class="form-control">
          <h1>Inscrição individual</h1>
          </div>
        <div class="form-control">
          <label for="fullName">Nome Completo:</label>
          <input type="fullName" v-model.trim="fullName" @input="validateFullName"/>
          <p v-if="!fullNameIsValid" class="errors">Este nome já foi cadastrado.</p>
        </div>
        <div class="form-control">
          <label for="receiver">Qual escola você frequenta?</label>
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
          <label for="anotherschool">Escreva aqui a escola onde você estuda.</label>
        <input type="text" id="anotherschool"  v-model.trim="otherSchool"/>
        </div>
        <div class="form-control">
          <label for="email">Email para contato</label>
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
          <base-button mode="normalbtn" class="normalbtn">Cadastrar</base-button>
        </div>
      </form>
    <!-- END FORM FOR INDIVIDUAL -->
    <!-- START SCHOOL FORM -->
      <form @submit.prevent="createSchoolInscrito" v-else>
        <div class="form-control">
          <h1>Inscrição por escola</h1>
        </div>
        <div class="form-control">
          <label for="fullName">Nome da escola:</label>
          <input type="fullName" v-model.trim="schoolFullName" @input="validateSchoolFullName"/>
          <p v-if="!schoolFullNameIsValid" class="errors">Esta escola já foi cadastrada.</p>
        </div>
        <div class="form-control">
          <label for="numberStudents">Quantos alunos participarão?</label>
          <input type="number" v-model.trim="numberStudents">
        </div>
        <div class="form-control">
          <label for="numberTeachers">Quantos professores ou funcionários irão acompanhar os alunos?</label>
          <input type="number" v-model.trim="numberTeachers">
        </div>
        <div class="form-control">
          <label for="email">Email para contato</label>
          <input
            type="email"
            placeholder="email@servidor.com"
            v-model.trim="schoolEmail"
            @input="validateEmail"
          />
           <p v-if="!emailIsValid" class="errors">Este email já foi cadastrado.</p>
        </div>
        <p class="errors" v-if="!formIsValid">
          Por favor, insira os dados corretamente.
        </p>
        <div class="actions">
          <!-- <base-button simplebutton>Send Message</base-button> -->
          <base-button mode="normalbtn" class="normalbtn">Cadastrar</base-button>
        </div>
      </form>
    </transition>
    <!-- END SCHOOL FORM -->
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      formType: "individual",
      //Start individual data
      email: "",
      fullName: "",
      school: "",
      otherSchool: "",
      emailIsValid: true,
      fullNameIsValid: true,
      //End individual data

      //Start school date
      schoolFullName: "",
      numberStudents: null,
      numberTeachers: null,
      schoolEmail: "",
      schoolFullNameIsValid: true,
      //End school data

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
    resetForm() {
      this.$router.push("/");
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
    createInscrito() {
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
      let emails = this.allEmailInscritos;
      let schoolEmail = this.allSchoolEmail;
      if (emails.includes(this.email) || schoolEmail.includes(this.email)) {
        this.emailIsValid = false;
        this.isLoading = false;
        return
      }

      //check if the user is already subscribed
      let names = this.allNomeInscritos;
      if (names.includes(this.fullName)) {
        this.fullNameIsValid = false;
        this.isLoading = false;
        return
      }

      //creating and assigning date
      let currentDate = new Date();
      let month = currentDate.getMonth() + 1;
      this.signDate =
        currentDate.getDate() + "/" + month + "/" + currentDate.getFullYear();

      //inserting the school input
      if (this.school === "outro") {
        this.school = this.otherSchool;
      }

      const newsignup = {
        date: this.signDate,
        fullName: this.fullName,
        email: this.email,
        school: this.school,
      };

      this.$store.dispatch("signup/signupStudent", newsignup);
      this.$emit("messageSent");

      this.isLoading = false;  

      this.msgSent = true;
      setTimeout(() => {
        this.resetForm();
      }, 3000);
    },
    createSchoolInscrito() {
      //setting load page
      this.isLoading = true;

      //validate form to avoid bugs
      this.formIsValid = true;

      //validating form
      if (this.schoolFullName === "" || this.numberStudents === null || this.numberTeachers === null || this.schoolMail === "") {
        this.formIsValid = false;
        this.isLoading = false;
        return;
      }

      //check if the email is already subscribed
      let emails = this.allEmailInscritos;
      let schoolEmail = this.allSchoolEmail;
      if (emails.includes(this.schoolEmail) || schoolEmail.includes(this.schoolEmail)) {
        this.emailIsValid = false;
        this.isLoading = false;
        return
      }

      //check if the school is already subscribed
      let schoolName = this.allSchoolName;
      if (schoolName.includes(this.schoolFullName)) {
        this.schoolFullNameIsValid = false;
        this.isLoading = false;
        return
      }

      //creating and assigning date
      let currentDate = new Date();
      let month = currentDate.getMonth() + 1;
      this.signDate =
        currentDate.getDate() + "/" + month + "/" + currentDate.getFullYear();

      //inserting the school input
      if (this.school === "outro") {
        this.school = this.otherSchool;
      }

      const newSchool = {
        schoolFullName: this.schoolFullName,
        numberStudents: this.numberStudents,
        numberTeachers: this.numberTeachers,
        schoolEmail: this.schoolEmail,
        date: this.signDate
      };

      this.$store.dispatch("signup/signupSchool", newSchool);
      this.$emit("messageSent");

      this.isLoading = false;  

      this.msgSent = true;
      setTimeout(() => {
        this.resetForm();
      }, 3000);
    }
  },
};
</script>

<style scoped>
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
