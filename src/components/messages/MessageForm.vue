<template>
  <base-card>
    
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
        <input type="email" placeholder="algo@algumlugar.server">
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
      messageContent: "",
      fullName: "",
      school: "",
      messageDate: "",
      formIsValid: true,
    };
  },
  created() {
    this.loadAllUsers();
  },
  methods: {
    loadAllUsers() {
      this.$store.dispatch("messages/fetchAllUsers");
    },
    toggleForm() {
      this.isFormVisible = !this.isFormVisible;
    },
    createMessage() {
      //validate form to avoid bugs
      this.formIsValid = true;

      //validating form
      if (
        this.messageContent === "" ||
        this.messageTitle === "" ||
        this.messageReceiver === ""
      ) {
        this.formIsValid = false;
        return;
      }

      //creating and assigning date
      let currentDate = new Date();
      this.messageDate =
        currentDate.getDate() +
        "/" +
        currentDate.getMonth() +
        "/" +
        currentDate.getFullYear();

      //close form
      this.isFormVisible = false;

      const newMessage = {
        date: this.messageDate,
        content: this.messageContent,
        title: this.messageTitle,
        receiver: this.messageReceiver,
        author: this.getUserName,
      };

      this.$store.dispatch("messages/addMessage", newMessage);
      this.$emit("messageSent");
    },
  },
  computed: {
    getAllUsers() {
      return this.$store.getters["messages/getAllUsers"];
    },
    getUserName() {
      return this.$store.getters.getUserName;
    }
  },
};
</script>

<style scoped>
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
