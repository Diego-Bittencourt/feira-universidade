<template>
  <li>
    <base-card>
      <div class="msgdata">
        <h2>From: {{ sender }}</h2>
        <h2>Title: {{ title }}</h2>
      </div>
      <p>{{ msgcontent }}</p>
      <p class="msgdate">Send on {{ date }}</p>
    </base-card>
  </li>
</template>

<script>
export default {
  props: ["sender", "msgcontent", "date", "title"],
};
</script>

<style scoped>
.msgdata {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 2rem;
}

.msgdata h2 {
  min-width: 35%;
}

.msgdate {
  color: #999;
  font-size: 1.2rem;
  margin-top: 2rem;
  text-align: right;
}

h2,
p {
  overflow: hidden;
}
</style>
