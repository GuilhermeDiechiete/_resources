

new Vue({ 

    el: '#app', 

    data:{ 
        contador: 0,
       
    },
    computed:{
        resultado(){
            console.log('metodo computed resultado chamado')
            return this.contador >= 5 ? 'Maior ou igual a 5' : 'Menor que 5'
        }
    },
    methods:{ 
        mais1(e){
            this.contador++
        },
        menos1(e){
            this.contador--   
        },
    },
    watch:{ // monitora o estado da variavel, o nome deve ser o mesmo va variavel
        contador(valorNovo, valorAntigo){
            console.log(valorNovo, valorAntigo)
        }

    }
    

})