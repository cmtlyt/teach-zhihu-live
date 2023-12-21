export type TChunkCallback = (currResult: string, newChunk?: boolean) => void

export type TMessageItem = {
  role: string
  content: string
}

export type TWordMessage = {
  type: 'word'
  content: TMessageItem
  chunkCallback: TChunkCallback
}

export type TImageMessage = {
  type: 'image'
  prompt: string
  chunkCallback: TChunkCallback
}

export type TMessageConfig = TWordMessage | TImageMessage
