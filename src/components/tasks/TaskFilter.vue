<template>
  <h2>Filter tasks</h2>
  <div class="wrapper">
    <div class="column">
      <div class="filter-option">
        <input type="checkbox" id="payment" checked @change="setFilter" />
        <label for="payment">Payment</label>
      </div>
      <div class="filter-option">
        <input type="checkbox" id="trial" checked @change="setFilter" />
        <label for="trial">Trial Class</label>
      </div>
      <div class="filter-option">
        <input type="checkbox" id="schedule" checked @change="setFilter" />
        <label for="schedule">Class Schedule</label>
      </div>
      <div class="filter-option">
        <input type="checkbox" id="other" checked @change="setFilter" />
        <label for="other">Others</label>
      </div>
    </div>
    <div class="column">
      <div class="filter-option">
        <input type="checkbox" id="done" checked @change="setFilter" />
        <label for="done">Done</label>
      </div>
      <div class="filter-option">
        <input type="checkbox" id="pending" checked @change="setFilter" />
        <label for="pending">Pending</label>
      </div>
      <div class="filter-option">
        <input type="checkbox" id="processing" checked @change="setFilter" />
        <label for="processing">Processing</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    emits: ['change-filter'],
  data() {
    return {
      filters: {
        payment: true,
        trial: true,
        schedule: true,
        other: true,
        done: true,
        pending: true,
        processing: true,
      },
    };
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      };

      this.filters = updatedFilters;
      this.$emit("change-filter", updatedFilters);
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
}

.column {
  text-align: left;
}

label {
  border-bottom: 1px solid transparent;
}

h2 {
  margin: 0.5rem 0;
}
.filter-option {
  margin-right: 1rem;
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
  align-items: center;
}
.filter-option label,
.filter-option input {
  vertical-align: middle;
}
.filter-option label {
  margin-left: 0.6rem;
}

input[type="checkbox"] {
  appearance: none;
  background-color: rgb(254, 254, 254);
  margin: 0;
  font: inherit;
  width: 1em;
  height: 1em;
  border: 0.15em solid rgb(5, 97, 195);
  border-radius: 0.15em;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
}

input[type="checkbox"]::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  margin: auto;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em rgb(0, 0, 236, 0.5);
}

input[type="checkbox"]:checked::before {
  transform: scale(1);
}

input[type="checkbox"]:checked + label {
  font-weight: bold;
}

input[type="checkbox"]:hover + label {
  /* background-color: #517ef177; */
  border-bottom: 1px solid #517ef177;
}
</style>
