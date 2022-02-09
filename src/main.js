import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)

createApp(App).use(router).use(store).component('font-awesome-icon', FontAwesomeIcon).mount('#app')


import "bootstrap/dist/js/bootstrap.js"