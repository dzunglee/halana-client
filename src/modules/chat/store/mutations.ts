import { MutationTree } from 'vuex'
import {
  ADD_CONVERSATION,
  ADD_MESSAGE,
  ChatState,
  READ_MESSAGE,
  SET_AUTH,
  SET_CONVERSATION,
  SET_CURRENT_CONVERSATION,
  SET_MESSAGES,
  SET_RECEIVER_ID,
  SET_SENDER_ID,
  SET_SIDEBAR,
  TOGGLE_SIDEBAR,
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
    if (messages.length > 0) state.messages = [...messages, ...state.messages]
    else state.messages = messages
  },
  [SET_SENDER_ID](state: ChatState, id: number) {
    state.senderId = id
  },
  [SET_RECEIVER_ID](state: ChatState, id: number) {
    state.receiverId = id
  },
  [ADD_MESSAGE](state: ChatState, message: Message) {
    state.conversations?.forEach((conversation: Conversation) => {
      if (conversation._id === message.conversationId) {
        conversation.latestMessage = message
        if (
          conversation.unreadCount !== undefined &&
          message.type !== state.senderType
        )
          conversation.unreadCount += 1
      }
    })

    state.messages?.push(message)
  },
  [ADD_CONVERSATION](state: ChatState, conversation: Conversation) {
    state.conversations?.unshift(conversation)
  },
  [TOGGLE_SIDEBAR](state: ChatState) {
    state.isOpenSidebar = !state.isOpenSidebar
  },
  [READ_MESSAGE](state: ChatState, message: Message) {
    if (
      state?.curConversation &&
      message.conversationId === state.curConversation._id
    ) {
      state.messages.forEach((i) => {
        if (i._id === message._id) {
          i.status = 'READ'
        }
      })
    }
    state.conversations?.forEach((c) => {
      if (c._id === message.conversationId) {
        if (c.unreadCount && c.unreadCount > 0) c.unreadCount -= 1
        if (c.latestMessage && c.latestMessage._id === message._id) {
          c.latestMessage.status = 'READ'
        }
      }
    })
  },
}
