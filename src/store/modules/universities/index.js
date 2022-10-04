import universitiesGetters from "./getters.js";
import universitiesActions from "./actions.js";
import universitiesMutations from "./mutations.js";

export default {
  namespaced: true,
  state() {
    return {
        universities: [
            {
                uniSigla: "APU",
                uniName: "Ritsumeikan Asia Pacific University",
                uniLink: "https://en.apu.ac.jp/home/",
                uniPhoto: "apu.jpg"
            },
            {
                uniSigla: "UNINTER",
                uniName: "Centro Universitário Internacional",
                uniLink: "https://www.uninterjapao.com",
                uniPhoto: "uninter.jpg"
            },
            {
                uniSigla: "Clarentiano",
                uniName: "Centro Universitário Clarentiano",
                uniLink: "https://claretiano.edu.br/",
                uniPhoto: "clarentiano.jpg"
            },
            {
                uniSigla: "Sugiyama",
                uniName: "Sugiyama Jogakuen University",
                uniLink: "https://www.sugiyama-u.ac.jp/en/",
                uniPhoto: "sugiyama.jpg"
            },
            {
                uniSigla: "Temple",
                uniName: "Temple University",
                uniLink: "https://www.temple.edu/",
                uniPhoto: "temple.jpg"
            },
            {
                uniSigla: "UCB",
                uniName: "Universidade Católica de Brasília",
                uniLink: "https://ucb.catolica.edu.br/portal/",
                uniPhoto: "ucb.jpg"
            },
            {
                uniSigla: "UNIARA",
                uniName: "Universidade de Araraquara",
                uniLink: "https://www.uniara.com.br/home/",
                uniPhoto: "unara.jpg"
            },
            {
                uniSigla: "UNIGRAN",
                uniName: "Centro Universitário da Grande Dourados",
                uniLink: "https://www.unigranjapao.com/",
                uniPhoto: "unigran.jpg"
            },
            {
                uniSigla: "UNIP",
                uniName: "Universidade Paulista",
                uniLink: "https://www.unip.br/",
                uniPhoto: "unip.jpg"
            },
            {
                uniSigla: "Cruzeiro do Sul",
                uniName: "Universidade Cruzeiro do Sul",
                uniLink: "https://www.cruzeirodosulvirtual.com.br/",
                uniPhoto: "cruzeiro.jpg"
            }
        ]
    };
  },
  mutations: universitiesMutations,
  actions: universitiesActions,
  getters: universitiesGetters
};
