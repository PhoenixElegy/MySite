## 新建一个Vite项目

### （一）新建项目

1. 新建文件夹**NewVitePro**

2. 在文件夹目录下新建一个终端

3. 创建基本模板项目，vite默认使用vue3

   ```shell
   $ npm create vite@latest
   $ yarn create vite
   ```

4. 配置Vite

   ```shell
   Need to install the following packages:
     create-vite@latest
   Ok to proceed? (y) y
   √ Project name: ... LBAA
   √ Package name: ... lbaa
   √ Select a framework: » Vue
   √ Select a variant: » TypeScript
   ```

5. 安装依赖包

   ```shell
   $ npm install
   ```

6. 运行工程

   ```shell
   $ npm run dev
   ```


### （二)  Element-plus组件全局加载

1. 安装Element-plus

   ```shell
   $ npm i element-plus
   ```

2. 修改项目入口文件，引入Element Plus库和相关样式文件

   ```tsx
   import { createApp } from 'vue'
   import App from './App.vue'
   import ElementPlus from 'element-plus'
   import 'element-plus/lib/theme-chalk/index.css'
   import 'element-plus/dist/index.css'
   
   createApp(App).use(ElementPlus).mount('#app')
   ```

### （三）Pinia，曾经的vuex，vue3中的全局变量控制器

1. 安装pinia

   ```shell
   $ npm install pinia
   ```

2. 在main.ts中创建pinia插件，并引入

   ```ts
   import { createApp } from 'vue'
   import { createPinia } from 'pinia'
   import App from './App.vue'
   
   const pinia = createPinia()
   const app = createApp(App)
   
   app.use(pinia)
   app.mount('#app')
   ```

3. 定义一个store容器

   参数1： main，对仓库的命名，名称必须具有唯一性，Pinia会将所有的容器挂载到根容器；

   参数2： 配置的选项对象，即state、getters、actions。其中state的写法必须是箭头函数。

   ```tsx
   import { defineStore } from 'pinia'
   
   export const useMainStore = defineStore('main',{
       state : () => {
           return {}
       },
       getters: {},
       actions: {}
   })
   ```

   You can think of `state` as the `data` of the store, `getters` as the `computed` properties of the store, and `actions` as the `methods`.

4.  类似于setup的定义语法

   ```tsx
   export const useCounterStore = defineStore('counter', () => {
     const count = ref(0)
     const name = ref('Eduardo')
     const doubleCount = computed(() => count.value * 2)
     function increment() {
       count.value++
     }
   
     return { count, name, doubleCount, increment }
   })
   ```

   In *Setup Stores*:

   - `ref()`s become `state` properties
   - `computed()`s become `getters`
   - `function()`s become `actions`

5.  使用store

   ```tsx
   <script setup>
    import { storeToRefs } from 'pinia'
       
   // @/stores/counter.ts
   import { useCounterStore } from '@/stores/counter'
   
   // access the `store` variable anywhere in the component ✨
   const store = useCounterStore()
   const { count , name } = store
   console.log(store)
       
   // 响应式使用store
   const { count , name } = storeToRefs(store)
   const { count , name } = store
   console.log(store)
   </script>
   ```

6.  示例ts

   ```tsx
   import {defineStore} from "pinia";
   //参数1：定义一个仓库的唯一id名，Pinia会将所有的容器挂载到根容器；参数2：选项对象
   export const useMainStore =  defineStore('main',{
     state:()=>{//state必须是函数，是避免在服务端渲染时的交叉请求导致的状态数据污染；必须是箭头函数，为了更好的TS类型推导
       return{
         count:10,
         name:'wl',
         arr:[1,2,3],
       }
     },
       getters:{
           //函数接受一个可选参数:state
       count10(state){return state.count + 10}
           /*count10():number{   //在TS文件下，getters使用了this,则必须指定类型，否则会导致推导错误
             return this.count += 12
           }*/
       },
       actions:{
         changeState(num,str){   //不要使用箭头函数定义action,因为箭头函数绑定外部this
             this.count += num     
             this.name += str
             this.arr.push(5)          
             // this.$patch({})或this.$patch(state=>{})    //还可通过$patch修改state的数据
         }
       }
   })
   ```

### （四） Route导航引入

1. 安装Route

   ```shell
   $ npm install vue-router -S
   ```

2. 创建router文件夹，创建index.ts文件

   ```ts
   import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
   
   const routes: Array<RouteRecordRaw> = [
       {
         path: '/',
         name: 'login',
         alias: ['/login','/login2'],   // 别名，可以定义很多个
         component: () => import('../src/login/Login.vue'),
         children: [
         ]
       },
       {
         path: '/home',
         name: 'home',
         alias: ['/home2','/home3'],   // 别名，可以定义很多个
         component: () => import('../src/home/Home.vue'),
         children: [
         ]
       },
   ]
   
   const router = createRouter({
       history: createWebHistory(),
       routes
   })
   
   export default router
   ```

3.  在main.ts中引入并注册

   ```tsx 
   import { createApp } from 'vue'
   import App from './App.vue'
   
   // module c:/Users/ARSC-2/Desktop/ArscGate/arscGate/router/index  默认读取index.ts
   import router from '../route'
   
   create(App).use(router).mount('#app')
   ```

4. App路由参考

   ```tsx
   <script setup lang="ts">
   // import HelloWorld from './components/HelloWorld.vue'
   import { useRouter } from 'vue-router'
   
   const router = useRouter();
   router.push({
     path: '/login'
   })
   
   </script>
   
   <template>
     <router-view></router-view>
   </template>
   
   <style scoped>
   </style>
   ```

###  (五)  vite vue-ts 配置“@”路径别名

1. 安装依赖

   ```shell
   $ npm i @types/node -D
   ```

2.  修改vite.config.js

   ```tsx
   import { defineConfig } from 'vite'
   import { resolve } from 'path'
   
   export default defineConfig {
       // ...
       resolve: {
           alias: {
               "@": resolve(__dirname, 'src'), // 路径别名
           },
           extensions: ['.js', '.json', '.ts'] // 使用路径别名时想要省略的后缀名，可以自己 增减
       }
       // ...
       // vite 官方文档中 不建议忽略 .vue 后缀的文，所以在 import 引入文件的时候需要加 .vue
   }
   ```

3.  修改tsconfig.json

   ```tsx
   {
       "compilerOptions" : {
           // ...
           "baseUrl": ".", // 用于设置解析非相对模块名称的基本目录，相对模块不会受到baseUrl的影响
           "paths": { // 用于设置模块名到基于baseUrl的路径映射
               "@/*": ["src/*"]
           }
           // ...
       }
   }
   ```

### （六） Axios的引入

1. 安装依赖

   ```shell
   $ npm install axios
   ```

2. 安装其他插件的时候，可以直接在 main.js 中引入并使用 Vue.use()来注册，但是 axios并不是vue插件，所以不能 使用Vue.use()，所以只能在每个需要发送请求的组件中即时引入。

   我们在引入 axios 之后，通过修改原型链，来更方便的使用。

   ```tsx
   // main.ts
   
   import axios from 'axios'
   Vue.prototype.$http = axios
   
   // 在组件中使用$http命令
   methods: {
       postData() {
           this.$http({
               method: 'post',
               url: '/url',
               data: {
               	name: 'xiaoming',
               	info: 12
   			}
   		})
    	}
   }
   ```

3.  拦截器

   ```tsx
   // 添加请求拦截器
   const myRequestInterceptor = axios.interceptors.request.use(config => {
       // 在发送http请求之前做些什么
       return config; // 有且必须有一个config对象被返回
   }, error => {
       // 对请求错误做些什么
       return Promise.reject(error);
   });
   
   // 添加响应拦截器
   axios.interceptors.response.use(response => {
     // 对响应数据做点什么
     return response; // 有且必须有一个response对象被返回
   }, error => {
     // 对响应错误做点什么
     return Promise.reject(error);
   });
   
   // 移除某次拦截器
   axios.interceptors.request.eject(myRequestInterceptor);
   ```

### (七) El-icon的引入

1. 安装依赖，选择一个包管理器

   ```shell
   # NPM
   $ npm install @element-plus/icons-vue
   # Yarn
   $ yarn add @element-plus/icons-vue
   # pnpm
   $ pnpm install @element-plus/icons-vue
   ```

2. 注册所有图标

   ```tsx
   // main.ts
   
   // 如果您正在使用CDN引入，请删除下面一行。
   import * as ElementPlusIconsVue from '@element-plus/icons-vue'
   
   const app = createApp(App)
   for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
     app.component(key, component)
   }
   ```


### (八) Scss的引入

1. NPM安装

   ```sh
   npm install -g sass
   // npm install -D sass-loader node-sass
   ```

2. `vue`文件中的使用

   ```tsx
   <style lang="scss" scope></style>
   ```