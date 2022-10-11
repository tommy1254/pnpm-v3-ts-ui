<!--
 * @Description: 
 * @Version: 0.0.0
 * @Autor: 源
 * @Date: 2022-10-11 09:05:42
 * @LastEditors: 源
 * @LastEditTime: 2022-10-11 15:59:06
 * @FilePath: \pnpm-v3-ts-ui\packages\components\icon\src\icon.vue
-->
<template>
  <i >
    <slot>1</slot>
  </i>
</template>
<script lang="ts">
import { useBem } from '@lm/utils/style/bem';
const bem=useBem('icon')
export default {
  name: bem.cn(),
};
</script>
<script setup lang="ts">
import { iconProps } from './icon';
const props=defineProps(iconProps);

</script>
<style scoped lang="scss">
</style>
