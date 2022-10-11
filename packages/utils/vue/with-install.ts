/*
 * @Description: 组件安装
 * @Version: 0.0.0
 * @Autor: 源
 * @Date: 2022-10-10 14:24:22
 * @LastEditors: 源
 * @LastEditTime: 2022-10-11 16:20:59
 * @FilePath: \pnpm-v3-ts-ui\packages\utils\vue\with-install.ts
 */
import { SFCWithInstall } from '../ts/var';
export const SCOPE:string = 'utils->vue->with-install'
/**
 * 注册组件
 * @param comp 
 * @returns 
 */
 export const withInstall = <T>(comp: T):T => {
  (comp as SFCWithInstall<T>).install = (app:any) => {
    //可能空，但name是string
    const {name} = comp as unknown as { name: string };
    app.component(name, comp)
  }
  return comp as SFCWithInstall<T>
}


/**
 * 安装组件
 * @param {Object} Vue Vue
 * @param {Object} component 组件
 */
 export const compInstall = (Vue: any, component: any):any => {
  if (component.install) {
    Vue.component(component.install.name, component.install);
  }
  //全局指令
  if (component.directive) {
    Vue.directive(
      component.name,
      component.directive.default || component.directive
    );
  }
  //全局服务
  if (component.service) {
    Vue.config.globalProperties["$" + component.name] = component.service;
  }
}