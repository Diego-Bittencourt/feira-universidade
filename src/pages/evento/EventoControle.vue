<template>
  <div>
    <base-card>
      <div class="buttonwrapper">
        <base-button mode="normalbtn" class="normalbtn" link to="/coordenacaoevento/dados">Dados</base-button>
        <base-button mode="normalbtn" class="normalbtn" link to="/coordenacaoevento/entrada">Controle de Entrada</base-button>
        <base-button mode="normalbtn" class="normalbtn" link to="/coordenacaoevento/presentes">Lista Entrada</base-button>
      </div>
    </base-card>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
    
    data() {
        return {
            isDisplayed: ""
        }
    },
    methods: {
        display(item) {
            this.isDisplayed = item;
        }
    }
};
</script>

<style scoped>
.buttonwrapper {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
</style>
