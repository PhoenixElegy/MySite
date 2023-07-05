import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import VMdPreview from '@kangc/v-md-editor/lib/preview'
import '@kangc/v-md-editor/lib/style/preview.css'

import githubTheme from '@kangc/v-md-editor/lib/theme/github.js'
import '@kangc/v-md-editor/lib/theme/style/github.css'

import hljs from 'highlight.js'
VMdPreview.use(githubTheme,{
  Hljs: hljs
})

const app = createApp(App)

app.use(i18n)
app.use(router)
app.use(VMdPreview)
app.mount('#app')
