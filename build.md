# 一、UI库搭建
## &emsp;1、安装pnpm
```
npm install pnpm -g #全局安装
pnpm init #初始化
```
## &emsp;2、node_modules提升包的位置
##### 在根目录建立 .npmrc 文件，否则安装的模块无法放置 到 node_modules 目录下

```js
shamefully-hoist = true
```
## &emsp;3、安装项目依赖
```
pnpm install vue typescript -D # 全局下添加依赖
```
## &emsp;4、初始化ts配置项
```
pnpm tsc --init
```
##### 修改tsconfig.json为
```js
{
  "compilerOptions": {
    "module": "ESNext", // 打包模块类型ESNext
    "declaration": false, // 默认不要声明文件 
    "noImplicitAny": true, // 支持类型不标注可以默认any
    "removeComments": true, // 删除注释
    "moduleResolution": "node", // 按照node模块来解析
    "esModuleInterop": true, // 支持es6,commonjs模块
    "jsx": "preserve", // jsx 不转
    "noLib": false, // 不处理类库
    "target": "es6", // 遵循es6版本
    "sourceMap": true,
    "lib": [ // 编译时用的库
      "ESNext",
      "DOM"
    ],
    "allowSyntheticDefaultImports": true, // 允许没有导出的模块中导入
    "experimentalDecorators": true, // 装饰器语法
    "forceConsistentCasingInFileNames": true, // 强制区分大小写
    "resolveJsonModule": true, // 解析json模块
    "strict": true, // 是否启动严格模式
    "skipLibCheck": true // 跳过类库检测
  },
  "exclude": [ // 排除掉哪些类库
    "node_modules",
    "**/__tests__",
    "dist/**"
  ]
}
```
## &emsp;5、pnpm独有工作空间 (可不建)
##### 在根目录建立 pnpm-workspace.yaml 文件,可以告诉pnpm有多少个包
```
 packages:
    - play # 组件测试的代码
    - docs # 组件文档
    - "packages/**" # 所有的组件
```
## &emsp;6、包的调用
### &emsp;&emsp;6.1、全局包
##### 在根目录
```
pnpm install 包名 -w 
```
### &emsp;&emsp;6.2、设置调用所有版本
##### package.json
```js
"devDependencies": {
 "包名": "worskpace:*",
}
```
# 二、创建play测试环境
## &emsp;1、使用vite创建
```
#根目录
#创建vite vue-ts模板
pnpm create vite play --template vue-ts
#或者使用安装最新版的vite
npm init vite@latest

cd play
pnpm i
```
## &emsp;2、play->src->env.d.ts 或 vite-env.d.ts
##### 作用声明环境变量内容
##### 支持在 ts文件中识别 .vue文件
##### 鉴于其他地方下需要复制到根目录

## &emsp;3、根目录package映射到paly目录package
```js
"scripts": {
    "dev": "pnpm -C play dev",
}
```
# 三、创建play测试环境
## &emsp;1、使用vite创建
## &emsp;2、优雅的定义组件名称
```
pnpm i unplugin-vue-define-options -D -w
```
### &emsp;&emsp;2.1、在play->vite.config.ts修改
```js
//vite版推荐用0.62 
import DefineOptions from 'unplugin-vue-define-options/vite';
export default defineConfig({
  plugins: [vue(),DefineOptions()]
})
```
```js
// 给组件加上名字
defineOptions({
  name: 'icon'//这里不能是变量
});
```
### &emsp;&emsp;2.2、定义组件名称
##### 直接写一个ts 来定义
```html
<script lang="ts">
export default {
  name:'icon',
};
</script>
```