<template>
  <div
    class="flex opacity-1 flex-col px-0 bg-gray-100 shadow-inner transition-all duration-200 overflow-hidden"
    :class="{ 'w-0 opacity-0': !sidebarOpen, 'w-80': sidebarOpen }"
  >
    <div class="relative mt-2 flex mb-2 px-2">
      <span class="absolute inset-y-0 pl-4 flex items-center">
        <SearchSvgIcon /> </span
      ><input
        type="text"
        placeholder="Search"
        class="py-2 pl-10 rounded text-xs w-full placeholder-gray-400"
      />
    </div>
    <div class="space-y- overflow-auto">
      <div
        class="flex items-center p-3 cursor-pointer"
        :class="{
          'bg-slate-200 rounded': curConversation.id === item.id,
        }"
        v-for="(item, index) in conversations"
        :key="index"
        @click="handleSelectConversation(item)"
      >
        <img
          :src="item.image"
          :alt="item.name"
          class="w-10 h-10 rounded-full"
        />
        <div class="flex flex-1 flex-col leading-tight pl-3">
          <div class="flex items-center justify-between">
            <span class="text-sm font-semibold text-slate-700">{{
              item.name
            }}</span
            ><span class="text-xs text-slate-500">10:34 PM</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-xs text-gray-600">
              {{ item?.message?.content }}
            </span>
            <span
              v-if="item.unreadCount && item.unreadCount > 0"
              class="px-2 inline-flex items-center justify-center w-4 h-4 rounded-full bg-violet-600 text-white text-xxs"
            >
              {{ item.unreadCount }}
            </span>
            <span
              v-if="item.message?.seenAt && item.message?.type !== senderType"
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
  ref,
} from 'vue'
import {
  CloseChatSvgIcon,
  CloseSidebarSvgIcon,
  OpenSidebarSvgIcon,
  SearchSvgIcon,
  SendSvgIcon,
  TickSvgIcon,
  MessengerSvgIcon,
} from '../icons'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { SET_SIDEBAR } from '../store/types'
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
  },
  setup() {
    const emitterClient = inject<any>('emitterClient')
    const route = useRoute()
    const store = useStore()
    // data
    const conversations = computed<Conversation>(
      () => store.getters['chat/conversations'],
    )
    const curConversation = computed(
      () => store.getters['chat/curConversation'],
    )
    // settings
    const senderType = ref(env('VITE_SENDER_TYPE', ''))
    const sidebarOpen = computed(() => store.getters['chat/isOpenSidebar'])
    //
    const profile = computed<Profile>(() => store.getters['chat/user'])
    const subscribe = (key: string, channel: string) => {
      emitterClient.subscribe({
        key,
        channel,
      })
    }
    const getConversations = () => {
      store.dispatch('chat/actGetConversations')
      // get message by conversation id
    }

    const handleSelectConversation = (item: Conversation) => {
      console.log(item)
    }

    onMounted(() => {
      // subscribe
      subscribe(
        'IqVlgbQ_pp9and5CJRmRwvgPa_mLB_4z',
        `chat/conversation/customer/${profile.value.id}`,
      )
      subscribe(
        'IqVlgbQ_pp9and5CJRmRwvgPa_mLB_4z',
        `chat/message/${curConversation.value.id}`,
      )
      emitterClient.on('message', (msg: any) => {
        console.log(JSON.parse(msg.asString()))
      })
    })

    onBeforeMount(() => {
      const { sidebar } = route.query
      store.commit(`chat/${SET_SIDEBAR}`, !!sidebar)
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
textarea:focus {
  box-shadow: none !important;
}
</style>
