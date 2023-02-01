<template>
    <div v-if="universityList.lenght > 0">
        <h1>Lista dos Plantões de Matrícula</h1>
    <ul>
        <university-item
        v-for="uni in universityList"
        :key="uni.uniSigla"
        :name="uni.uniName"
        :sigla="uni.uniSigla"
        :link="uni.uniLink"
        :photo="uni.uniPhoto"></university-item>
    </ul>
    </div>
    </template>


<script>
import UniversityItem from './UniversityItem.vue';
export default {
    components: {
        UniversityItem
    },
    computed: {
        universityList() {
            return this.$store.getters["universities/getUniversitiesList"];
        }
    }
}
</script>

<style scoped>
ul,
li {
    list-style: none;
}
</style>