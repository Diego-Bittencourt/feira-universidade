<template>
    <header>
        <nav>
            <img src="../../assets/top.png" @click="backTop">
            <ul>
                <base-button to="/tasklist" link><li><h1>Tasks</h1></li></base-button>
                <base-button to="/messages" link><li><h1>Messages</h1></li></base-button>
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
    background-color: #006172;
    color: #e6e6e6;
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
    width: 200px;
    height: auto;
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