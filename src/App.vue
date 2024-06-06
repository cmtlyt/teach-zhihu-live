<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useRequestProvider } from 'vue-request'
import { useNavigatorLanguage } from '@vueuse/core'

import { setI18nLanguage } from '@/locales'

const { language } = useNavigatorLanguage()
setI18nLanguage(language.value?.split('-')[0] || '')

useRequestProvider({
  // 十分钟
  cacheTime: 1000 * 60 * 10,
  loadingDelay: 0,
  loadingKeep: 100,
  // 不可见时依旧轮询
  pollingWhenHidden: true,
  // 网络不可用时依旧轮询
  pollingWhenOffline: true,
  manual: true,
})
</script>

<template>
  <a-config-provider>
    <RouterView />
  </a-config-provider>
</template>
