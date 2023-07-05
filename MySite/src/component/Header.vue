<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Locale } from '@/eunms'

const { t } = useI18n()
const { locale } = useI18n()
const headerlang = ref<string>("zh-CN")

const changeLang = function () {
  headerlang.value = headerlang.value === "zh-CN" ? "EN" : "zh-CN"
  locale.value = locale.value === Locale.EN ? Locale.ZH : Locale.EN
}
</script>

<template>
  <div class="header">
    <div class="header-user">
      <span class="header-user-text">{{ t("header.test") }}</span>
    </div>
    <div class="header-user">
      <span class="header-user-text">PhoenixElegy</span>
    </div>
    <div class="header-lang">
      <span class="header-user-text" @click="changeLang">{{ headerlang }}</span>
    </div>
  </div>
</template>

<style scoped>
.header {
  width: 100%;
  height: 3rem;
  background-color: #7A848d;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.header-user-text:hover {
  text-decoration: underline;
  cursor: pointer;
  color: black;
}

.header-user-text{
  line-height: 3rem;
}
</style>
