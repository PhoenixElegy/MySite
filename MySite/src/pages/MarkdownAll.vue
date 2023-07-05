<script setup lang="ts">
import markdownTxt from '@/docs/Meta.md?raw'
// import markdownTxt from '@/docs/New-Vite-Pro.md?raw'
// import markdownTxt from '@/docs/Resolution-px.md?raw'
const menu = defineProps({
  props: {
    type: String,
  },
})
console.log(menu.props)
</script>

<template>
  <div class="mdlist">
    <v-md-preview :text="markdownTxt" />
  </div>
</template>

<style scoped>

</style>
