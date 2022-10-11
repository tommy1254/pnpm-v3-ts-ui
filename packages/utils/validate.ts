/*
 * @Description: 校验
 * @Version: 0.0.0
 * @Autor: 源
 * @Date: 2022-10-08 10:50:55
 * @LastEditors: 源
 * @LastEditTime: 2022-10-08 13:50:23
 * @FilePath: \pnpm-v3-ts-ui\packages\utils\validate.ts
 */
export const SCOPE = 'utils->validate'
/**
 * 获取指定的类型判断
 * @param { string } type 类型
 * @return {boolean}
 */
export const isType = (type:string) => {
  return function (obj:any) {
    return {}.toString.call(obj) === "[object " + type + "]";
  };
};
export const isObject = isType("Object");
export const isArray = Array.isArray || isType("Array");
export const isString = isType("String");
export const isNumber = isType("Number");
export const isUndefined = isType("Undefined");
export const isNull = isType("null");
export const isBoolean = isType("Boolean");
export const isSymbol = isType("Symbol");
//英文
export const isEnglish = (str: string) => {
  //正则
  var pattern = new RegExp("[A-Za-z]+");
  return pattern.test(str) ? true : false
}
//中文
export const isChinese = (str: string) => {
  //正则
  var pattern = new RegExp("[\u4E00-\u9FA5]+");
  return pattern.test(str) ? true : false
}

export const isServer = typeof window === 'undefined'