<template>
    <header>
        <nav>
            <img src="../../assets/logo.png" @click="backTop">
            <ul>
                <base-button to="/" link><li><h1>Início</h1></li></base-button>
                <base-button to="/form" link><li><h1>Inscrição</h1></li></base-button>
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
    }
}
</script>

<style scoped>
header {
    width: 100vw;
    color: #2c2c2c;
    padding: 1rem;
    
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
    max-width: 400px;
    justify-self: flex-end;
}
</style>