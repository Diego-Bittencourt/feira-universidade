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
            <base-button mode="normalbtn">{{sigla}}</base-button>
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
    width: 25%;
    margin: auto 0;
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
  width: 100%;
  height: auto;
}

a {
  text-decoration: none;
}

@media screen and (max-width: 480px) {
  
  .imgwrapper {
    display: none;
  }

  .infowrapper {
    border-left-color: transparent;
    margin-left: 0;
    text-align: center;
  }

  p {
    text-align: center;
  }
}
</style>