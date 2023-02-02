<template>
    <div class="whitepage">
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
                        Data de Nascimento: {{ studentData.studentBirth }} Idade:{{studentData.studentAge}} Peso:_______ Altura:_______ Tipo sanguíneo:_____
                    </td>
                </tr>
                <tr>
                    <td>
                        O aluno é portador de necessidades específicas? ( ) sim / ( ) não. Tem laudo? _______________
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Doenças que já teve: ( )catapora / ( )meningite / ( )hepatite / ( )rubéola / ( )pneumonia / (
                            )bronquite</p>
                        <p>Outra:_________________________________________________________________________________________
                        </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Tem alergia? ( )sim / ( )não</p>
                        <p>( )na pele / ( )alimentar / ( )rinite / ( )medicamento</p>
                        <p>Se sim,
                            especifique:_______________________________________________________________________________
                        </p>
                    </td>
                </tr>
                <tr>
                    <td>
                        Tem intolerância à lactose: ( )sim / ( )não Tem intolerância a gluten? ( )sim / ( )não
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>O(A) aluno(a) possui alguma doença congênita? ( )sim / ( )não Se sim,
                            qual?_________________________</p>
                        <p>É epiléptico ( )sim / ( )não Se sim, qual o tratamento? __________________________________
                        </p>
                        <p>É hipertenso ( )sim / ( )não Se sim, qual o tratamento? __________________________________
                        </p>
                        <p>É asmático ( )sim / ( )não Se sim, qual o tratamento? __________________________________</p>
                        <p>É diabético ( )sim / ( )não Se sim, qual o tratamento? __________________________________</p>
                        <p>É cardíaco ( )sim / ( )não Se sim, qual o tratamento? __________________________________</p>
                        <p>Já fez alguma cirurgia? Se sim,
                            especifique:_______________________________________________________</p>
                        <p>Está fazendo outro tipo de tratamento? Se sim, qual?
                            _______________________________________________</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>O(A) aluno(a) possui algum impedimento permanente para a prática esportiva de Educação
                            Física?</p>
                        <p>( )sim / ( )não Se sim, qual?____________________________________________________________</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Em caso de emergência, não conseguindo contatar os responsáveis deixar uma opção de contato:
                        </p>
                        <p>Nome:____________________________________________ Parentesco:_____________________________
                        </p>
                        <p>Telefone:___________________________________________</p>
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
        {{ studentData }}

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
.whitepage {
    background-color: white;
    height: 29.7cm;
    width: 21cm;
    margin: 0.5rem auto;
    padding: 0.2rem 3rem 2rem 2rem;

}


table:nth-child(1) {
    margin-top: 2cm;
}

table {
    width: 100%;
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
    padding: 0.5rem 0.5rem;
}
</style>