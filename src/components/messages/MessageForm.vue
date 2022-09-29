<template>
  <base-card v-if="msgSent && !isLoading">
    <div class="msgwrapper">
      <h2>Inscrição efetuada com sucesso.</h2>
      <hr/>
    </div>
  </base-card>
  <base-card v-if="!msgSent && !isLoading">
    <transition name="msgform">
      <form @submit.prevent="createMessage">
        <div class="form-control">
          <label for="fullName">Nome Completo:</label>
          <input type="fullName" v-model.trim="fullName" />
        </div>
        <div class="form-control">
          <label for="receiver">Qual escola você frequenta?</label>
          <select name="receiver" id="receiver" v-model="school">
            <option disabled value="">Select one ...</option>
            <option value="toyota">EAS Toyota</option>
            <option value="hekinan">EAS Hekinan</option>
            <option value="suzuka">EAS Suzuka</option>
            <option value="hamamatsu">EAS Hamamatsu</option>
            <option value="toyohashi">EAS Toyohashi</option>
          </select>
        </div>

        <div class="form-control">
          <label for="email">Email para contato</label>
          <input
            type="email"
            placeholder="algo@algumlugar.server"
            v-model="email"
          />
        </div>
        <p class="errors" v-if="!formIsValid">
          Please enter a valid message, title and receiver.
        </p>
        <div class="actions">
          <!-- <base-button simplebutton>Send Message</base-button> -->
          <base-button simplebutton>Submit</base-button>
        </div>
      </form>
    </transition>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      fullName: "",
      school: "",
      signDate: "",
      formIsValid: true,
      isLoading: false,
      msgSent: false,
    };
  },
  methods: {
    createMessage() {
      //setting load page
      this.isLoading = true;

      //validate form to avoid bugs
      this.formIsValid = true;

      //validating form
      if (this.fullName === "" || this.school === "" || this.email === "") {
        this.formIsValid = false;
        return;
      }

      //creating and assigning date
      let currentDate = new Date();
      let month = currentDate.getMonth() + 1;
      this.signDate =
        currentDate.getDate() + "/" + month + "/" + currentDate.getFullYear();

      //close form
      this.isFormVisible = false;

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
    resetForm() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>

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

.msgform-enter-from,
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
