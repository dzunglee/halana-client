<template>
  <div class="rounded block h-full w-160">
    <div class="relative flex flex-col w-full h-full">
      <div class="flex flex-1 overflow-hidden justify-end">
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
  onBeforeUnmount,
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
      emitterClient.on('message', (msg: any) => {
        const res = JSON.parse(msg.asString())
        onMessageFunc[res.type](res.body)
        console.log(JSON.parse(msg.asString()))
      })
      window.onmessage = function (e) {
        if (e.data == 'openSidebar') {
          store.commit(`chat/${SET_SIDEBAR}`, true)
        }
        if (e.data == 'closeSidebar') {
          store.commit(`chat/${SET_SIDEBAR}`, false)
        }
      }
    })

    onBeforeUnmount(() => {
      window.removeEventListener('message', () => {})
    })

    onBeforeMount(() => {
      const { sidebar } = route.query
      const { cId } = route.params
      try {
        const ids = window.atob(cId.toString()).split(':')
        if (ids.length === 2) {
          store.commit(`chat/${SET_RECEIVER_ID}`, parseInt(ids[1]))
        }
        store.commit(`chat/${SET_SIDEBAR}`, !!sidebar)
      } catch (e) {}
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
