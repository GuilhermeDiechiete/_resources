

new Vue({ 

    el: '#app', 

    data:{ 

        title: 'Usando VueJS.',

    },
    methods:{ 
        
        saudacao(){
            this.title = 'Bom Dia!!!'
            return this.title
        }
    },


})