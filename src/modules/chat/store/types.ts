export interface ChatState {
  openSidebar: boolean
  loading: boolean
  user?: Profile
  conversations?: Conversation[]
  messages?: Message[]
}
export const SET_AUTH = 'SET_AUTH'
export const SET_SIDEBAR = 'SET_SIDEBAR'
