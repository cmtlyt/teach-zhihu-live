<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import SvgIcon from './components/SvgIcon.vue'
</script>

<template>
  <div class="flex justify-center items-center">
    <a
      href="https://vitejs.dev"
      target="_blank"
    >
      <SvgIcon
        name="vite"
        class="logo"
      />
    </a>
    <a
      href="https://vuejs.org/"
      target="_blank"
    >
      <SvgIcon
        name="vue"
        class="logo vue"
      />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  &.vue:hover {
    filter: drop-shadow(0 0 2em $theme-color);
  }
}
</style>
