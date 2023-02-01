import signupMutations from './mutations.js';
import signupActions from './actions.js';
import signupGetters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            emailInscritos: [],
            nomeInscritos: [],
            inscritos: [],
            schoolList: [],
            schoolName: [],
            schoolEmail: [],
            checkins: [],
            checkinsList: [],

            //data for enrollment
            studentsList: ["teste"],
            studentData: {
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
            }
        }
    },
    mutations: signupMutations,
    getters: signupGetters,
    actions: signupActions
};