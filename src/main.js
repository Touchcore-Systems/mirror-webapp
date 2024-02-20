import 'vue-ionicons/ionicons.css';
import './assets/css/dashforge.auth.css'
import './assets/css/dashforge.css'
import './style.css'
import 'primevue/resources/themes/aura-light-green/theme.css'

import { dom, library } from "@fortawesome/fontawesome-svg-core";

import App from './App.vue'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import VueFeather from 'vue-feather';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'
import piniaPluginPersistedState from "pinia-plugin-persistedstate"
import router from './routes';

library.add(fas, far, fab)
dom.watch();

const pinia = createPinia()
pinia.use(piniaPluginPersistedState)


const app=createApp(App)



app.use(PrimeVue, { ripple: true  });
app.use(ToastService);

app.use(pinia)
app.use(router)

app.component("font-awesome-icon", FontAwesomeIcon)
app.component(VueFeather.name, VueFeather);
app.component('Toast', Toast);
app.mount('#app')
