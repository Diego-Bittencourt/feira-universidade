<template>
  <the-header></the-header>
  <div class="main">
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
  </div>
</template>

<script>

export default {
  
 
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bungee+Spice&family=Oswald:wght@500&display=swap');

html {
  font-size: 62.5%;
  box-sizing: border-box;
}

body {
  font-size: 1.6rem;
  line-height: 1.4;
  /* max-width: 1200px; */
  width: 100vw;
  /* min-width: 300px; */
  margin: 0 auto;
  background-image: url("./assets/slide.png");
  background-position: top center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  background-attachment: fixed; /*Fix the image when scrolling*/
}

* {
    margin: 0;
    padding: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    box-sizing: border-box;
}

a,
a:visited {
    color: inherit;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main {
  padding: 5rem 3rem 3rem 0;
  min-height: calc(100vh - 75px);
  box-sizing: border-box;
  max-width: 1200px;
  margin: 0 auto;
}

ul,
li {
   text-indent: 0;
   list-style-type: 0;
}

/* router animation */

.route-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0px);
}

.route-enter-active {
  transition: all 0.5s ease-out;
}

.route-leave-to {
  opacity: 0;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

@media screen and (max-width: 480px) {
  .main {
    padding: 1rem 10px;
  }
}
</style>
