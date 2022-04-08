export interface ChatState {
  isOpenSidebar: boolean
  loading: boolean
  user?: Profile
  conversations?: Conversation[]
  curConversation?: Conversation
  messages?: Message[]
  emitterKey: string
}
export const SET_AUTH = 'SET_AUTH'
export const SET_SIDEBAR = 'SET_SIDEBAR'

export const SET_CONVERSATION = 'SET_CONVERSATION'
