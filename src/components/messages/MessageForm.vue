<template>
  
  <base-card v-if="msgSent && !isLoading">
    <div class="msgwrapper">
      <h2>Inscrição efetuada com sucesso.</h2>
      <hr class="progressBar" />
    </div>
  </base-card>
  <base-card v-if="!msgSent && !isLoading">
    <!-- FORM FOR INDIVIDUAL -->
    <transition name="msgform" mode="out-in">
      <form @submit.prevent="createInscrito">
        <div class="form-control">
          <h1>Dados da pré-matrícula</h1>
        </div>

        <!-- Which school will enroll-->
        <div class="form-control">
          <label>Em qual unidade da EAS irá realizar a matrícula?</label>
          <div>
            <button
              class="school-choose"
              :class="enrollSchool === 'toyota' ? 'chosenbtn' : 'normalbtn'"
              type="button"
              @click="setEnrollSchool('toyota')"
            >
              EAS Toyota
            </button>
            <button
              class="school-choose"
              :class="enrollSchool === 'toyohashi' ? 'chosenbtn' : 'normalbtn'"
              type="button"
              @click="setEnrollSchool('toyohashi')"
            >
              EAS Toyohashi
            </button>
            <button
              class="school-choose"
              :class="enrollSchool === 'hamamatsu' ? 'chosenbtn' : 'normalbtn'"
              type="button"
              @click="setEnrollSchool('hamamatsu')"
            >
              EAS Hamamatsu
            </button>
            <button
              class="school-choose"
              :class="enrollSchool === 'hekinan' ? 'chosenbtn' : 'normalbtn'"
              type="button"
              @click="setEnrollSchool('hekinan')"
            >
              EAS Hekinan
            </button>
            <button
              class="school-choose"
              :class="enrollSchool === 'suzuka' ? 'chosenbtn' : 'normalbtn'"
              type="button"
              @click="setEnrollSchool('suzuka')"
            >
              EAS Suzuka
            </button>
            <button
              class="school-choose"
              :class="enrollSchool === 'ota' ? 'chosenbtn' : 'normalbtn'"
              type="button"
              @click="setEnrollSchool('ota')"
            >
              EAS Ota
            </button>
          </div>
        </div>

        <!-- Enroll date-->
        <div class="form-control">
          <label for="enrollDate">* Data prevista da Matrícula</label>
          <input
            type="text"
            id="enrollDate"
            placeholder="dd/mm/aaaa"
            v-model.trim="enrollDate"
          />
        </div>

        <!-- Start date-->
        <div class="form-control">
          <label for="startDate"
            >* Data prevista do início na participação às aulas</label
          >
          <input
            type="text"
            id="startDate"
            placeholder="dd/mm/aaaa"
            v-model.trim="startDate"
          />
        </div>

        <hr />
        <p class="titulo">Informações Pessoais</p>
        <!-- Student name-->
        <div class="form-control">
          <label for="studentName">*Nome do(a) aluno(a):</label>
          <input id="studentName" type="text" v-model.trim="studentName" />
        </div>

        <!-- Student Age-->
        <div class="form-control">
          <label for="studentAge">*Idade do(a) aluno(a):</label>
          <input id="studentAge" type="number" v-model.trim="studentAge" />
        </div>

        <!-- Student Brith day-->
        <div class="form-control">
          <label for="studentBirth">*Data de nascimento:</label>
          <input
            id="studentBirth"
            type="text"
            placeholder="dd/mm/aaaa"
            v-model.trim="studentBirth"
          />
        </div>

        <!-- Student Birth Place-->
        <div class="form-control">
          <label for="studentBirthPlace">*Local de Nascimento</label>
          <input
            id="studentBirthPlace"
            type="text"
            placeholder="cidade, estado, país..."
            v-model.trim="studentBirthPlace"
          />
        </div>

        <!-- Student Citizenship-->
        <div class="form-control">
          <label for="studentCitizenship">*Nacionalidade</label>
          <input
            id="studentCitizenship"
            type="text"
            placeholder="brasileiro, japonês, filipino, chileno..."
            v-model.trim="studentCitizenship"
          />
        </div>

        <!-- Student Passport number-->
        <div class="form-control">
          <label for="studentPassportNumber">Número do passaporte</label>
          <input
            id="studentPassportNumber"
            type="text"
            v-model.trim="studentPassportNumber"
          />
        </div>

        <!-- Student Passport Expiracy Date-->
        <div class="form-control">
          <label for="studentPassportExpiracy"
            >Data de validade do passaporte</label
          >
          <input
            id="studentPassportExpiracy"
            type="text"
            placeholder="dd/mm/aaaa"
            v-model.trim="studentPassportExpiracy"
          />
        </div>

        <!-- Student Passport Type-->
        <div class="form-control">
          <label for="studentPassportType">Tipo do passaporte</label>
          <input
            id="studentPassportType"
            type="text"
            placeholder="permanente, filho de permanente, longa estadia..."
            v-model.trim="studentPassportType"
          />
        </div>

        <!--Father Name-->
        <div class="form-control">
          <label for="fatherName">*Nome do pai</label>
          <input id="fatherName" type="text" v-model.trim="fatherName" />
        </div>

        <!-- Mother Name-->
        <div class="form-control">
          <label for="motherName">*Nome da mãe</label>
          <input id="motherName" type="text" v-model.trim="motherName" />
        </div>

        <!-- Chronicle disease-->
        <div class="form-control">
          <label for="studentChronical">Portador de alguma enfermidade?</label>
          <input
            id="studentChronical"
            type="text"
            placeholder="diabetes, hipertensão, asma, cardíacos, epilepsia..."
            v-model.trim="studentChronical"
          />
        </div>

        <!-- Student Medicina-->
        <div class="form-control">
          <label for="studentMedicine">Usuário de algum medicamento</label>
          <input
            id="studentMedicine"
            type="text"
            placeholder=""
            v-model.trim="studentMedicine"
          />
        </div>

        <hr />
        <p class="titulo">Contato</p>
        <span>*Por favor, preencher pelo menos um telefone de contato</span>:

        <!-- Father phone-->
        <div class="form-control">
          <label for="fatherPhone">Telefone do pai</label>
          <input id="fatherPhone" type="text" v-model.trim="fatherPhone" />
        </div>

        <!-- Mother Phone-->
        <div class="form-control">
          <label for="motherPhone">Telefone da mãe</label>
          <input id="motherPhone" type="text" v-model.trim="motherPhone" />
        </div>

        <!-- House Phone-->
        <div class="form-control">
          <label for="housePhone">Telefone residencial</label>
          <input id="housePhone" type="text" v-model.trim="housePhone" />
        </div>

        <!-- Company Phone-->
        <div class="form-control">
          <label for="companyPhone">Telefone da firma responsável</label>
          <input id="companyPhone" type="text" v-model.trim="companyPhone" />
        </div>

        <!-- Emergency Phone-->
        <div class="form-control">
          <label for="emergencyPhone">Telefone de emergência</label>
          <input
            id="emergencyPhone"
            type="text"
            placeholder="Insira aqui o número de contato que não seja dos pais ou responsáveis."
            v-model.trim="emergencyPhone"
          />
        </div>

        <hr />
        <p class="titulo">Endereço</p>
        <!-- Address Number-->
        <div class="form-control">
          <label for="addressNumber">*CEP 〒</label>
          <input id="addressNumber" type="text" v-model.trim="addressNumber" />
        </div>

        <!-- Address Text-->
        <div class="form-control">
          <label for="addressText">*Endereço</label>
          <input
            id="addressText"
            type="text"
            placeholder="prédio, bairro, cidade, província"
            v-model.trim="addressText"
          />
        </div>

        <!-- Sponsor Name-->
        <div class="form-control">
          <label for="sponsorName">*Nome do responsável financeiro</label>
          <input id="sponsorName" type="text" v-model.trim="sponsorName" />
        </div>

        <!-- Studied in EAS-->
        <div class="form-control">
          <label for="previousEAS">*Já estudou em alguma unidade EAS?</label>
          <select id="previousEAS" name="receiver" v-model="previousEAS">
            <option disabled value="">Escolha uma opção...</option>
            <option value="toyota">EAS Toyota</option>
            <option value="hekinan">EAS Hekinan</option>
            <option value="suzuka">EAS Suzuka</option>
            <option value="hamamatsu">EAS Hamamatsu</option>
            <option value="toyohashi">EAS Toyohashi</option>
            <option value="ota">EAS Ota</option>
            <option value="não">Nunca estudou na EAS</option>
          </select>
        </div>

        <!-- Japanese School and Grade-->
        <div class="form-control">
          <label for="japaneseGrade">Série que parou no Japão e Escola</label>
          <input id="japaneseGrade" type="text" v-model.trim="japanGrade" />
        </div>

        <!-- Brazil School and Grade-->
        <div class="form-control">
          <label for="brazilGrade">Série que parou no Brasil e Escola</label>
          <input id="brazilGrade" type="text" v-model.trim="brazilGrade" />
        </div>

        <!-- Period of stay in Japan-->
        <div class="form-control">
          <label for="stayJapan">Tempo de estadia no Japão</label>
          <input id="stayJapan" type="text" v-model.trim="stayJapan" />
        </div>

        <!-- Recommended Name-->
        <div class="form-control">
          <label for="recommendedName"
            >Nome da pessoa que recomendou a EAS</label
          >
          <input
            id="recommendedName"
            type="text"
            v-model.trim="recommendedName"
          />
        </div>

        <!-- Speak Portuguese-->
        <div class="form-control">
          <label for="speakPortuguese">Entende e fala português</label>
          <input
            id="speakPortuguese"
            type="text"
            v-model.trim="speakPortuguese"
          />
        </div>

        <!-- School Bus-->
        <div class="form-control">
          <label for="sponsorName">Irá utilizar o transporte da escola</label>
          <div class="schoolbtn">
            <label
              >Sim<input
                type="radio"
                name="schoolBus"
                value="sim"
                v-model="schoolBus"
            /></label>
            <label
              >Não<input
                type="radio"
                name="schoolBus"
                value="não"
                v-model="schoolBus"
            /></label>
          </div>
        </div>

        <hr />
        <p class="titulo">Informações médicas</p>
        <!-- Medical information-->
        <div class="form-control">
          <label for="healthInsurance">Possui seguro de saúde? Qual?</label>
          <input
            id="healthInsurance"
            type="text"
            placeholder="shakai hoken, kokumin hoken, não possui..."
            v-model.trim="healthInsurance"
          />
        </div>

        <!-- Medical Treatment-->
        <div class="form-control">
          <label for="medicalTreatment"
            >Realiza algum tratamento atualmente?</label
          >
          <input
            type="text"
            id="medicalTreatment"
            placeholder="psicólogo, psiquiatra, cardíaco..."
            v-model.trim="medicalTreatment"
          />
        </div>

        <!-- Medical Allergy-->
        <div class="form-control">
          <label for="medicalAllergy"
            >Possui algum tipo de alergia? Qual?</label
          >
          <input
            type="text"
            id="medicalAllergy"
            placeholder="comida, corante, remédio, tecidos..."
            v-model.trim="medicalAllergy"
          />
        </div>

        <!-- Medical Surgery-->
        <div class="form-control">
          <label for="medicalSurgery"
            >Já fez alguma cirurgia? Qual? Há quanto tempo?</label
          >
          <input
            type="text"
            id="medicalSurgery"
            placeholder="apendicite, cardíaca, respiratória..."
            v-model.trim="medicalSurgery"
          />
        </div>

        <!-- Medical Allergy-->
        <div class="form-control">
          <label for="medicalDisability"
            >Possui alguma necessidade específica? Qual? Tem laudo
            médico?</label
          >
          <input
            type="text"
            id="medicalDisability"
            placeholder="autismo, déficit de atenção..."
            v-model.trim="medicalDisability"
          />
        </div>

        <!-- can't participate in Physical Education - PE-->
        <div class="form-control">
          <label for="noPe"
            >Possui alguma restrição à atividade física? Qual?</label
          >
          <input type="text" id="noPe" v-model.trim="noPe" />
        </div>

        <!--END OF INPUT / FORM VALIDATION-->
        <p class="errors" v-if="!formIsValid">
          Por favor, insira os dados corretamente.
        </p>
        <div class="actions">
          <base-button mode="normalbtn" class="normalbtn"
            >Cadastrar</base-button
          >
        </div>
      </form>
      <!-- END FORM FOR INDIVIDUAL -->
    </transition>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      //Start individual data
      enrollSchool: "",
      studentName: "",
      studentAge: 0,
      studentBirth: "",
      studentBirthPlace: "",
      studentCitizenship: "",
      studentPassportNumber: "",
      studentPassportExpiracy: "",
      studentPassportType: "",
      fatherName: "",
      motherName: "",
      studentChronical: "",
      studentMedicine: "",
      fatherPhone: "",
      motherPhone: "",
      housePhone: "",
      companyPhone: "",
      emergencyPhone: "",
      addressNumber: "",
      addressText: "",
      sponsorName: "",
      previousEAS: "",
      japanGrade: "",
      brazilGrade: "",
      stayJapan: "",
      recommendedName: "",
      speakPortuguese: "",
      schoolBus: "",
      healthInsurance: "",
      medicalTreatment: "",
      medicalAllergy: "",
      medicalSurgery: "",
      medicalDisability: "",
      noPe: "",
      enrollDate: "",
      startDate: "",
      //End individual data

      signDate: "",
      formIsValid: true,
      isLoading: false,
      msgSent: false,
    };
  },
  computed: {
    phoneAvailable() {
      if (
        this.fatherPhone !== "" ||
        this.motherPhone !== "" ||
        this.housePhone !== "" ||
        this.emergencyPhone !== "" ||
        this.companyPhone !== ""
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    setEnrollSchool(school) {
      this.enrollSchool = school;
    },
    resetForm() {
      this.$router.push("/");
    },

    createInscrito() {
      //setting load page
      this.isLoading = true;

      //validate form to avoid bugs
      this.formIsValid = true;

      //validating form
      if (
        this.studentName === "" ||
        this.studentAge === "" ||
        this.studentBirth === "" ||
        this.enrollDate === "" ||
        this.startDate === "" ||
        this.studentBirthPlace === "" ||
        this.studentCitizenship === "" ||
        this.fatherName === "" ||
        this.motherName === "" ||
        !this.phoneAvailable ||
        this.addressNumber === "" ||
        this.addressText === "" ||
        this.sponsorName === "" ||
        this.previousEAS === ""
      ) {
        this.formIsValid = false;
        this.isLoading = false;
        return;
      }

      //creating and assigning date
      let currentDate = new Date();
      let month = currentDate.getMonth() + 1;
      this.signDate =
        currentDate.getDate() + "/" + month + "/" + currentDate.getFullYear();

      const newsignup = {
        date: this.signDate,

        //data from form
        enrollSchool: this.enrollSchool,
        enrollDate: this.enrollDate,
        studentName: this.studentName,
        studentAge: this.studentAge,
        studentBirth: this.studentBirth,
        studentBirthPlace: this.studentBirthPlace,
        studentCitizenship: this.studentCitizenship,
        studentPassportNumber: this.studentPassportNumber,
        studentPassportExpiracy: this.studentPassportExpiracy,
        studentPassportType: this.studentPassportType,
        fatherName: this.fatherName,
        motherName: this.motherName,
        studentChronical: this.studentChronical,
        studentMedicine: this.studentMedicine,
        fatherPhone: this.fatherPhone,
        motherPhone: this.motherPhone,
        housePhone: this.housePhone,
        companyPhone: this.companyPhone,
        emergencyPhone: this.emergencyPhone,
        addressNumber: this.addressNumber,
        addressText: this.addressText,
        sponsorName: this.sponsorName,
        previousEAS: this.previousEAS,
        japanGrade: this.japanGrade,
        brazilGrade: this.brazilGrade,
        stayJapan: this.stayJapan,
        recommendedName: this.recommendedName,
        speakPortuguese: this.speakPortuguese,
        schoolBus: this.schoolBus,
        medicalTreatment: this.medicalTreatment,
        medicalAllergy: this.medicalAllergy,
        medicalSurgery: this.medicalSurgery,
        medicalDisability: this.medicalDisability,
        noPE: this.noPe,
      };

      const newStudent = {
        enrollSchool: this.enrollSchool,
        studentName: this.studentName,
        studentRef: this.studentName.replaceAll(" ", ""),
      };

      this.$store.dispatch("signup/enrollStudent", newsignup);
      this.$store.dispatch("signup/setStudentInList", newStudent);
      this.$emit("messageSent");

      this.isLoading = false;

      this.msgSent = true;
      setTimeout(() => {
        this.resetForm();
      }, 3000);
    },
  },
};
</script>

<style scoped>
.normalbtn {
  background-color: #ffffff77;
  color: rgb(83, 83, 83);
}
.school-choose {
  margin: 0.5rem;
  padding: 1rem;
  border: 0;
  transition: all 0.1s ease-in-out;
}

.school-choose:active {
  transform: scale(0.9);
}
.chosenbtn {
  box-shadow: 0px 0px 3px 0px rgba(123, 123, 123, 0.55);
  background-color: #24ae3975;
}

.formbtn {
  display: flex;
  width: 100%;
  margin-bottom: 30px;
}

.msgwrapper {
  padding: 1.5rem;
}

.progressBar {
  border: 0px solid;
  border-radius: 30px;
  margin-top: 10px;
  animation: 3.4s countbar linear;
  background-color: greenyellow;
  height: 10px;
}

@keyframes countbar {
  0% {
    width: 100%;
  }
  90% {
    width: 0%;
  }
  100% {
    width: 0%;
  }
}

.msgform-enter-from {
  transform: translateY(30px);
  opacity: 0;
}

.msgform-leave-to {
  transform: translateY(-30px);
  opacity: 0;
}

.msgform-enter-to,
.msgform-leave_from {
  opacity: 1;
  transform: translateY(0);
}

.msgform-leave-active,
.msgform-enter-active {
  transition: 0.4s all ease-in-out;
}

button {
  margin: 0 auto;
}

.form-control {
  margin: 1.6rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
  text-align: left;
}

.schoolbtn {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

input,
select,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
select:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  color: red;
  font-style: italic;
}

span {
  font-weight: bold;
}

hr {
  margin: 4rem 0;
  border: 2px solid #888;
}

.titulo {
  font-weight: bold;
  font-size: 20px;
}
</style>
