import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import TDesign from 'tdesign-vue-next';
import 'tdesign-vue-next/es/style/index.css';
import App from './App.vue'
import axios from "axios";
import router from './router'

const app = createApp(App)
app.use(ElementPlus)
axios.defaults.baseURL="http://localhost:8080"
app.use(TDesign)
app.use(createPinia())
app.use(router)

app.mount('#app')
