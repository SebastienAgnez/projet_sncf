import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store/store'

import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

loadFonts()

const app = createApp(App)
app.use(store)
app.use(vuetify)
app.mount('#app')