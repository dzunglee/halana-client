export interface ChatState {
  isOpenSidebar: boolean
  loading: boolean
  user?: Profile
  conversations?: Conversation[]
  curConversation?: Conversation
  messages?: Message[]
  emitterKey: string
  senderType: string
  receiverId?: number
  senderId?: number
}
export const SET_AUTH = 'SET_AUTH'
export const SET_SIDEBAR = 'SET_SIDEBAR'

export const SET_CONVERSATION = 'SET_CONVERSATION'
export const SET_CURRENT_CONVERSATION = 'SET_CURRENT_CONVERSATION'
export const SET_MESSAGES = 'SET_MESSAGES'

export const SET_SENDER_ID = 'SET_SENDER_ID'
export const SET_RECEIVER_ID = 'SET_RECEIVER_ID'
export const ADD_MESSAGE = 'ADD_MESSAGE'
export const ADD_CONVERSATION = 'ADD_CONVERSATION'
