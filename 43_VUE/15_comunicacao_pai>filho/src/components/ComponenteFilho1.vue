<template>
  <div>
    <h1>ComponenteFilho1</h1>

    <p>Nome do Usuario: {{ nome }}</p>

    <button @click="enviarNome">Enviar nome Componente Pai</button>
  </div>
</template>

<script>
export default {
  name: 'ComponenteFilho1',

  // em props avisamos o componente que ele vai receber um atributo com tal nome
  props: {
    nome: { type: String}
  },

  methods: {
    enviarNome(){
      this.nome = 'Guilherme'
      this.$emit('nomeMudou'. this.nome)
    }
  }
}
</script>

<style scoped>
div {
  background-color: brown;
  height: 30%;
  width: 50%;

}
</style>
