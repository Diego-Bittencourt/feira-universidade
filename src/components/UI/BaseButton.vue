<template>
    <router-link v-if="link" :to="to">
        <slot></slot>
    </router-link>
    <button v-else>
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        link: {
        type: Boolean,
        required: false,
        default: false,
        },
        to: {
        type: String,
        required: false,
        default: "/",
        },
}
}
</script>

<style scoped>

a,
button {
  text-decoration: none;
  font-size: 1.6rem;
  cursor: pointer;
  text-align: center;
  color: #272525;
  border-radius: 5px;
  border: 2px solid transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.7rem;
  transition: all 0.1s linear; 
  min-width: 100px;
}

button:active,
a:active {
  background-color: rgba(105, 104, 104, 0.485);
}

button:hover,
a:hover {
  color: #111111;
  transition: 0.5s;
  border-bottom-color: #143f0180;
}
</style>