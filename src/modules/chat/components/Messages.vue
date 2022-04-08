<template>
  <div class="flex-1 justify-between flex flex-col border-l">
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
          </div>
        </div>
      </div>
      <div class="flex items-center space-x-2 pr-2">
        <!-- <button
              type="button"
              class="block inline-flex items-center justify-center rounded-full h-6 w-6 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-5 w-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              class="block inline-flex items-center justify-center rounded-full h-6 w-6 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-5 w-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              class="block inline-flex items-center justify-center rounded-full h-6 w-6 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-5 w-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                ></path>
              </svg>
            </button> -->
      </div>
    </div>
    <div
      ref="chatContainerRef"
      class="flex flex-1 flex-col space-y-4 p-3 overflow-x-hidden overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
    >
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
            <div v-for="(msg, i) in messageGroup" :key="i">
              <span
                class="px-4 py-2 rounded-lg inline-block"
                :class="{
                  'bg-gray-300 text-gray-600': msg.type !== senderType,
                  'bg-violet-600 text-white': msg.type === senderType,
                  'rounded-bl-none bg-gray-300 text-gray-600':
                    msg.type !== senderType && i === messageGroup.length - 1,
                  'rounded-br-none':
                    msg.type === senderType && i === messageGroup.length - 1,
                }"
              >
                {{ msg.content }}
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
      <div
        ref="typingRef"
        class="items-end justify-start transition-all duration-200"
        :class="{
          'flex opacity-1': isTyping,
          'hidden opacity-0': !isTyping,
        }"
      >
        <div
          class="flex flex-col space-y-2 text-xs max-w-xs mx-2 items-start order-2"
          data-v-80ebedca=""
        >
          <div data-v-80ebedca="">
            <span
              class="px-2 py-3 rounded-xl inline-block bg-gray-300 text-white rounded-bl-none"
              data-v-80ebedca=""
            >
              <div class="typing flex space-x-1">
                <span
                  class="inline-block animate-bounce w-2 h-2 bg-gray-600 rounded-full"
                ></span>
                <span
                  class="inline-block animate-bounce w-2 h-2 bg-gray-600 rounded-full animation-delay-150"
                ></span>
                <span
                  class="inline-block animate-bounce w-2 h-2 bg-gray-600 rounded-full animation-delay-300"
                ></span>
              </div>
            </span>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
          alt="My profile"
          class="w-6 h-6 rounded-full order-1"
          data-v-80ebedca=""
        />
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
          <!-- <button
                  type="button"
                  class="mt-auto block inline-flex items-center justify-center rounded-full h-6 w-6 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="h-6 w-6 text-gray-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                    ></path>
                  </svg>
                </button>
                <button
                  type="button"
                  class="mt-auto block inline-flex items-center justify-center rounded-full h-6 w-6 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="h-6 w-6 text-gray-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </button>M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z
                <button
                  type="button"
                  class="mt-auto block inline-flex items-center justify-center rounded-full h-6 w-6 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="h-6 w-6 text-gray-600"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </button> -->
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
import { useStore } from 'vuex'
import env from 'core/env'

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
  },
  setup() {
    const emitterClient = inject<any>('emitterClient')
    const eventHub = inject<any>('eventHub')
    const store = useStore()
    // ref
    const inputAreaRef = ref<any>(null)
    const chatContainerRef = ref<any>(null)
    const typingRef = ref<any>(null)
    // data
    const curConversation = computed<Conversation>(
      () => store.state.chat.curConversation,
    )
    const messages = computed<Message[]>(() => store.state.chat.messages)
    // const messages = ref<Message[]>([
    //   {
    //     content: 'Can be verified on any platform using docker',
    //     type: 'supplier',
    //     createdAt: '10:34 16/12/2021',
    //   },
    //   {
    //     content:
    //       'Your error message says permission denied, npm global installs must be given root privileges.',
    //     type: 'customer',
    //     createdAt: '10:34 16/12/2021',
    //   },
    //   {
    //     content: "Command was run with root privileges. I'm sure about that.",
    //     type: 'supplier',
    //     createdAt: '10:34 16/12/2021',
    //   },
    //   {
    //     content: "I've update the description so it's more obviously now",
    //     type: 'supplier',
    //     createdAt: '10:34 16/12/2021',
    //   },
    //   {
    //     content: 'FYI https://askubuntu.com/a/700266/510172',
    //     type: 'supplier',
    //     createdAt: '10:34 16/12/2021',
    //   },
    //   {
    //     content:
    //       "Check the line above (it ends with a # so, I'm running it as root )# npm install -g @vue/devtools",
    //     type: 'supplier',
    //     createdAt: '10:34 16/12/2021',
    //   },
    //   {
    //     content:
    //       "Any updates on this issue? I'm getting the same error when trying to install devtools. Thanks",
    //     type: 'customer',
    //     createdAt: '10:34 16/12/2021',
    //   },
    //   {
    //     content: 'Are you using sudo?',
    //     type: 'supplier',
    //     createdAt: '10:34 16/12/2021',
    //   },
    //   {
    //     content:
    //       "Thanks for your message David. I thought I'm alone with this issue. Please, 👍 the issue to support it :)",
    //     type: 'customer',
    //     createdAt: '10:34 16/12/2021',
    //   },
    // ])

    // settings
    const emitterKey = computed<string>(() => store.state.chat.emitterKey)
    const senderType = computed<string>(() => store.state.chat.senderType)
    const sidebarOpen = computed(() => store.getters['chat/isOpenSidebar'])
    const avatar = computed(
      () => `${env('VITE_PROFILE_IMAGE_ENDPOINT')}/${profile.value.avatar}`,
    )
    const dialogOpen = ref(true)
    const isDialog = ref(false)
    const inputMsg = ref('')
    const timeOut: any = ref(null)
    const isTyping = ref(false)
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
    const handleOnType = () => {
      isTyping.value = true
      setTimeout(() => scrollToBottom(), 100)
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
        emitterClient.publish({
          key: 'IqVlgbQ_pp9and5CJRmRwvgPa_mLB_4z',
          channel: `chat/typing/${curConversation.value._id}`,
          message: JSON.stringify({
            type: 'typing',
            body: senderType.value,
          }),
        })
      }
    }
    const scrollToBottom = () => {
      chatContainerRef.value.scrollTop = chatContainerRef.value.scrollHeight
    }

    const getMessages = (conversation: Conversation) => {
      store.commit('SET_LOADING', true)
      store
        .dispatch('chat/actGetMessages', {
          conversationId: conversation._id,
        })
        .then(() => store.commit('SET_LOADING', false))
    }

    watch(curConversation, (conversation: Conversation) => {
      console.log('fire')
      subscribe(`chat/conversation/customer/${profile.value.id}`)
      subscribe(`chat/message/${curConversation.value._id}`)
      subscribe(`chat/typing/${curConversation.value._id}`)
      getMessages(conversation)
    })
    onMounted(() => {
      scrollToBottom()
      eventHub?.on('onTyping', () => {
        handleOnType()
      })
      eventHub?.on('onMsgCome', () => {
        isTyping.value = false
      })
      // emitterClient.on('message', (msg: any) => {
      //   console.log(JSON.parse(msg.asString()))
      //   const res = JSON.parse(msg.asString())
      //   switch (res.messageType) {
      //     case 'newMessage':
      //       messages.value.push(res)
      //       setTimeout(() => scrollToBottom())
      //       break
      //     case 'typing':
      //       handleOnType()
      //       break
      //     case 'maskRead':
      //       break
      //     case 'newConversation':
      //       break
      //     case 'delConversation':
      //       break
      //   }
      // })
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
      typingRef,
      inputMsg,
      isTyping,
      profile,
      avatar,
      handleOnType,
      onKeyup,
      sendMessage,
    }
  },
})
</script>
<style scoped>
textarea:focus {
  box-shadow: none !important;
}
</style>
