

new Vue({

    el: '#app', 

    data:{ 
        x: 0,
        y: 0,
    },
    methods:{ 

        atualizarXY(e){
            this.x = e.clientX
            this.y = e.clientY
        }

    },

})