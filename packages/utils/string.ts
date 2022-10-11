/*
 * @Description: 字符串处理
 * @Version: 0.0.0
 * @Autor: 源
 * @Date: 2022-10-08 10:50:06
 * @LastEditors: 源
 * @LastEditTime: 2022-10-08 10:52:14
 * @FilePath: \pnpm-v3-ts-ui\packages\utils\string.ts
 */

import { isEnglish } from './validate';
export const SCOPE = 'utils->string'
/**
 * 首字母英文转大写
 * @param string 字符串
 */
export const capital = (string: string) => {
  if (isEnglish(string)) {
    return string[0].toUpperCase() + string.substr(1);
  } else {
    console.error(SCOPE, 'capital,参数无效')
    return ''
  }
}
/**
 * 字符串转对象
 * @param string 
 * @returns 
 */
export const toObject = (string: string) => {
  if (isEnglish(string)) {
    return JSON.parse(string)
  } else {
    console.error(SCOPE, 'toObject,参数无效')
    return ''
  }
}
