import Vue from 'vue'
import App from './App.vue'

// importar o componente
import Contador from './components/Contador.vue'

// apos importar o componente, precisamos regitrar ele
Vue.component('app-contador', Contador)



Vue.config.productionTip = false



new Vue({
  render: h => h(App),
}).$mount('#app')
