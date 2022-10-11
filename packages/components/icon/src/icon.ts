/*
 * @Description: 
 * @Version: 0.0.0
 * @Autor: 源
 * @Date: 2022-10-11 09:05:30
 * @LastEditors: 源
 * @LastEditTime: 2022-10-11 09:15:59
 * @FilePath: \pnpm-v3-ts-ui\packages\components\icon\src\icon.ts
 */
import { ExtractPropTypes, PropType } from 'vue';
//props
export const iconProps = {
  color: String,
  size: [Number, String] as PropType<number | string>
} as const //变成只读属性

//抽离属性
export type IconProps = ExtractPropTypes<typeof iconProps>;