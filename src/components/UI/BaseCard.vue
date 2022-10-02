<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  /* border-radius: 12px; */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.683);
  padding: 2rem;
  margin: 2rem auto;
  max-width: 60rem;
  background-color: rgba(255, 253, 253, 0.737);
  transition: 0.3s all ease-in;
  opacity: 0.8;
}

.card:hover {
  transform: scale(1.005);
  background-color: rgba(255, 253, 253, 0.835);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.683);
  opacity: 1;
}


</style>
