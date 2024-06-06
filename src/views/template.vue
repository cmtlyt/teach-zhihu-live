<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { usePagination, useRequest } from 'vue-request'

import SvgIcon from '@/components/SvgIcon.vue'
import TestForm from '@/components/TestForm.vue'
import { http } from '@/api/request'

const { t: $t } = useI18n()
const { data, run, loading } = useRequest(() => http.get('/test'))
const {
  data: pageData,
  current,
  loading: pageLoading,
  pageSize,
  run: pageRun,
} = usePagination((params: { current: number; pageSize: number }) => {
  return http.get('/test', { params })
})
console.debug('123')
pageRun({ current: current.value, pageSize: pageSize.value })
</script>

<template>
  <div class="flex justify-center items-center">
    <a href="https://vitejs.dev" target="_blank">
      <SvgIcon name="vite" class="logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <SvgIcon name="vue" class="logo vue" />
    </a>
  </div>
  <div>
    <div @click="() => run()">send</div>
    <div>req data</div>
    {{ data }}
    <div>req loading</div>
    {{ loading }}
  </div>
  <div>
    <div @click="() => current++">send</div>
    <div>req curr page</div>
    {{ current }}
    <div>req data</div>
    {{ pageData }}
    <div>req loading</div>
    {{ pageLoading }}
  </div>
  <span v-t="'home.title'"></span>
  <span>{{ $t('home.title') }}</span>
  <TestForm />
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
