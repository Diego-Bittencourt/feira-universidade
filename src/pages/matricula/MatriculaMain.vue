<template>
  <div>
    <!--
    <div class="btn-wrapper">
      <button @click="matriculaPdf">Ficha de Matrícula</button>
      <button>Ficha Médica</button>
      <button>Ficha Transporte</button>
      <button>Dados de Emergência</button>
    </div>
  -->
    <!--end of buttons-->
    <div class="whitepage">
      <h1>FICHA DE MATRÍCULA</h1>
      <div class="photo-frame"></div>
      <div class="initial-data">
        <p>Data de Início: {{ studentData.enrollDate }}</p>
        <p>Matrícula (RM nº. ___________)</p>
        <p>Ano Letivo:_________</p>
        <p>Sério/Ano:__________</p>
        <p>Saída:_____/______/_________</p>
      </div>
      <!-- end cabecalho-->
      <div>
        <table>
          <tr>
            <td>Nome do(a) aluno(a)</td>
            <td>
              {{ studentData.studentName }}
            </td>
          </tr>
          <tr>
            <td>Idade do(a) aluno(a)</td>
            <td>
              {{ studentData.studentAge }}
            </td>
          </tr>
          <tr>
            <td>Data de Nascimento</td>
            <td class="divided">
              {{ studentData.studentBirth }}
              <span
                ><span class="bold"
                  >Local de Nascimento:
                  {{ studentData.studentBirthPlace }}</span
                ></span
              >
            </td>
          </tr>
          <tr>
            <td>Nacionalidade</td>
            <td>
              {{ studentData.studentCitizenship }}
            </td>
          </tr>
          <tr>
            <td>Número do Passaporte</td>
            <td class="divided">
              {{ studentData.studentPassportNumber }}
              <span
                ><span class="bold">Validade:</span>
                {{ studentData.studentPassportExpiracy }}</span
              >
            </td>
          </tr>
          <tr>
            <td>Validade do visto</td>
            <td>
              {{ studentData.studentPassportType }}
            </td>
          </tr>
          <tr>
            <td>Nome do pai</td>
            <td>
              {{ studentData.fatherName }}
            </td>
          </tr>
          <tr>
            <td>Nome da mãe</td>
            <td>
              {{ studentData.motherName }}
            </td>
          </tr>
          <tr>
            <td>Portador de alguma enfermidade</td>
            <td>
              {{ studentData.studentChronical }}
            </td>
          </tr>
          <tr>
            <td>Usuário de algum medicamento</td>
            <td>
              {{ studentData.studentMedicine }}
            </td>
          </tr>
          <tr>
            <td>Telefone residiencial</td>
            <td>
              {{ studentData.housePhone }}
            </td>
          </tr>
          <tr>
            <td>Telefone celular</td>
            <td class="divided">
              <span>
                <span class="bold">Pai:</span> {{ studentData.fatherPhone }}
              </span>
              <span>
                <span class="bold">Mãe:</span> {{ studentData.motherPhone }}
              </span>
            </td>
          </tr>
          <tr>
            <td>Telefone celular</td>
            <td>Aluno(a): {{ studentData.studentPhone }}</td>
          </tr>
          <tr>
            <td>Telefone da firma responsável</td>
            <td>
              {{ studentData.companyPhone }}
            </td>
          </tr>
          <tr>
            <td>Telefone de emergência</td>
            <td>
              {{ studentData.emergencyPhone }}
            </td>
          </tr>
          <tr>
            <td>Endereço residencial</td>
            <td>
              {{ studentData.addressText }}
            </td>
          </tr>
          <tr>
            <td>CEP - 〒</td>
            <td>
              {{ studentData.addressNumber }}
            </td>
          </tr>
          <tr>
            <td>Nome do Responsável Financeiro</td>
            <td>
              {{ studentData.sponsorName }}
            </td>
          </tr>
          <tr>
            <td>Estudou em alguma unidade EAS? Qual?</td>
            <td>
              {{ studentData.previousEAS }}
            </td>
          </tr>
          <tr>
            <td>Série em que parou no Japão e escola</td>
            <td>
              {{ studentData.japanGrade }}
            </td>
          </tr>
          <tr>
            <td>Série em que parou no Brasil e escola</td>
            <td>
              {{ studentData.brazilGrade }}
            </td>
          </tr>
          <tr>
            <td>Tempo de estadia no Japão</td>
            <td>
              {{ studentData.stayJapan }}
            </td>
          </tr>
          <tr>
            <td>Pessoa que indicou a escola</td>
            <td>
              {{ studentData.recommendedName }}
            </td>
          </tr>
          <tr>
            <td>Entende e fala português</td>
            <td>
              {{ studentData.speakPortuguese }}
            </td>
          </tr>
          <tr>
            <td>Pretende utilizar o transporte escolar</td>
            <td>
              {{ studentData.schoolBus }}
            </td>
          </tr>
        </table>
      </div>
      <!-- end table wrapper-->
      <h1>Documentos Necessários</h1>
      <table>
        <thead>
          <tr>
            <td>Documento</td>
            <td>Entregue</td>
            <td>Data</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Certidão de Nascimento - cópia</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Passaporte - págs. 1, 2, 3 (aluno e pais) - cópia</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Zairyu Card(aluno e pais) - cópia</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Hoken(caso tenha) - cópia</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Histórico Escolar - original</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Mapa detalhado da residência</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Comprovante de residência (prefeiruta) Jyumin Hyo</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Kazei Shotoku Shomeisho (Familiar) no caso de Ensino Média</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Cópia do My Number dos pais para os alunos do Ensino Médio</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Endereço e tel. da Firma ou Empreiteira</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Endereço e tel. (familiar no Japão)</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Endereço e tel. no Brasil</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div class="signature-field">
        <div>Assinatura do Responsável</div>
        <div>Secretária - EAS</div>
        <div>Data</div>
      </div>
    </div>
    <!-- wrapper for first part-->
    <ficha-medica :student="studentData"></ficha-medica>
  </div>
</template>

<script>
import FichaMedica from '../../components/formularios/FichaMedica.vue'
export default {
  components: {
    FichaMedica
  },
  computed: {
    studentData() {
      return this.$store.getters["signup/studentData"];
    },
    studentRef() {
      return this.$route.query.ref;
    },
  },
  methods: {},
  created() {
    this.$store.dispatch("signup/fetchStudentData", this.studentRef);
  },
};
</script>

<style scoped>
.photo-frame {
  position: absolute;
  top: 5px;
  right: 4rem;
  height: 4cm;
  width: 3cm;
  border: 1px dashed black;
}

.initial-data {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 5px;
}

.initial-data p {
  margin-right: 30px;
  margin-top: 2px;
}
.signature-field * {
  padding: 5px 40px;
  border-top: 2px solid black;
  margin: 40px 20px 0;
}
.signature-field {
  display: flex;
}
.bold {
  font-weight: bold;
}

.btn-wrapper {
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.btn-wrapper button {
  margin: 0.5rem;
  padding: 1rem;
  border: 0;
  transition: all 0.1s ease-in-out;
  background-color: #ffffff77;
}

.divided {
  display: flex;
  justify-content: space-between;
  border: 0;
  padding-right: 4rem;
}

.whitepage {
  position: relative;
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
  padding: 0 0.5rem;
}
</style>
