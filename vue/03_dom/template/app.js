

new Vue({ 

    el: '#app', 

    data:{ 
        title: 'Usando VueJS.'
    },
    methods:{ 
        
        saudacao: function(){
            return 'Boa Semana!'
        },
        copiaTitulo(){
            return this.title // acessar dados da instancia
        }
    },
    computed:{

    }

})