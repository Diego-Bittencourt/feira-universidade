<template>
  <base-card>
    <li>
      <div class="imgwrapper">
        <img :src="photoLink" />
      </div>
      <div class="infowrapper">
        <p>{{name}}</p>
        <p>
          <a :href="link" target="_blank">
            <base-button>{{sigla}}</base-button>
          </a>
          </p>

        </div>
    </li>
  </base-card>
</template>

<script>
export default {
  props: ["name", "sigla", "link", "photo"],
  computed: {
    photoLink() {
      return "../" + this.photo;
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
    margin: auto;
}

.infowrapper {
     text-align: left;
     padding: 0 1.2rem;
     border-left: 1px solid #ccc;
}

.infowrapper p:nth-child(1) {
  font-weight: bold;
}

p {
    margin: 1.2rem 0;
}

img {
  width: 100px;
  height: 50px;
}

a {
  text-decoration: none;
}
</style>