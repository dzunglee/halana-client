import { Module } from 'vuex'
import { state } from './state'
import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'
import { RootState } from 'store'
import { ChatState } from './types'

export const chat: Module<ChatState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
