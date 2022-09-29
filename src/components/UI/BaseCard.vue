<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(19, 122, 58, 0.683);
  padding: 2rem;
  margin: 2rem auto;
  max-width: 40rem;
  background-color: rgba(255, 253, 253, 0.737);
}


</style>
