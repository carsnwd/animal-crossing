import Vue from 'vue';
import VueRouter from 'vue-router';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)
Vue.component('vue-fontawesome', FontAwesomeIcon)

Vue.use(VueRouter); //SPA routing for Vue
Vue.use(Buefy, {
  defaultIconComponent: "vue-fontawesome",
  defaultIconPack: "fas",
  customIconPacks: {
    fas: {
      sizes: {
        default: "lg",
        "is-small": "1x",
        "is-medium": "2x",
        "is-large": "3x"
      },
      iconPrefix: ""
    }
  }
}); //Bulma styling to use with app.

Vue.config.productionTip = false

import BUGS from './assets/bugs.json';
import FISH from './assets/fish.json';

import AnimalList from './components/AnimalList.vue'

let getAnimalsAsArray = (animals) => {
  return Object.keys(animals).map((k) => animals[k]);
}

const routes = [
  {path: '/bugs', component: AnimalList, props: {animals: getAnimalsAsArray(BUGS)}},
  { path: '/fish', component: AnimalList, props: { animals: getAnimalsAsArray(FISH) }}
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
