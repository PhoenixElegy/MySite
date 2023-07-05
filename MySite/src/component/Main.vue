<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Menu } from "@/data/menu"

const router = useRouter();

const data = ref(Menu)
const menu = ref("aaa")
const mainpages = function (route: string) {
  console.log(route)
  menu.value = route
  console.log("click")
  router.push({
    path: `/${route}`
    //path: `/MarkdownAll`
  })
}
</script>

<template>
  <div class="main">
    <div class="main-menu">
      <details v-for="item in data" class="main-tree">
        <summary title="item.name" data-id="item.id">
          <span class="main-tree-item">{{ item.name }}</span>
        </summary>
        <details v-if="item.children" v-for="i in item.children">
          <summary title="i.name" data-id="i.id">
            <span class="main-tree-item" @click="mainpages(i.route)">{{ i.name }}</span>
          </summary>
        </details>
      </details>
    </div>
    <!-- <button @click="mainpages">test</button> -->
    <div class="main-pages">
      <router-view :props="menu"/>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.main-menu {
  max-width: 768px;
  height: 100%;
  min-width: 320px;
}

.main-menu {
  overflow: auto;
  position: relative;
  width: 310px;
  height: 100%;
}

.main-pages {
  /* flex: 1 1 auto; */
  height: 100%;
  margin: 0px 5px 0px;
  width: 800px;
  /* background-color: aqua; */
}

details {
  padding-left: 10px;
}

summary {
  outline: 0;
  padding-left: 20px;
  list-style: none;
  /* background: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.354 2.646A.5.5 0 0 0 4.5 3v6a.5.5 0 0 0 .854.354l3-3a.5.5 0 0 0 0-.708l-3-3z' fill='%23000' fill-opacity='.45'/%3E%3C/svg%3E") 4px center no-repeat; */
}

summary:not(:only-child) {
  background: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.354 2.646A.5.5 0 0 0 4.5 3v6a.5.5 0 0 0 .854.354l3-3a.5.5 0 0 0 0-.708l-3-3z' fill='%23000' fill-opacity='.45'/%3E%3C/svg%3E") 4px center no-repeat;
}

details[open]>summary:not(:only-child) {
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.354 5.354A.5.5 0 0 0 9 4.5H3a.5.5 0 0 0-.354.854l3 3a.5.5 0 0 0 .708 0l3-3z' fill='%23000' fill-opacity='.45'/%3E%3C/svg%3E");
}

.main-tree-item {
  display: flex;
  align-items: center;
  height: 46px;
  font-size: 15px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.85);
  cursor: default;
}

.main-tree-item::after {
  content: '';
  position: absolute;
  left: 10px;
  right: 10px;
  width: 300px;
  height: 38px;
  background: #EEF2FF;
  border-radius: 8px;
  z-index: -1;
  opacity: 0;
  transition: .2s;
}

.main-tree-item:hover::after {
  opacity: 1;
}

.main-tree-item::before {
  content: '';
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-right: 8px;
  background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M.833 3.75c0-.92.746-1.667 1.667-1.667h5.417c.247 0 .481.11.64.3l1.833 2.2h7.11c.92 0 1.667.747 1.667 1.667v10c0 .92-.747 1.667-1.667 1.667h-15c-.92 0-1.667-.746-1.667-1.667V3.75zm6.693 0H2.5v4.584h15V6.25H10a.833.833 0 0 1-.64-.3l-1.834-2.2zM17.5 10h-15v6.25h15V10z' fill='%23000' fill-opacity='.45'/%3E%3C/svg%3E") center no-repeat;
}

details[open]>summary:not(:only-child)>.main-tree-item::before {
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.917 2.083c.247 0 .481.11.64.3l1.833 2.2h5.443c.92 0 1.667.747 1.667 1.667v1.667h.833a.833.833 0 0 1 .817.997l-1.666 8.333a.833.833 0 0 1-.817.67H1.677a.814.814 0 0 1-.157-.013.83.83 0 0 1-.687-.82V3.75c0-.92.746-1.667 1.667-1.667h5.417zM10 6.25a.833.833 0 0 1-.64-.3l-1.834-2.2H2.5v6.564l.441-1.766a.833.833 0 0 1 .809-.631h12.083V6.25H10zm-7.266 10L4.4 9.584h12.916l-1.334 6.666H2.733z' fill='%23000' fill-opacity='.45'/%3E%3C/svg%3E");
}
</style>
