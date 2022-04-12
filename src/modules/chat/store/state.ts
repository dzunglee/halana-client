import env from 'core/env'
import { ChatState } from './types'

export const state: ChatState = {
  isOpenSidebar: true,
  isDialog: !!env('VITE_IS_DIALOG', ''),
  loading: true,
  user: undefined,
  conversations: [],
  messages: [],
  emitterKey: env('VITE_EMITTER_KEY', ''),
  senderType: env('VITE_SENDER_TYPE', ''),
  receiverId: undefined,
  senderId: undefined,
}
