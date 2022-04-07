import { GetterTree } from 'vuex'
import { RootState } from 'store'
import { ChatState } from './types'

export const getters: GetterTree<ChatState, RootState> = {
  user: (state: ChatState) => state.user,
  isAuthenticated: (state: ChatState) => !!state.user,
}
