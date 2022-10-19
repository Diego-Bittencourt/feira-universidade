<template>
    <base-card>
    <h1>Número de inscritos: {{inscritosList.length}}.</h1>
    <h1>Número de inscritos presentes: {{checkedIn.length}}.</h1>
    <h1>Número de inscritos que não fizeram o Check-in: {{notCheckedin.length}}</h1>
    </base-card>
</template>

<script>
export default {
    computed: {
        inscritosList() {
            return this.$store.getters['signup/getInscritos'];
        },
        notCheckedin() {
            const inscritosList = this.inscritosList;
            const checkedIn = this.checkedIn;
            const notCheckin = inscritosList.filter((element) => !checkedIn.includes(element.fullName))
            return notCheckin;
        },
        checkedIn() {
            return this.$store.getters['signup/getCheckins'];
        }
    }
}
</script>

<style scoped>
h1 {
    margin: 1.5rem;
}
</style>