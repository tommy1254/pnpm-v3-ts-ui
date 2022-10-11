/*
 * @Description: 
 * @Version: 0.0.0
 * @Autor: 源
 * @Date: 2022-10-08 09:13:02
 * @LastEditors: 源
 * @LastEditTime: 2022-10-11 15:58:45
 * @FilePath: \pnpm-v3-ts-ui\play\src\main.ts
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import Icon from '@lm/components/icon';
const plugins=[
  Icon
]; 
const app=createApp(App)
plugins.forEach(plugin=>app.use(plugin.install));

app.mount('#app')
