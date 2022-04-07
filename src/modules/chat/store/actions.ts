import { RootState } from 'store'
import { ActionTree } from 'vuex'
import { ChatState, SET_AUTH } from './types'
import { ChatService } from './services'
const service = new ChatService()
export const actions: ActionTree<ChatState, RootState> = {
  getMe({ commit }) {
    return service.getMe().then((resp: any) => {
      commit(SET_AUTH, resp)
      return resp
    })
  },
}
