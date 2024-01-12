

new Vue({ // nova instancia vue

    el: '#app', // elemento do html que o vue vai alterar

    data:{ // variaveis
        title: 'Usando VueJS.'
    },
    methods:{ // metodos, logicas da aplicação
        
        alterarTitulo(event){
            this.title = event.target.value
        }
    },
    computed:{

    }

})