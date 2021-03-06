<template>
  <div
    id="conversations"
    class="flex flex-col px-0 bg-gray-100 shadow-inner overflow-hidden w-80"
  >
    <!-- <div class="relative mt-2 flex mb-2 px-2">
      <span class="absolute inset-y-0 pl-4 flex items-center">
        <SearchSvgIcon /> </span
      ><input
        type="text"
        placeholder="Search"
        class="py-2 pl-10 rounded text-xs w-full placeholder-gray-400"
      />
    </div> -->
    <div class="space-y- overflow-auto">
      <div
        class="flex items-center p-3 cursor-pointer"
        :class="{
          'bg-slate-200 rounded':
            curConversation && curConversation._id === item._id,
        }"
        v-for="(item, index) in conversations"
        :key="index"
        @click="handleSelectConversation(item)"
      >
        <img
          v-if="item.profile?.img"
          :src="item.profile.img || ''"
          alt="A"
          class="w-10 h-10 rounded-full"
        />
        <em v-else class="w-10 h-10 p-1 rounded-full"
          ><DefaultUserSvgIcon
        /></em>
        <div class="flex flex-1 flex-col leading-tight pl-3">
          <div class="flex items-center justify-between">
            <span
              class="text-sm font-semibold text-slate-700 block w-48 truncate"
              >{{ item.profile?.name || 'Anonymous' }}</span
            >
            <span class="text-xs text-slate-500 block w-10 truncate">
              {{ item.latestMessage?.createdAt }}
            </span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-xs text-gray-600">
              {{ item.latestMessage?.content }}
            </span>
            <span
              v-if="item.unreadCount && item.unreadCount > 0"
              class="px-2 inline-flex items-center justify-center w-4 h-4 rounded-full bg-sky-600 text-white text-xxs"
            >
              {{ item.unreadCount }}
            </span>
            <span
              v-if="
                item.latestMessage?.status === 'READ' &&
                item.latestMessage?.type === senderType
              "
            >
              <TickSvgIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  inject,
  onBeforeMount,
  onMounted,
} from 'vue'
import {
  CloseChatSvgIcon,
  CloseSidebarSvgIcon,
  OpenSidebarSvgIcon,
  SearchSvgIcon,
  SendSvgIcon,
  TickSvgIcon,
  MessengerSvgIcon,
  DefaultUserSvgIcon,
} from '../icons'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { SET_CURRENT_CONVERSATION, SET_SIDEBAR } from '../store/types'
import env from 'core/env'

export default defineComponent({
  name: 'Conversation',
  components: {
    CloseChatSvgIcon,
    CloseSidebarSvgIcon,
    OpenSidebarSvgIcon,
    SearchSvgIcon,
    SendSvgIcon,
    TickSvgIcon,
    MessengerSvgIcon,
    DefaultUserSvgIcon,
  },
  setup() {
    const emitterClient = inject<any>('emitterClient')
    const $message = inject<IMessage>('$message')
    const store = useStore()
    const route = useRoute()
    // data
    const conversations = computed<Conversation[]>(
      () => store.state.chat.conversations,
    )
    const curConversation = computed<Conversation>(
      () => store.state.chat.curConversation,
    )
    const emitterKey = computed<string>(() => store.state.chat.emitterKey)
    const senderType = computed<string>(() => store.state.chat.senderType)
    const receiverId = computed<number>(() => store.state.chat.receiverId)
    const senderId = computed<number>(() => store.state.chat.senderId)
    // settings
    const sidebarOpen = computed(() => store.getters['chat/isOpenSidebar'])
    //
    const profile = computed<Profile>(() => store.getters['chat/user'])
    const subscribe = (channel: string) => {
      emitterClient.subscribe({
        key: emitterKey.value,
        channel,
      })
    }
    const getConversations = () => {
      store.commit('SET_LOADING', true)
      store
        .dispatch('chat/actGetConversations')
        .then(() => {
          const cur = conversations.value.find((item) => {
            if (senderType.value === 'customer') {
              return item.channelId === receiverId.value
            }
            return item.channelId === senderId.value
          })
          if (cur) {
            store.commit(`chat/${SET_CURRENT_CONVERSATION}`, cur)
          } else if (senderType.value === 'customer') {
            createConversation()
          }
        })
        .catch((error: Error) => {
          $message?.error(`Can not load conversations: ${error?.message}`)
        })
        .finally(() => {
          store.commit('SET_LOADING', false)
        })
    }
    const createConversation = () => {
      const { name, avatar } = route.query
      if (name && avatar) {
        store.commit('SET_LOADING', true)
        store
          .dispatch('chat/actCreateConversations', {
            channelId: receiverId.value,
            supplierProfile: {
              name,
              img: avatar,
            },
          })
          .then((resp: Conversation) => {
            store.commit(`chat/${SET_CURRENT_CONVERSATION}`, resp)
          })
          .catch((error: Error) => {
            $message?.error(`Can not create conversation: ${error?.message}`)
          })
          .finally(() => {
            store.commit('SET_LOADING', false)
          })
      }
    }
    const handleSelectConversation = (item: Conversation) => {
      window.top?.postMessage('openSidebar', '*')
      store.commit(`chat/${SET_CURRENT_CONVERSATION}`, item)
    }

    onMounted(() => {
      subscribe(`chat/message/`)
      subscribe(`chat/conversation/customer/${profile.value.id}`)
    })

    onBeforeMount(() => {
      getConversations()
    })

    return {
      senderType,
      sidebarOpen,
      conversations,
      curConversation,
      profile,
      handleSelectConversation,
    }
  },
})
</script>
<style scoped>
#conversations {
  flex: 0 0 20rem;
}
</style>
