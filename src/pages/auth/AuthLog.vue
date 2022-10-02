<template>
  <base-card>
    <form @submit.prevent="logIn">
      <div class="form-control">
        <h2>Login</h2>
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
      <h3>Not registered yet? Create an account <router-link to="/register">here</router-link></h3>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      isLogIn: false,
      userEmail: "",
      userPassword: "",
      formIsValid: true,
      error: null,
    };
  },
  methods: {
    async logIn() {
      this.formIsValid = true;
      if (
        this.userEmail === "" ||
        this.userPassword === "" ||
        this.userPassword.length < 8
      ) {
        this.formIsValid = false;
        return;
      }

      this.isLoading = true;

      try {
        await this.$store.dispatch("logIn", {
          userEmail: this.userEmail,
          userPassword: this.userPassword,
        });
      } catch (err) {
        this.error = err.message || "Failed to authenticate.";
      }

      this.$store.dispatch("toggleLoggedIn");
      this.$router.push("/controlpanel");
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
