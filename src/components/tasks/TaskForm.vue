<template>
  <form @submit.prevent="createTask">
    <div class="form-control">
      <label for="topic">Choose a topic</label>
      <select name="topic" id="topic" v-model="taskTopic">
        <option disabled value="">Select one ...</option>
        <option value="payment">Payment</option>
        <option value="trial">Trial Class</option>
        <option value="schedule">Class Schedule</option>
        <option value="other">Other</option>
      </select>
    </div>
    <div class="form-control">
      <label for="task">Task</label>
      <textarea id="task" rows="5" v-model.trim="taskContent"></textarea>
    </div>
    <p class="errors" v-if="!formIsValid">
      Please enter a valid task and topic.
    </p>
    <div class="actions">
      <!-- <base-button simplebutton>Send Message</base-button> -->
      <base-button simplebutton>Submit</base-button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ['reloadTasks'],
  data() {
    return {
      // userName: this.getUserName,
      taskDate: "this.currentDate",
      taskContent: "",
      taskTopic: "",
      taskStatus: "pending",
      formIsValid: true,
    };
  },
  methods: {
    createTask() {
      //validate form to avoid bugs
      this.formIsValid = true;

      //validating form
      if (
        this.taskDate === "" ||
        this.taskContent === "" ||
        this.taskTopic === "" ||
        this.taskStatus === ""
      ) {
        this.formIsValid = false;
        return;
      }

      //creating and assigning date
      let currentDate = new Date();
      this.taskDate =
        currentDate.getDate() +
        "/" +
        currentDate.getMonth() +
        "/" +
        currentDate.getFullYear();

      //close form
      this.isFormVisible = false;

      const newTask = {
        date: this.taskDate,
        content: this.taskContent,
        topic: this.taskTopic,
        status: this.taskStatus,
        author: this.getUserName,
      };

      this.$store.dispatch("tasks/addTask", newTask);
      this.$emit("reloadTasks");
    },
    toggleTaskForm() {
      this.isFormVisible = !this.isFormVisible;
    },
  },
  computed: {
    getUserName() {
      return this.$store.getters.getUserName;
    },
  },
};
</script>

<style scoped>
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
