import { sendImageMessage, sendWordMessage } from '@/api/chat'
import type { TMessageConfig, TMessageItem, TWordMessage } from '@/types/chat'
import { defineStore } from 'pinia'

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
    const historyMap: Record<string, TMessageItem[]> = JSON.parse(localStorage.getItem(storageKey) || '{}')
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
    createMessage(message: TMessageItem) {
      this.history.push(message)
      localStorage.setItem(storageKey, JSON.stringify(this.historyMap))
    },
    async postMessage(messageConfig: TMessageConfig) {
      return _postMessage(this.history, messageConfig).then((content) => {
        this.createMessage((messageConfig as TWordMessage).content)
        this.createMessage({ content, role: 'assistant' })
      })
    },
    selectChat(chatId: string) {
      this.currChatId = chatId
    },
  },
})
