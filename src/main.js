import Vue from 'vue';
//vue router for SPA navigation
import VueRouter from 'vue-router';
Vue.use(VueRouter);
//end vue router

//buefy and font awesome to use bulma and font awesome libraries with vue
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Buefy, {
  defaultIconComponent: "font-awesome-icon",
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
});
//end buefy and font awesome

Vue.config.productionTip = false

//components
import AnimalList from './components/AnimalList.vue'

//services
import AnimalQueryService from './services/AnimalQueryService'

const routes = [
  {path: '/bugs', component: AnimalList, props: {animals: AnimalQueryService.getBugs()}},
  { path: '/fish', component: AnimalList, props: { animals: AnimalQueryService.getFish()}}
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
