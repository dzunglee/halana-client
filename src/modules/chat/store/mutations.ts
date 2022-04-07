import { MutationTree } from 'vuex'
import { ChatState, SET_AUTH, SET_SIDEBAR } from './types'

export const mutations: MutationTree<ChatState> = {
  [SET_AUTH](state: ChatState, user: Profile) {
    state.user = user
  },
  [SET_SIDEBAR](state: ChatState, value: boolean) {
    state.openSidebar = value
  },
}
