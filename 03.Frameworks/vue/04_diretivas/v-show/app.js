

new Vue({ 

    el: '#app', 

    data:{ 

        title: 'Usando VueJS.',
        logado: false
    },
    methods:{ 
        mostrar(){
            this.logado = true
        },
        esconder(){
            this.logado = false
        }
    },


})