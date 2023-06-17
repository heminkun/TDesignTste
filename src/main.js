import { createApp } from 'vue'
import { createPinia } from 'pinia'
import TDesign from 'tdesign-vue-next';
import 'tdesign-vue-next/es/style/index.css';
import App from './App.vue'
import axios from "axios";
import router from './router'

const app = createApp(App)
axios.defaults.baseURL="http://localhost:8080"
app.use(TDesign)
app.use(createPinia())
app.use(router)

app.mount('#app')
