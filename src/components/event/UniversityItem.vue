<template>
  <base-card>
  {{photoLink}}
    <li>
      <div class="imgwrapper">
        <img :src="photoLink" />
      </div>
      <div class="infowrapper">
        <p>Universidade: {{name}}</p>
        <p>Link: <a :href="link">{{sigla}}</a></p>

        </div>
    </li>
  </base-card>
</template>

<script>
export default {
  props: ["name", "sigla", "link", "photo"],
  computed: {
    photoLink() {
      return "../../assets/" + this.photo;
    },
  },
};
</script>

<style scoped>
li {
    display: flex;
    padding: 1.2rem;
    gap: 20px;
}

.imgwrapper {
    height: 100%;
    width: auto;
}

.infowrapper {
     text-align: left;
     padding: 0 1.2rem;
     border-left: 1px solid #ccc;
}

p {
    margin: 1.2rem 0;
}

img {
  width: 100px;
  height: 50px;
}
</style>