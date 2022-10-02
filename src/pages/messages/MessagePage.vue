<template>
<div>
  <message-form @messageSent="loadMessages"></message-form>
  </div>
</template>

<script>
import MessageForm from "../../components/messages/MessageForm.vue";
export default {
  components: {
    MessageForm,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  created() {
    this.fetchInscritos();
  },
  computed: {
    getInscritos() {
      return this.$store.getters["signup/getInscritos"];
    }
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
  }
};
</script>

<style scoped>
ul,
li {
  text-indent: 0;
  list-style-type: none;
}

.msglist-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}

.msglist-enter-to,
.msglist-leave-from {
  opacity: 1;
  transform: translateX(0px);
}

.msglist-enter-active {
  transition: 0.2s all ease-in;
}

.msglist-leave-to {
  opacity: 0;
  transform: transitionX(20px);
}

.msglist-leave-active {
  transition: 0.2s all ease-out;
}
</style>
