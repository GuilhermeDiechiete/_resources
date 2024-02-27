<template>
  <div id="app">
    <div class="container">
      <div class="pai">
        <h1>Componente Pai</h1>
        <p>Nome: {{ nome }}</p>
        <button @click="alterarNome">Alterar Nome Componente Filho1</button>
      </div>

      <!--mando a varivel nome usando o v-bind:, agora precisa avisar o componente filho que ele vai receber uma propriedade -->
      <ComponenteFilho1 v-bind:nome="nome" @nomeMudou="nome = $event"/>
      <ComponenteFilho2/>

    </div>

    

  </div>
</template>

<script>
import ComponenteFilho1 from './components/ComponenteFilho1.vue'
import ComponenteFilho2 from './components/ComponenteFilho2.vue'

export default {
  name: 'App',

  components: {
    ComponenteFilho1,
    ComponenteFilho2,
  },
  data(){
    return {
      nome: 'Guilherme'
    }
  },
  methods:{
    alterarNome() {
      this.nome = 'Dhaniela'
    }
  }
}
</script>


<style>

.container {
  background-color: rgb(37, 37, 37);
  height: 80vh;
  color: white;
  padding: 30px;
  text-align: center;
  
  
}
.pai{
  width: 100%;
  background-color: black;
  color: white;
  height: 20%;
  padding: 10px;
}
</style>


