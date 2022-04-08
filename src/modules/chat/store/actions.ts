import { RootState } from 'store'
import { ActionTree } from 'vuex'
import { ChatState, SET_AUTH, SET_CONVERSATION } from './types'
import { ChatService } from './services'
const getInfoService = new ChatService({ service: 'getInfoApi' })
const service = new ChatService({ service: 'getInfoApi' })
export const actions: ActionTree<ChatState, RootState> = {
  actGetMe({ commit }) {
    return getInfoService.getMe().then((resp: any) => {
      commit(SET_AUTH, resp?.data?.items)
    })
  },

  actGetConversations({ commit }) {
    return service.getConversations().then((resp: any) => {
      commit(SET_CONVERSATION, resp?.data?.items)
    })
  },
  actGetMessages({ commit }, id: number) {
    return service.getMessages(id).then((resp: any) => {
      commit(SET_CONVERSATION, resp?.data?.items)
    })
  },
}
