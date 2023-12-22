export type TChunkCallback = (currResult: string, newChunk?: boolean) => void

export type TMessageItem = {
  role: string
  content: string
}

type TWordMessage = {
  type: 'word'
  content: string
  chunkCallback: TChunkCallback
}

type TImageMessage = {
  type: 'image'
  prompt: string
  chunkCallback: TChunkCallback
}

export type TMessageConfig = TWordMessage | TImageMessage

export type THistoryMap = Record<string, TMessageItem[]>
