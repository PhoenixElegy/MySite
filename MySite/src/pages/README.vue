<script setup lang="ts">
import markdownTxt from '@/docs/README.md?raw'
</script>

<template>
  <div class="mdlist">
    <v-md-preview :text="markdownTxt" />
  </div>
</template>

<style scoped>

</style>
