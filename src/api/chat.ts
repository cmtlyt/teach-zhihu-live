import type { TChunkCallback, TMessageItem } from '@/types/chat'

export const sendWordMessage = (() => {
  const decoder = new TextDecoder()
  return async (messages: TMessageItem[], content: string, chunkCallback: TChunkCallback) => {
    return fetch('https://openai-test-openai-vmywofnavp.us-west-1.fcapp.run/chat', {
      method: 'POST',
      body: JSON.stringify({ messages, content: { role: 'user', content } }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.body!.getReader())
      .then<string>(async (reader) => {
        return new Promise((resolve) => {
          let result = ''
          async function chunkHandle() {
            return reader.read().then(({ done, value }) => {
              if (done) return resolve(result)
              const decodedValue = decoder.decode(value, {
                stream: true,
              })
              result += decodedValue.replace(/\n/g, '<br />')
              chunkCallback(result)
              chunkHandle()
            })
          }
          chunkHandle()
        })
      })
      .catch((error) => {
        console.error('发生错误：', error)
        return '我不理解...'
      })
  }
})()

export const sendImageMessage = (() => {
  const decoder = new TextDecoder()
  const dataPrefix = 'data:image/png;base64,'
  return async (prompt: string, chunkCallback: TChunkCallback) => {
    return fetch('https://openai-test-openai-vmywofnavp.us-west-1.fcapp.run/v2/image-chat', {
      method: 'POST',
      body: JSON.stringify({ prompt }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.body!.getReader())
      .then<string>((reader) => {
        return new Promise((resolve) => {
          let result = dataPrefix
          async function chunkHandle() {
            return reader.read().then(({ done, value }) => {
              if (done) return resolve(result)
              const decodedValue = decoder.decode(value, {
                stream: true,
              })
              if (decodedValue.includes(',')) {
                const [prevBase64, newBase64] = decodedValue.split(',')
                result += prevBase64
                chunkCallback(result, true)
                result = dataPrefix + newBase64
              } else result += decodedValue
              chunkCallback(result, false)
              chunkHandle()
            })
          }
          chunkHandle()
        })
      })
      .catch((error) => {
        console.error('发生错误：', error)
        return '我不理解...'
      })
  }
})()
