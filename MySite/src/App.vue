<script setup lang="ts">
import Header from '@/component/Header.vue'
import Main from '@/component/Main.vue'
</script>

<template>
  <div class="mysite">
    <div class="mysite-header">
      <Header></Header>
    </div>
    <div class="mysite-main">
      <Main></Main>
    </div>
  </div>
</template>

<style scoped>
.mysite {
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  height: 100vh;
}

.mysite-main {
  flex: 1 1 auto;
}

.mysite-header{
  width: 100%;
}
</style>
