

new Vue({

    el: '#app', 

    data:{ 
        contador: 0
    },
    methods:{ 
        mais1(e){
            this.contador++
        },
        menos1(e){
            this.contador--
        }

    },

})