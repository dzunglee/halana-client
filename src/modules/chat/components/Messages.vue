<template>
  <div
    class="justify-between flex flex-col border-l opacity-1 transition-all duration-200"
    :class="{ 'flex-none opacity-0 w-0': !sidebarOpen, 'flex-1': sidebarOpen }"
  >
    <div
      class="flex flex-col sm:flex-row items-center justify-between py-0 border-b-2 border-gray-200"
    >
      <div class="flex items-center p-2">
        <img
          src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
          alt=""
          class="w-4 sm:w-6 h-4 sm:h-6 rounded-full"
        />
        <div class="flex flex-col leading-tight">
          <div class="text-md mt-1 ml-3 flex items-center">
            <span class="text-gray-700 mr-3">Anderson Vanhron</span>
            <span v-if="isTyping"><Typing /></span>
          </div>
        </div>
      </div>
    </div>
    <div
      ref="chatContainerRef"
      class="flex flex-1 flex-col space-y-4 p-3 overflow-x-hidden overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
    >
      <div class="flex items-center justify-center text-sm" v-if="loadingMsg">
        <em class="inline-block w-7 h-7"> <LoadingSvgIcon /> </em>Loading
      </div>
      <div
        class="chat-message"
        v-for="(messageGroup, index) in messageGroups"
        :key="index"
      >
        <div
          class="flex items-end"
          :class="{
            'justify-end ': messageGroup[0].type === senderType,
          }"
        >
          <div
            class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start"
            :class="{
              'order-2': messageGroup[0].type !== senderType,
              'order-1 ': messageGroup[0].type === senderType,
            }"
          >
            <div
              class="flex"
              v-for="(msg, i) in messageGroup"
              :key="i"
              :class="{
                unRead: msg.status === 'UNREAD' && msg.type !== senderType,
              }"
              :id="msg._id"
            >
              <span
                v-if="msg.type === senderType"
                class="text-sm mx-1 flex items-center"
              >
                <TickSvgIcon v-if="msg.status === 'READ'" class="mr-1" />
                <span>{{ formatDate(msg.createdAt) }}</span>
              </span>
              <span
                class="px-4 py-2 rounded-lg inline-block transition duration-100"
                :class="{
                  'bg-gray-300 text-gray-600': msg.type !== senderType,
                  'bg-violet-600 text-white': msg.type === senderType,
                  'rounded-bl-none bg-gray-300 text-gray-600':
                    msg.type !== senderType && i === messageGroup.length - 1,
                  'rounded-br-none':
                    msg.type === senderType && i === messageGroup.length - 1,
                  'bg-sky-700/75 text-white':
                    msg.type !== senderType && msg.status === 'UNREAD',
                }"
              >
                {{ msg.content }} {{ msg.status }}
              </span>
              <span
                v-if="msg.type !== senderType"
                class="text-sm mx-1 flex items-center"
              >
                <span>{{ formatDate(msg.createdAt) }}</span>
              </span>
            </div>
          </div>
          <img
            :src="
              senderType === messageGroup[0].type
                ? avatar
                : 'https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144'
            "
            alt="My profile"
            class="w-6 h-6 rounded-full text-sm"
            :class="{
              'order-1': messageGroup[0].type !== senderType,
              'order-2 ': messageGroup[0].type === senderType,
            }"
          />
        </div>
      </div>
    </div>
    <div class="border-t-2 border-gray-200 px-4 py-[0.4rem] mb-2 sm:mb-0">
      <div class="flex gap-2">
        <textarea
          ref="inputAreaRef"
          data-v-44194fcf=""
          placeholder="Type message"
          class="text-sm py-0 pl-0 outline-0 focus:shadow-none flex-1 rounded overflow-hidden border-none"
          spellcheck="false"
          rows="1"
          v-model="inputMsg"
          @keyup="onKeyup"
          v-on:keyup.enter="sendMessage"
        ></textarea>
        <div class="right-0 items-center inset-y-0 hidden sm:flex gap-2">
          <button
            type="button"
            class="mt-auto block inline-flex items-center justify-center rounded-full h-6 w-6 transition duration-500 ease-in-out text-white bg-violet-600 hover:bg-blue-400 focus:outline-none"
            @click="sendMessage"
          >
            <SendSvgIcon />
          </button>
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
  watch,
  nextTick,
} from 'vue'
import {
  CloseChatSvgIcon,
  CloseSidebarSvgIcon,
  OpenSidebarSvgIcon,
  SearchSvgIcon,
  SendSvgIcon,
  TickSvgIcon,
  MessengerSvgIcon,
  LoadingSvgIcon,
  Typing,
} from '../icons'
import { useStore } from 'vuex'
import env from 'core/env'
import { PAGE_SIZE } from 'core/constants'
import { SET_MESSAGES } from '../store/types'
import dayjs from 'dayjs'

export default defineComponent({
  name: 'Chat',
  components: {
    CloseChatSvgIcon,
    CloseSidebarSvgIcon,
    OpenSidebarSvgIcon,
    SearchSvgIcon,
    SendSvgIcon,
    TickSvgIcon,
    MessengerSvgIcon,
    LoadingSvgIcon,
    Typing,
  },
  setup() {
    const emitterClient = inject<any>('emitterClient')
    const eventHub = inject<any>('eventHub')
    const store = useStore()
    // ref
    const inputAreaRef = ref<any>(null)
    const chatContainerRef = ref<any>(null)
    // data
    const curConversation = computed<Conversation>(
      () => store.state.chat.curConversation,
    )
    const messages = computed<Message[]>(() => store.state.chat.messages)

    // settings
    const emitterKey = computed<string>(() => store.state.chat.emitterKey)
    const senderType = computed<string>(() => store.state.chat.senderType)
    const sidebarOpen = computed(() => store.getters['chat/isOpenSidebar'])
    const avatar = computed(
      () => `${env('VITE_PROFILE_IMAGE_ENDPOINT')}/${profile.value.avatar}`,
    )
    const loadingMsg = ref(false)
    const dialogOpen = ref(true)
    const isDialog = ref(false)
    const inputMsg = ref('')
    const timeOut: any = ref(null)
    const isTyping = ref(false)
    const isReadyLoadMore = ref<boolean>(false)
    const cursor = ref('')
    const sendMessage = () => {
      if (inputMsg.value) {
        store
          .dispatch('chat/actSendMessage', {
            conversationId: curConversation.value._id,
            content: inputMsg.value,
          })
          .then((res) => {
            console.log('sent', res)
          })
        inputMsg.value = ''
        inputAreaRef.value.focus()
      }
    }

    const messageGroups = computed<Message[][]>(() => {
      const arr: Message[][] = []
      let temp: Message[] = []
      messages.value.forEach((item, index) => {
        if (temp.length > 0) {
          if (temp[temp.length - 1].type === item.type) {
            temp.push(item)
          } else {
            arr.push(temp)
            temp = []
            temp.push(item)
          }
        } else {
          temp.push(item)
        }
        if (index === messages.value.length - 1 && temp.length > 0) {
          arr.push(temp)
        }
      })
      return arr
    })
    //
    const profile = computed<Profile>(() => store.getters['chat/user'])
    const subscribe = (channel: string) => {
      emitterClient.subscribe({
        key: emitterKey.value,
        channel,
      })
    }
    const unSubscribe = (channel: string) => {
      emitterClient.unsubscribe({
        key: emitterKey.value,
        channel,
      })
    }
    const handleOnType = () => {
      isTyping.value = true
      if (timeOut.value) {
        clearTimeout(timeOut.value)
      }
      timeOut.value = setTimeout(() => {
        isTyping.value = false
      }, 5000)
    }
    const onKeyup = (e: any) => {
      if (e.keyCode !== 13) {
        inputAreaRef.value.style.cssText = 'height:auto; padding:0'
        inputAreaRef.value.style.cssText =
          'height:' + inputAreaRef.value.scrollHeight + 'px'
        if (curConversation.value) {
          emitterClient.publish({
            key: emitterKey.value,
            channel: `chat/typing/${curConversation.value._id}`,
            message: JSON.stringify({
              type: 'typing',
              body: senderType.value,
            }),
          })
        }
      }
    }
    const scrollToBottom = () => {
      nextTick(() => {
        chatContainerRef.value.scrollTop = chatContainerRef.value.scrollHeight
      })
    }
    const loadMore = () => {
      if (chatContainerRef.value.scrollTop === 0) {
        getMessages(curConversation.value).then(() => {
          if (cursor.value && chatContainerRef.value.scrollTop === 0) {
            getMessages(curConversation.value)
          }
        })
      }
    }
    const scrollToUnreadMessage = () => {
      setTimeout(
        () =>
          (chatContainerRef.value.scrollTop =
            chatContainerRef.value.scrollHeight),
        100,
      )
    }

    const getMessages = (conversation: Conversation) => {
      loadingMsg.value = true
      const payload: any = {
        conversationId: conversation._id,
        pageSize: PAGE_SIZE,
      }
      let oldScrollHeight = chatContainerRef.value.scrollHeight
      if (cursor.value) {
        payload.cursor = cursor.value
      }
      return store
        .dispatch('chat/actGetMessages', payload)
        .then((resp: PageInfo) => {
          const { hasNextPage, cursor: newCursor } = resp
          isReadyLoadMore.value = hasNextPage
          cursor.value = newCursor
          loadingMsg.value = false
          chatContainerRef.value.scrollTop =
            chatContainerRef.value.scrollHeight - oldScrollHeight
        })
    }

    const readMessage = (_id: string) => {
      store.dispatch('chat/actReadMessage', {
        conversationId: curConversation.value._id,
        _id,
      })
    }

    const readMessages = () => {
      const start = chatContainerRef.value.scrollTop + 50
      const end = start + chatContainerRef.value.clientHeight
      const unReadList = Array.prototype.slice.call(
        document.getElementsByClassName('unRead'),
      )
      unReadList.forEach((msg: any) => {
        if (!msg.classList.contains('read')) {
          const itemPosition = msg.offsetTop,
            itemId = msg.getAttribute('id')
          if (start <= itemPosition && end >= itemPosition) {
            msg.classList.add('read')
            readMessage(itemId)
          }
        }
      })
    }

    const formatDate = (date: Date) => {
      return dayjs(date).format('hh:mm')
    }

    watch(
      curConversation,
      (conversation: Conversation, oldConversation: Conversation) => {
        if (oldConversation) {
          store.commit(`chat/${SET_MESSAGES}`, [])
          cursor.value = ''
          isReadyLoadMore.value = false
          unSubscribe(`chat/typing/${oldConversation._id}`)
        }
        subscribe(`chat/typing/${conversation._id}`)
        getMessages(conversation).then(() => {
          scrollToBottom()
          if (chatContainerRef.value.scrollTop === 0) {
            loadMore()
          }
        })
      },
    )
    onMounted(() => {
      subscribe(`chat/conversation/customer/${profile.value.id}`)
      scrollToBottom()
      eventHub?.on('onTyping', () => {
        handleOnType()
      })
      eventHub?.on('onMsgCome', (msg: Message) => {
        if (msg.type !== senderType.value) {
          isTyping.value = false
        } else {
          scrollToBottom()
        }
      })
      chatContainerRef.value.addEventListener('scroll', () => {
        if (cursor.value) loadMore()
        readMessages()
      })
    })

    onBeforeMount(() => {})

    return {
      senderType,
      sidebarOpen,
      dialogOpen,
      isDialog,
      messageGroups,
      curConversation,
      inputAreaRef,
      chatContainerRef,
      inputMsg,
      isTyping,
      profile,
      avatar,
      loadingMsg,
      handleOnType,
      onKeyup,
      sendMessage,
      formatDate,
    }
  },
})
</script>
<style scoped>
textarea:focus {
  box-shadow: none !important;
}
</style>
