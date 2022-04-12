import { RootState } from 'store'
import { ActionTree } from 'vuex'
import {
  ChatState,
  SET_AUTH,
  SET_CONVERSATION,
  SET_MESSAGES,
  SET_SENDER_ID,
} from './types'
import { ChatService } from './services'
const getInfoService = new ChatService({ service: 'getInfoApi' })
const service = new ChatService()
export const actions: ActionTree<ChatState, RootState> = {
  actGetMe({ commit }) {
    return getInfoService.getMe().then((resp: any) => {
      commit(SET_AUTH, resp?.data?.items || resp.data)
      commit(SET_SENDER_ID, resp?.data?.items?.id || resp.data.id)
    })
  },
  actGetConversations({ commit }) {
    return service.getConversations().then((resp: any) => {
      commit(SET_CONVERSATION, resp?.results)
    })
  },
  actGetMessages({ commit }, params: { [key: string]: any }) {
    return service.getMessages(params).then((resp: PagingResponse) => {
      if (resp?.results.length > 0) commit(SET_MESSAGES, resp?.results)
      return resp.pageInfo
    })
  },
  actSendMessage({ commit }, params: { [key: string]: any }) {
    return service.sendMessage(params)
  },
  actCreateConversations({ commit }, params: { [key: string]: any }) {
    return service.createConversation(params)
  },
  actReadMessage({ commit }, params: { [key: string]: any }) {
    return service.readMessages(params)
  },
}
