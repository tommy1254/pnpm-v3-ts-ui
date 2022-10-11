/*
 * @Description: 
 * @Version: 0.0.0
 * @Autor: 源
 * @Date: 2022-10-11 09:04:53
 * @LastEditors: 源
 * @LastEditTime: 2022-10-11 16:59:30
 * @FilePath: \pnpm-v3-ts-ui\packages\components\icon\index.ts
 */
//导出组件的出口
import _Comp from './src/icon.vue';
import { withInstall } from '@lm/utils/vue';
console.log(withInstall);

const comp ={
  install:withInstall<typeof _Comp>(_Comp)
}
export * from './src/icon';//
export default comp;

// 拓展vue的类型，可以在模板中被解析，有代码提示
declare module 'vue' {
  export interface GlobalComponents {//接口可以自动合并
    LmIcon: typeof comp.install;
  }
}