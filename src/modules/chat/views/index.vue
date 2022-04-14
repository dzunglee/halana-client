<template>
  <div class="rounded block h-full w-160">
    <div class="relative flex flex-col w-full h-full">
      <div
        class="relative flex shadow-[0_2px_4px_0_rgba(0,0,0,0.3)] p-2 pl-3 bg-violet-600 text-white"
      >
        <div
          class="flex-1 flex items-center"
          @click="dialogOpen = true"
          :class="{ 'cursor-pointer': !dialogOpen }"
        >
          <em class="inline-block">
            <MessengerSvgIcon />
          </em>
          Chat
        </div>
        <div class="flex items-center" v-if="dialogOpen">
          <button
            v-if="isDialog"
            type="button"
            class="inline-flex items-center justify-center h-6 w-6 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
            @click="dialogOpen = !dialogOpen"
          >
            <CloseChatSvgIcon />
          </button>
        </div>
      </div>
      <div class="flex flex-1 overflow-hidden">
        <Messages />
        <Conversations />
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
  MessengerSvgIcon,
} from '../icons'
import { Conversations, Messages } from '../components'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import {
  ADD_CONVERSATION,
  ADD_MESSAGE,
  READ_MESSAGE,
  SET_RECEIVER_ID,
  SET_SIDEBAR,
  TOGGLE_SIDEBAR,
} from '../store/types'

export default defineComponent({
  name: 'Chat',
  components: {
    CloseChatSvgIcon,
    CloseSidebarSvgIcon,
    OpenSidebarSvgIcon,
    MessengerSvgIcon,
    Conversations,
    Messages,
  },
  setup() {
    const emitterClient = inject<any>('emitterClient')
    const eventHub = inject<any>('eventHub')
    const route = useRoute()
    const store = useStore()
    // ref
    const inputAreaRef = ref<any>(null)
    const chatContainerRef = ref<any>(null)
    // data
    const curConversation = computed<Conversation>(
      () => store.state.chat.curConversation,
    )

    // settings
    const senderType = computed<string>(() => store.state.chat.senderType)
    const sidebarOpen = computed(() => store.getters['chat/isOpenSidebar'])
    const dialogOpen = ref<boolean>(true)
    const isDialog = ref(false)

    //
    const profile = computed<Profile>(() => store.getters['chat/user'])

    const onMessageFunc: {
      [key: string]: (data: any) => void
    } = {
      newMessage(msg: Message) {
        if (msg.conversationId === curConversation.value._id) {
          store.commit(`chat/${ADD_MESSAGE}`, msg)
        }
        eventHub?.emit('onMsgCome', msg)
      },
      typing(type: string) {
        if (type !== senderType.value) {
          eventHub?.emit('onTyping')
        }
      },
      newConversation(conversation: Conversation) {
        store.commit(`chat/${ADD_CONVERSATION}`, conversation)
      },
      maskRead(message: Message) {
        store.commit(`chat/${READ_MESSAGE}`, message)
      },
    }

    const toggleDialog = () => {
      store.commit(`chat/${TOGGLE_SIDEBAR}`)
    }

    onMounted(() => {
      onMessageFunc['newConversation']({
        sk: '20ea821accae337420cb66a755e46080',
        channelId: 813,
        customerId: 144,
        messages: [],
        requiredOrder: false,
        delFlg: false,
        listOrders: [],
        _id: '625641d57cd7ec66db65c021',
        createdAt: '2022-04-13T03:21:57.925Z',
        updatedAt: '2022-04-13T03:21:57.925Z',
        __v: 0,
      })
      emitterClient.on('message', (msg: any) => {
        const res = JSON.parse(msg.asString())
        onMessageFunc[res.type](res.body)
        console.log(JSON.parse(msg.asString()))
      })
      window.onmessage = function (e) {
        if (e.data == 'hello') {
          alert('It works!')
        }
      }
    })

    onBeforeMount(() => {
      const { sidebar } = route.query
      const { cId } = route.params
      const ids = cId.toString().split(':')
      if (ids.length === 2) {
        store.commit(`chat/${SET_RECEIVER_ID}`, parseInt(ids[1]))
      }
      store.commit(`chat/${SET_SIDEBAR}`, !!sidebar)
    })

    return {
      sidebarOpen,
      dialogOpen,
      isDialog,
      inputAreaRef,
      chatContainerRef,
      profile,
      toggleDialog,
    }
  },
})
</script>
<style scoped>
textarea:focus {
  box-shadow: none !important;
}
</style>
