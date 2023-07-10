import{d as n,r as e,o as t,c as o,a as s,u as i}from"./index-34d20d4c.js";const a=`## 新建一个Vite项目\r
\r
### （一）新建项目\r
\r
1. 新建文件夹**NewVitePro**\r
\r
2. 在文件夹目录下新建一个终端\r
\r
3. 创建基本模板项目，vite默认使用vue3\r
\r
   \`\`\`shell\r
   $ npm create vite@latest\r
   $ yarn create vite\r
   \`\`\`\r
\r
4. 配置Vite\r
\r
   \`\`\`shell\r
   Need to install the following packages:\r
     create-vite@latest\r
   Ok to proceed? (y) y\r
   √ Project name: ... LBAA\r
   √ Package name: ... lbaa\r
   √ Select a framework: » Vue\r
   √ Select a variant: » TypeScript\r
   \`\`\`\r
\r
5. 安装依赖包\r
\r
   \`\`\`shell\r
   $ npm install\r
   \`\`\`\r
\r
6. 运行工程\r
\r
   \`\`\`shell\r
   $ npm run dev\r
   \`\`\`\r
\r
\r
### （二)  Element-plus组件全局加载\r
\r
1. 安装Element-plus\r
\r
   \`\`\`shell\r
   $ npm i element-plus\r
   \`\`\`\r
\r
2. 修改项目入口文件，引入Element Plus库和相关样式文件\r
\r
   \`\`\`tsx\r
   import { createApp } from 'vue'\r
   import App from './App.vue'\r
   import ElementPlus from 'element-plus'\r
   import 'element-plus/lib/theme-chalk/index.css'\r
   import 'element-plus/dist/index.css'\r
   \r
   createApp(App).use(ElementPlus).mount('#app')\r
   \`\`\`\r
\r
### （三）Pinia，曾经的vuex，vue3中的全局变量控制器\r
\r
1. 安装pinia\r
\r
   \`\`\`shell\r
   $ npm install pinia\r
   \`\`\`\r
\r
2. 在main.ts中创建pinia插件，并引入\r
\r
   \`\`\`ts\r
   import { createApp } from 'vue'\r
   import { createPinia } from 'pinia'\r
   import App from './App.vue'\r
   \r
   const pinia = createPinia()\r
   const app = createApp(App)\r
   \r
   app.use(pinia)\r
   app.mount('#app')\r
   \`\`\`\r
\r
3. 定义一个store容器\r
\r
   参数1： main，对仓库的命名，名称必须具有唯一性，Pinia会将所有的容器挂载到根容器；\r
\r
   参数2： 配置的选项对象，即state、getters、actions。其中state的写法必须是箭头函数。\r
\r
   \`\`\`tsx\r
   import { defineStore } from 'pinia'\r
   \r
   export const useMainStore = defineStore('main',{\r
       state : () => {\r
           return {}\r
       },\r
       getters: {},\r
       actions: {}\r
   })\r
   \`\`\`\r
\r
   You can think of \`state\` as the \`data\` of the store, \`getters\` as the \`computed\` properties of the store, and \`actions\` as the \`methods\`.\r
\r
4.  类似于setup的定义语法\r
\r
   \`\`\`tsx\r
   export const useCounterStore = defineStore('counter', () => {\r
     const count = ref(0)\r
     const name = ref('Eduardo')\r
     const doubleCount = computed(() => count.value * 2)\r
     function increment() {\r
       count.value++\r
     }\r
   \r
     return { count, name, doubleCount, increment }\r
   })\r
   \`\`\`\r
\r
   In *Setup Stores*:\r
\r
   - \`ref()\`s become \`state\` properties\r
   - \`computed()\`s become \`getters\`\r
   - \`function()\`s become \`actions\`\r
\r
5.  使用store\r
\r
   \`\`\`tsx\r
   <script setup>\r
    import { storeToRefs } from 'pinia'\r
       \r
   // @/stores/counter.ts\r
   import { useCounterStore } from '@/stores/counter'\r
   \r
   // access the \`store\` variable anywhere in the component ✨\r
   const store = useCounterStore()\r
   const { count , name } = store\r
   console.log(store)\r
       \r
   // 响应式使用store\r
   const { count , name } = storeToRefs(store)\r
   const { count , name } = store\r
   console.log(store)\r
   <\/script>\r
   \`\`\`\r
\r
6.  示例ts\r
\r
   \`\`\`tsx\r
   import {defineStore} from "pinia";\r
   //参数1：定义一个仓库的唯一id名，Pinia会将所有的容器挂载到根容器；参数2：选项对象\r
   export const useMainStore =  defineStore('main',{\r
     state:()=>{//state必须是函数，是避免在服务端渲染时的交叉请求导致的状态数据污染；必须是箭头函数，为了更好的TS类型推导\r
       return{\r
         count:10,\r
         name:'wl',\r
         arr:[1,2,3],\r
       }\r
     },\r
       getters:{\r
           //函数接受一个可选参数:state\r
       count10(state){return state.count + 10}\r
           /*count10():number{   //在TS文件下，getters使用了this,则必须指定类型，否则会导致推导错误\r
             return this.count += 12\r
           }*/\r
       },\r
       actions:{\r
         changeState(num,str){   //不要使用箭头函数定义action,因为箭头函数绑定外部this\r
             this.count += num     \r
             this.name += str\r
             this.arr.push(5)          \r
             // this.$patch({})或this.$patch(state=>{})    //还可通过$patch修改state的数据\r
         }\r
       }\r
   })\r
   \`\`\`\r
\r
### （四） Route导航引入\r
\r
1. 安装Route\r
\r
   \`\`\`shell\r
   $ npm install vue-router -S\r
   \`\`\`\r
\r
2. 创建router文件夹，创建index.ts文件\r
\r
   \`\`\`ts\r
   import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'\r
   \r
   const routes: Array<RouteRecordRaw> = [\r
       {\r
         path: '/',\r
         name: 'login',\r
         alias: ['/login','/login2'],   // 别名，可以定义很多个\r
         component: () => import('../src/login/Login.vue'),\r
         children: [\r
         ]\r
       },\r
       {\r
         path: '/home',\r
         name: 'home',\r
         alias: ['/home2','/home3'],   // 别名，可以定义很多个\r
         component: () => import('../src/home/Home.vue'),\r
         children: [\r
         ]\r
       },\r
   ]\r
   \r
   const router = createRouter({\r
       history: createWebHistory(),\r
       routes\r
   })\r
   \r
   export default router\r
   \`\`\`\r
\r
3.  在main.ts中引入并注册\r
\r
   \`\`\`tsx \r
   import { createApp } from 'vue'\r
   import App from './App.vue'\r
   \r
   // module c:/Users/ARSC-2/Desktop/ArscGate/arscGate/router/index  默认读取index.ts\r
   import router from '../route'\r
   \r
   create(App).use(router).mount('#app')\r
   \`\`\`\r
\r
4. App路由参考\r
\r
   \`\`\`tsx\r
   <script setup lang="ts">\r
   // import HelloWorld from './components/HelloWorld.vue'\r
   import { useRouter } from 'vue-router'\r
   \r
   const router = useRouter();\r
   router.push({\r
     path: '/login'\r
   })\r
   \r
   <\/script>\r
   \r
   <template>\r
     <router-view></router-view>\r
   </template>\r
   \r
   <style scoped>\r
   </style>\r
   \`\`\`\r
\r
###  (五)  vite vue-ts 配置“@”路径别名\r
\r
1. 安装依赖\r
\r
   \`\`\`shell\r
   $ npm i @types/node -D\r
   \`\`\`\r
\r
2.  修改vite.config.js\r
\r
   \`\`\`tsx\r
   import { defineConfig } from 'vite'\r
   import { resolve } from 'path'\r
   \r
   export default defineConfig {\r
       // ...\r
       resolve: {\r
           alias: {\r
               "@": resolve(__dirname, 'src'), // 路径别名\r
           },\r
           extensions: ['.js', '.json', '.ts'] // 使用路径别名时想要省略的后缀名，可以自己 增减\r
       }\r
       // ...\r
       // vite 官方文档中 不建议忽略 .vue 后缀的文，所以在 import 引入文件的时候需要加 .vue\r
   }\r
   \`\`\`\r
\r
3.  修改tsconfig.json\r
\r
   \`\`\`tsx\r
   {\r
       "compilerOptions" : {\r
           // ...\r
           "baseUrl": ".", // 用于设置解析非相对模块名称的基本目录，相对模块不会受到baseUrl的影响\r
           "paths": { // 用于设置模块名到基于baseUrl的路径映射\r
               "@/*": ["src/*"]\r
           }\r
           // ...\r
       }\r
   }\r
   \`\`\`\r
\r
### （六） Axios的引入\r
\r
1. 安装依赖\r
\r
   \`\`\`shell\r
   $ npm install axios\r
   \`\`\`\r
\r
2. 安装其他插件的时候，可以直接在 main.js 中引入并使用 Vue.use()来注册，但是 axios并不是vue插件，所以不能 使用Vue.use()，所以只能在每个需要发送请求的组件中即时引入。\r
\r
   我们在引入 axios 之后，通过修改原型链，来更方便的使用。\r
\r
   \`\`\`tsx\r
   // main.ts\r
   \r
   import axios from 'axios'\r
   Vue.prototype.$http = axios\r
   \r
   // 在组件中使用$http命令\r
   methods: {\r
       postData() {\r
           this.$http({\r
               method: 'post',\r
               url: '/url',\r
               data: {\r
               	name: 'xiaoming',\r
               	info: 12\r
   			}\r
   		})\r
    	}\r
   }\r
   \`\`\`\r
\r
3.  拦截器\r
\r
   \`\`\`tsx\r
   // 添加请求拦截器\r
   const myRequestInterceptor = axios.interceptors.request.use(config => {\r
       // 在发送http请求之前做些什么\r
       return config; // 有且必须有一个config对象被返回\r
   }, error => {\r
       // 对请求错误做些什么\r
       return Promise.reject(error);\r
   });\r
   \r
   // 添加响应拦截器\r
   axios.interceptors.response.use(response => {\r
     // 对响应数据做点什么\r
     return response; // 有且必须有一个response对象被返回\r
   }, error => {\r
     // 对响应错误做点什么\r
     return Promise.reject(error);\r
   });\r
   \r
   // 移除某次拦截器\r
   axios.interceptors.request.eject(myRequestInterceptor);\r
   \`\`\`\r
\r
### (七) El-icon的引入\r
\r
1. 安装依赖，选择一个包管理器\r
\r
   \`\`\`shell\r
   # NPM\r
   $ npm install @element-plus/icons-vue\r
   # Yarn\r
   $ yarn add @element-plus/icons-vue\r
   # pnpm\r
   $ pnpm install @element-plus/icons-vue\r
   \`\`\`\r
\r
2. 注册所有图标\r
\r
   \`\`\`tsx\r
   // main.ts\r
   \r
   // 如果您正在使用CDN引入，请删除下面一行。\r
   import * as ElementPlusIconsVue from '@element-plus/icons-vue'\r
   \r
   const app = createApp(App)\r
   for (const [key, component] of Object.entries(ElementPlusIconsVue)) {\r
     app.component(key, component)\r
   }\r
   \`\`\`\r
\r
\r
### (八) Scss的引入\r
\r
1. NPM安装\r
\r
   \`\`\`sh\r
   npm install -g sass\r
   // npm install -D sass-loader node-sass\r
   \`\`\`\r
\r
2. \`vue\`文件中的使用\r
\r
   \`\`\`tsx\r
   <style lang="scss" scope></style>\r
   \`\`\``,p={class:"mdlist"},h=n({__name:"New-Vite-Pro",setup(u){return(c,m)=>{const r=e("v-md-preview");return t(),o("div",p,[s(r,{text:i(a)},null,8,["text"])])}}});export{h as default};
