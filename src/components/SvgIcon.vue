<script setup lang="ts">
const { prefix = 'icon', name } = defineProps<{ prefix?: string; name: string }>()
const symbolId = `#${prefix}-${name}`
</script>

<template>
  <svg aria-hidden>
    <use :href="symbolId" fill="currentColor"></use>
  </svg>
</template>

<style lang="scss" scoped>
svg {
  width: 100%;
  height: 100%;
}
</style>
