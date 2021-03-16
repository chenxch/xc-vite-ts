/*
 * @Description: 
 * @Author: chenxch
 * @Date: 2021-03-10 21:48:38
 */
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import '@/assets/styles/index.scss'
import router from './router'
import store from './store'

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.use(store);
app.mount('#app');
