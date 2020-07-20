import Vue from 'vue'
import App from './App.vue'
import VuePlayingCard from 'vue-playing-card';

Vue.use(VuePlayingCard);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
