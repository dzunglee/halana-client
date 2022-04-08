import { MutationTree } from 'vuex'
import {
  ChatState,
  SET_AUTH,
  SET_CONVERSATION,
  SET_CURRENT_CONVERSATION,
  SET_MESSAGES,
  SET_RECEIVER_ID,
  SET_SENDER_ID,
  SET_SIDEBAR,
} from './types'

export const mutations: MutationTree<ChatState> = {
  [SET_AUTH](state: ChatState, user: Profile) {
    state.user = user
  },
  [SET_SIDEBAR](state: ChatState, value: boolean) {
    state.isOpenSidebar = value
  },
  [SET_CONVERSATION](state: ChatState, conversations: Conversation[]) {
    state.conversations = conversations
  },
  [SET_CURRENT_CONVERSATION](state: ChatState, conversation: Conversation) {
    state.curConversation = conversation
  },
  [SET_MESSAGES](state: ChatState, messages: Message[]) {
    state.messages = messages
  },
  [SET_SENDER_ID](state: ChatState, id: number) {
    state.senderId = id
  },
  [SET_RECEIVER_ID](state: ChatState, id: number) {
    state.receiverId = id
  },
}
