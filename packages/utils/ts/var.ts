/*
 * @Description: ts类型定义
 * @Version: 0.0.0
 * @Autor: 源
 * @Date: 2022-10-11 15:24:27
 * @LastEditors: 源
 * @LastEditTime: 2022-10-11 16:17:31
 * @FilePath: \pnpm-v3-ts-ui\packages\utils\ts\var.ts
 */
import { Plugin } from 'vue';
export const SCOPE = 'utils->ts->var'
//泛型 和 插件型
export type SFCWithInstall<T> = T & Plugin