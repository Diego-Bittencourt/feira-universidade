<template>
    <base-card>
    <form @submit.prevent="registerUser">
      
        <h2>Create an Account</h2>
        <div class="form-control">
        <label for="username">Name</label>
        <input type="text" id="username" v-model.trim="userName" />
      </div>
      <div class="form-control">
        <label for="email">Email</label>
        <input type="email" id="email" v-model.trim="userEmail" />
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" v-model.trim="userPassword" />
      </div>

      <p class="errors" v-if="!formIsValid">
        Please enter a valid email and password.
      </p>
      <div class="actions">
        <base-button simplebutton>Login</base-button>
      </div>
      
    </form>
 </base-card>
</template>



<script>
export default {
  data() {
    return {
      userEmail: "",
      userPassword: "",
      userName: "",
      formIsValid: true,
      error: null,
    };
  },
  methods: {
    async registerUser() {
      this.formIsValid = true;

        this.userName = this.userName[0].toUpperCase() + this.userName.slice(1);

      if (
        this.userEmail === "" ||
        this.userPassword === "" ||
        this.userPassword.length < 8 ||
        this.userName === ""
      ) {
        this.formIsValid = false;
        return;
      }

      this.isLoading = true;


      try {
        await this.$store.dispatch("registerUser", {
          userEmail: this.userEmail,
          userPassword: this.userPassword,
          userName: this.userName
        });
      } catch (err) {
        this.error = err.message || "Failed to authenticate.";
      }

      this.isLogIn = true;
      this.$router.push('/controlpanel');
    },
  },
};
</script>


<style scoped>
button {
  margin: 0 auto;
}

h2 {
  margin-bottom: 1.6rem;
}

h3 {
  margin-top: 2rem;
  font-size: 1.2rem;
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