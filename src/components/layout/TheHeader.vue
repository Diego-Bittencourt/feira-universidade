<template>
    <header>
        <nav>
            <div class="topslogan">
            <img src="../../assets/newlogo.png" @click="backTop">
            <h1 class="slogan">FEIRA DAS UNIVERSIDADES</h1>
            </div>
            <ul>
                
                <base-button to="/form" link><li><h1>Inscrição</h1></li></base-button>
                <base-button to="/auth" link v-if="!isLoggedIn"><li><h1>Acessar</h1></li></base-button>
                <base-button to="/controlpanel" link v-else><li><h1>Painel</h1></li></base-button>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    methods: {
        backTop() {
            this.$router.push("/");
        }
    },
    computed: {
      isLoggedIn() {
        return this.$store.getters.isLoggedIn;
      }
    }
}
</script>

<style scoped>
header {
    width: 100vw;
    color: #2c2c2c;
    padding: 1rem;
    background-color: rgb(255, 255, 255);
    border-bottom: 5px solid #00000074;
    /* margin-left: -20px; */
}

nav {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

img {
    width: auto;
    height: 50px;
}

ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex: auto;
    font-size: 2rem;
    min-width: 100px;
    max-width: 300px;
    justify-self: flex-end;
}

.topslogan {
    display: flex;
    align-items: center;
}

.slogan {
    /* font-family: 'Bungee Spice', cursive; */
    font-family: 'Oswald', sans-serif;
    font-size: 2.8rem;
    margin-left: 2rem;
}

@media screen and (max-width: 740px) {
  .slogan {
    font-size: 1.6rem;
  }
}

@media screen and (max-width: 460px) {
  .slogan {
    display: none;
    }

  h1 {
    font-size: 1.4rem;
  }

  header {
    padding: 0.3rem;
  }

  nav {
    width: 95%;
  }
}
</style>