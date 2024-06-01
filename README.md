## teach-zhihu-live

1111测试修改分支




> vue3模板
> 对所有开发依赖进行预构建
> 基本工具打包优化
> 对不支持模块化的浏览器提供非模块化的js
> 优化svg图标
> 国际化支持
> jpg,png,gif格式图片转webp格式
> svg图像压缩
> arco-design框架按需导入
> i18n打包优化
> 全局注入事件总线
> scss变量自动导入
> git提交消息验证
> 提供代码格式化配置
> 提供原子化css
> 自动添加各浏览器css前缀

### 包含内容

#### 三方包

- [fingerprintjs (浏览器指纹)](https://github.com/fingerprintjs/fingerprintjs)
- [vueuse (vue工具)](https://vueuse.org/guide/)
- [axios (网络请求)](https://axios-http.com/docs/intro)
- [mitt (事件总线)](https://github.com/developit/mitt?tab=readme-ov-file#readme)
- [pinia (状态管理)](https://pinia.web3doc.top/introduction.html)
- [simdjson (json解析)](https://github.com/luizperes/simdjson_nodejs#readme)
- [i18n (国际化)](https://vue-i18n.intlify.dev/guide/)
- [vue-request (vue响应式请求代理)](https://www.attojs.org/guide/introduction.html)
- [vue-router (vue路由)](https://router.vuejs.org/zh/guide/)
- [arco-design (ui框架)](https://arco.design/vue/docs/start)
- [commitlint (git命令检查)](https://commitlint.js.org/#/)
- [postcss (css后处理器)](https://postcss.org/)
- [sass (css预处理器)](https://sass-lang.com/documentation/)
- [typescript (ts支持)](https://www.typescriptlang.org/docs/)
- [prettier (代码格式化)](https://prettier.io/docs/en/)
- [tailwindcss (原子化css)](https://tailwindcss.com/docs/installation)

#### 内置组件

- [SvgIcon (svg图标)](./src/components/SvgIcon.vue)

### 资源概述

#### 目录

> root

- `src` 所有代码
- `public` 静态资源
- `dist` 打包输出目录
- `.husky` 命令行拦截

> src

- `api` 接口
- `assets` 资源
- `components` 组件
- `eventBus` 事件总线
- `locales` 国际化
- `routers` 路由
- `stores` 状态存储
- `types` 类型
- `utils` 工具
- `views` 页面

#### 文件

> root

- `.browserslistrc` 期望兼容浏览器列表
- `.commitlintrc.js` git提交检查规则配置文件
- `.gitignore` git忽略提交配置
- `.prettierrc` 代码格式化配置文件
- `index.html` 代码打包入口
- `package.json` 包配置文件
- `pnpm-lock.yaml` pnpm锁文件
- `postcss.config.js` postcss配置文件
- `README.md` 项目自述文件
- `tailwind.config.js` tailwindcss配置文件
- `tsconfig.json/tsconfig.node.json` ts配置文件
- `vite.config.ts` vite打包配置文件

> src

- `App.vue` 根组件
- `global.scss` 全局样式
- `main.ts` 脚本入口
- `tailwind.css` tailwind初始化样式表
- `variable.scss` 全局样式变量
- `vite-env.d.ts` vite开发环境变量类型文件

#### 路径别名

- @ `src`
- @icon `src/assets/icons`
- @comp `src/components`
- @type `src/types`
- @store `src/stores`

### 工具用法

#### 修改完三方包后执行

```bash
npx patch-package <包名>
```
