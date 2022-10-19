<template>
    <router-link v-if="link" :to="to">
        <slot></slot>
    </router-link>
    <button v-else :class="mode">
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
        mode: {
          type: String,
          required: false,
          defaul: null
        }
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

.normalbtn {
  border-color: #111a0d80;
}

.normalbtn:hover {
  color: rgb(208, 208, 208);
  background-color: rgb(34, 34, 34);
  border-color: rgb(208, 208, 208);
}

.normalbtn:active {
  transform: scale(0.85);
}

.caution {
  background-color: rgb(194, 7, 7);
  color: rgb(195, 195, 195);
}

@media screen and (max-width: 740px) {
  a,
  button {
    padding: 0.3rem;
  }
}

@media screen and (max-width: 460px) {
  a,
  button {
    padding: 0.3rem;
    min-width: 50px;
  }
}
</style>