import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'swiper/css';
import 'swiper/css/navigation';
import './assets/css/main.css'

import VueCountdown from '@chenfengyuan/vue-countdown';


import './assets/js/main.js'
import i18n from './lang/i18n'

const app = createApp(App)

app.component(VueCountdown.name, VueCountdown);
app.use(i18n)
app.mount('#app')

