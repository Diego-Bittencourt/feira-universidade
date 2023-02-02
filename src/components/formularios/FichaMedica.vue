<template>
    <div class="medicalpage">
        <h1>FICHA MÉDICA</h1>

        <table>
            <tbody>
                <tr>
                    <td>
                        Nome do Aluno: {{ studentData.studentName }}
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Data de Nascimento: {{ studentData.studentBirth }}</p>
                        <p>Idade:{{ studentData.studentAge }} Peso:_______ Altura:_______ Tipo sanguíneo:_____ </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>O aluno é portador de necessidades específicas? </p>
                        <p> {{ studentData.medicalDisability }}</p>
                        <p>Tem laudo? _______________</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Tem alergia? </p>
                        <p>{{ studentData.medicalAllergy }}</p>
                    </td>
                </tr>

                <tr>
                    <td>
                        <p>O(A) aluno(a) possui alguma doença congênita?</p>
                        <p> {{ studentData.medicalDisease }}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>O(A) aluno(a) possui algum impedimento permanente para a prática esportiva de Educação
                            Física?</p>
                        <p>{{ studentData.noPE }}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Em caso de emergência, não conseguindo contatar os responsáveis deixar uma opção de contato:
                        </p>
                        <p>Nome: {{ studentData.emergencyName }}</p>
                        <p>Parentesco: {{ studentData.emergencyRelationship }}
                        </p>
                        <p>Telefone: {{ studentData.emergencyPhone }}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Observações:</p>
                        <p>_____________________________________________________________________________________________
                        </p>
                        <p>_____________________________________________________________________________________________
                        </p>
                        <p>_____________________________________________________________________________________________
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
export default {
    computed: {
        studentData() {
            return this.$store.getters["signup/studentData"];
        },
    }
};
</script>

<style scoped>
.medicalpage {
    background-color: white;
    height: 29.7cm;
    width: 21cm;
    margin: 0.5rem auto;
    padding: 3rem 2rem;

}


table:nth-child(1) {
    margin-top: 2cm;
}

table {
    width: 100%;
    margin-top: 3rem;
}

tr:nth-child(1) {
    width: 40%;
}

tr:nth-child(2) {
    width: 60%;
}

table,
th,
td {
    border: 1px solid black;
    border-collapse: collapse;
    text-align: left;
    padding: 0.8rem 0.5rem;
    margin-bottom: 0.5rem;
}
</style>