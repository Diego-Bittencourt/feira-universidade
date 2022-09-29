<template>
<div>
  <message-form @messageSent="loadMessages"></message-form>
  <base-card v-if="!iMessagesListEmpty">Sorry, no messages to show.</base-card>
  <h1 v-if="isLoading">Loading...</h1>
  <ul v-if="!isLoading">
    <transition-group name="msglist" tag="ul">
    <message-item
      v-for="message in getMessages"
      :key="message.id"
      :sender="message.messageAuthor"
      :msgcontent="message.messageContent"
      :date="message.messageDate"
      :title="message.messageTitle"
    ></message-item>
    </transition-group>
  </ul>
  </div>
</template>

<script>
import MessageItem from "../../components/messages/MessageItem.vue";
import MessageForm from "../../components/messages/MessageForm.vue";
export default {
  components: {
    MessageItem,
    MessageForm,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  created() {
    this.loadMessages();
  },
  computed: {
    getMessages() {
      return this.$store.getters["messages/getMessages"];
    },
    iMessagesListEmpty() {
      return Object.keys(this.getMessages).length;
    },
    getUserName() {
      return this.$store.getters.getUserName;
    },
  },
  methods: {
    async loadMessages() {
      //setting page to loading
      this.isLoading = true;
      let userName = this.getUserName;

      try {
        //fetching messages from firebase
        await this.$store.dispatch("messages/getMessages", userName);
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
