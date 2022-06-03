import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import applink from './components/applink.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'



const app = createApp(App)
.component('applink', applink);

app.use(router)

app.mount('#app')
