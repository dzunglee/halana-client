import { RootState } from 'store'
import { ActionTree } from 'vuex'
import { ChatState, SET_AUTH, SET_CONVERSATION, SET_SENDER_ID } from './types'
import { ChatService } from './services'
const getInfoService = new ChatService({ service: 'getInfoApi' })
const service = new ChatService()
export const actions: ActionTree<ChatState, RootState> = {
  actGetMe({ commit }) {
    return getInfoService.getMe().then((resp: any) => {
      commit(SET_AUTH, resp?.data?.items)
      commit(SET_SENDER_ID, resp?.data?.items?.id)
    })
  },
  actGetConversations({ commit }) {
    return service.getConversations().then((resp: any) => {
      console.log(resp?.results)
      commit(SET_CONVERSATION, resp?.results)
    })
  },
  actGetMessages({ commit }, id: number) {
    return service.getMessages(id).then((resp: any) => {
      commit(SET_CONVERSATION, resp?.data?.items)
    })
  },
}
