import { createApp } from 'vue'
import Router from "./tools/Router";
import Store from "./tools/Storage";
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
const app =createApp(App)
app.use(Router)
app.use(Store)
app.use(ElementPlus)
app.mount('#app')

// createApp(App).mount('#app')
