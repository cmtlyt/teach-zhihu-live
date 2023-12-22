import { sendImageMessage, sendWordMessage } from '@/api/chat'
import type { THistoryMap, TMessageConfig, TMessageItem } from '@/types/chat'
import { defineStore } from 'pinia'
import { useDebounceFn } from '@vueuse/core'

async function _postMessage(messages: TMessageItem[], messageConfig: TMessageConfig) {
  switch (messageConfig.type) {
    case 'word':
      return sendWordMessage(messages, messageConfig.content, messageConfig.chunkCallback)
    case 'image':
      return sendImageMessage(messageConfig.prompt, messageConfig.chunkCallback)
    default:
      // @ts-expect-error 未使用
      const _: never = messageConfig
      return Promise.reject()
  }
}

const storageKey = 'chatHistory'

export const useChatStore = defineStore('chat', {
  state() {
    const historyMap: THistoryMap = JSON.parse(localStorage.getItem(storageKey) || '{}')
    return {
      historyMap,
      currChatId: '',
    }
  },
  getters: {
    history(state) {
      return state.historyMap[state.currChatId] || []
    },
  },
  actions: {
    _saveHistory: useDebounceFn((historyMap: THistoryMap) => {
      localStorage.setItem(storageKey, JSON.stringify(historyMap))
    }, 50),
    createMessage(message: TMessageItem) {
      this.history.push(message)
      this._saveHistory(this.historyMap)
    },
    async postMessage(messageConfig: TMessageConfig) {
      return _postMessage(this.history, messageConfig).then((content) => {
        let message: TMessageItem | null = null
        if (messageConfig.type == 'word') message = { role: 'user', content: messageConfig.content }
        else if (messageConfig.type == 'image') message = { role: 'user', content: messageConfig.prompt }
        message && this.createMessage(message)
        this.createMessage({ role: 'assistant', content })
      })
    },
    selectChat(chatId: string) {
      this.currChatId = chatId
    },
  },
})
