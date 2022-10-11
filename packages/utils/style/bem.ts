/*
 * @Description: bem block块 element元素 modifier装饰
 * @Version: 0.0.0
 * @Autor: 源
 * @Date: 2022-10-08 10:04:34
 * @LastEditors: 源
 * @LastEditTime: 2022-10-11 09:20:11
 * @FilePath: \pnpm-v3-ts-ui\packages\ui-utils\bem.ts
 */
import { capital } from '@lm/utils/string';
export const SCOPE = 'ui-utils->bem'
const defaultNamespace = 'lm'
const statePrefix = 'is-'
const _bem = (
  namespace: string,
  block: string,
  blockSuffix: string,
  element: string,
  modifier: string
) => {
  let cls = `${namespace}-${block}`
  if (blockSuffix) {
    cls += `-${blockSuffix}`
  }
  if (element) {
    cls += `__${element}`
  }
  if (modifier) {
    cls += `--${modifier}`
  }
  return cls
}
export const useBem = (block: string) => {
  const namespace = defaultNamespace;
  // 组件Name
  const cn = (blockSuffix = '') => {
    return capital(namespace) + capital(block) + blockSuffix;
  }
  // scss root定义
  const root = (blockSuffix = '') => {
    return _bem(`--${namespace}`, block, blockSuffix, '', '')
  }
  
  const b = (blockSuffix = '') => {
    return _bem(namespace, block, blockSuffix, '', '')
  }
  const e = (element?: string) => {
    return element ? _bem(namespace, block, '', element, '') : ''
  }
  //lm-button--primar
  const m = (modifier?: string) => {
    return modifier ? _bem(namespace, block, '', '', modifier) : ''
  }
  const be = (blockSuffix?: string, element?: string) => {
    return blockSuffix && element ? _bem(namespace, block, blockSuffix, element, '') : ''
  }
  const em = (element?: string, modifier?: string) => {
    return element && modifier ? _bem(namespace, block, '', element, modifier) : ''
  }
  const bm = (blockSuffix?: string, modifier?: string) => {
    return blockSuffix && modifier ? _bem(namespace, block, blockSuffix, '', modifier) : ''
  }
  const bem = (blockSuffix?: string, element?: string, modifier?: string) => {
    return blockSuffix && element && modifier ? _bem(namespace, block, blockSuffix, element, modifier) : ''
  }
  const is: {
    (name: string, state: boolean | undefined): string
    (name: string): string
  } = (name: string, ...args: [boolean | undefined] | []) => {
    const state = args.length >= 1 ? args[0]! : true;
    return name && state ? `${statePrefix}${name}` : ''
  }
  //对于css变量
  //--lm-xxx：值；
  const cssVar = (object: Record<string, string>) => {
    const styles: Record<string, string> = {}
    for (const key in object) {
      styles[`--${namespace}-${key}`] = object[key]
    }
    return styles
  }
  const cssVarName = (name: string) => `--${namespace}-${name}`
  // 带块
  const cssVarBlock = (object: Record<string, string>) => {
    const styles: Record<string, string> = {}
    for (const key in object) {
      styles[`--${namespace}-${block}-${key}`] = object[key]
    }
    return styles
  }
  const cssVarBlockName = (name: string) => `--${namespace}-${block}-${name}`
  return { namespace, cn, root, b, e, m, be, em, bm, bem, is, cssVar, cssVarName, cssVarBlock, cssVarBlockName }
}