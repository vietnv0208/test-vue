import { createApp } from 'vue'
import Vue from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'

Vue.config.productionTip = false;
Vue.use(Antd);

createApp(App).mount('#app')
