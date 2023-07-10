import{d as r,r as e,o as t,c as a,a as l,u as o}from"./index-34d20d4c.js";const s=`## i18n的一种使用方法\r
\r
1. Vue I18n 是 Vue.js 的国际化插件。它可以轻松地将一些本地化功能集成到你的 Vue.js 应用程序中。\r
\r
2. NPM安装\r
\r
   \`\`\`shell\r
   npm install vue-i18n\r
   \`\`\`\r
\r
3. 在模块系统中使用它\r
\r
   \`\`\`tsx\r
   import VueI18n from 'vue-i18n'  // main.ts\r
   \`\`\`\r
\r
4. 我们可能会遇到以下的错误\r
\r
   ![image-20230703091838690](img\\image-20230703091838690.png)\r
\r
   开发者提示我们升级到测试版以解决问题\r
\r
   \`\`\`shell\r
   npm install vue-i18n@9.3.0-beta.20\r
   \`\`\`\r
\r
   在使用的使用可能还会存在报错\r
\r
   \`\`\`tsx\r
   // main.ts\r
   app.use(Vuei18n) // ts(2345)\r
   \`\`\`\r
\r
\r
5. 因此考虑换一种方式，先建立如下目录树\r
\r
   \`\`\`shell\r
   └─i18n\r
       └─locale\r
           ├─en\r
           	└─index.ts\r
           └─zh\r
           	└─index.ts\r
       └─index.ts\r
   \`\`\`\r
\r
   在最外层的index.ts引入\`createI8n\`，另一个重要的是\`legacy: false\`\r
\r
   \`\`\`tsx\r
   import { createI18n } from "vue-i18n"\r
   import { Locale } from '@/eunms'\r
   \r
   import en from './locale/en'\r
   import zh from './locale/zh'\r
   \r
   const messages = { en, zh }\r
   \r
   const [locale, fallbackLocale] = /^zh\\b/.test(window.navigator.language)\r
     ? [Locale.ZH, Locale.EN]\r
     : [Locale.EN, Locale.ZH]\r
   \r
   export default createI18n({\r
     //添加以下选项，否则报错Not available in legacy mode\r
     legacy: false, \r
   \r
     locale,\r
     fallbackLocale,\r
     messages,\r
   })\r
   \`\`\`\r
\r
   在里层的index.ts放入不同文本的内容，以键值对的形式放置；\r
\r
   \`\`\`tsx\r
   // EN\r
   export default {\r
     header: {\r
       test: "English"\r
     }\r
   }\r
   // zh-CN\r
   export default {\r
     header: {\r
       test: "中文"\r
     }\r
   }\r
   \`\`\`\r
\r
6. 具体文件的使用方法\r
\r
   \`\`\`tsx\r
   // 引入使用函数\r
   import { useI18n } from 'vue-i18n'\r
   \r
   // 取出t函数\r
   const { t } = useI18n()\r
   // 取出当前语言模式\r
   const { locale } = useI18n()\r
   \r
   // 修改语言模式可以直接修改locale.value\r
   locale.value = locale.value === Locale.EN ? Locale.ZH : Locale.EN\r
   // 使用语言的值可以使用t函数，参数值为语言包中的键值对\r
   {{ t("header.test") }}\r
   \`\`\`\r
\r
   `,c={class:"mdlist"},d=r({__name:"i18n",setup(i){return(m,u)=>{const n=e("v-md-preview");return t(),a("div",c,[l(n,{text:o(s)},null,8,["text"])])}}});export{d as default};
