<!--para adicionar esse componente globalmente, precisamos ir no arquivo main.js-->


<template>
  <div class="contador">
    <span>{{ contador }}</span>
    <button @click="mais1">+</button>
    <button @click="menos1">-</button>
  </div>
</template>

<script>
export default {
  

  data(){
    return {
      contador: 0 
    }
  },

  methods:{
    mais1(){
      this.contador++
    },
    menos1(){
      this.contador--
    }
  }
}

