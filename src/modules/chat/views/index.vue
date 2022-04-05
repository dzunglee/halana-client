<template>
  <div
    class="rounded block transition-all duration-200"
    :class="{
      'w-96': !sidebarOpen && isDialog,
      'w-[44rem]': sidebarOpen && isDialog,
      'fixed h-[30em] right-1 bottom-0 overflow-auto': isDialog,
      'h-full': !isDialog,
      'w-[6.5rem] h-10': !dialogOpen,
    }"
  >
    <div class="relative flex flex-col w-full h-full">
      <!-- custom -->
      <div
        class="relative flex shadow-[0_2px_4px_0_rgba(0,0,0,0.3)] p-2 pl-3 bg-violet-600 text-white"
      >
        <div
          class="flex-1 flex items-center"
          @click="dialogOpen = true"
          :class="{ 'cursor-pointer': !dialogOpen }"
        >
          <i class="inline-block">
            <MessengerSvgIcon />
          </i>
          Chat
        </div>
        <div class="flex items-center" v-if="dialogOpen">
          <button
            type="button"
            class="inline-flex items-center justify-center h-6 w-6 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
            @click="sidebarOpen = !sidebarOpen"
          >
            <CloseSidebarSvgIcon v-if="!sidebarOpen" />
            <OpenSidebarSvgIcon v-else />
          </button>
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
      <div class="flex flex-1 overflow-auto">
        <div
          class="flex flex-col w-80 bg-gray-100 px-2 shadow-inner transition-all duration-200 overflow-hidden"
          :class="{ 'w-0 px-0': !sidebarOpen }"
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
              @click="curConversation = item"
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
                  <span v-if="item.message?.seenAt && item.message?.userId">
                    <TickSvgIcon />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
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
            class="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
          >
            <div class="chat-message">
              <div class="flex items-end">
                <div
                  class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start"
                >
                  <div>
                    <span
                      class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600"
                      >Can be verified on any platform using docker</span
                    >
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                  alt="My profile"
                  class="w-6 h-6 rounded-full order-1"
                />
              </div>
            </div>
            <div class="chat-message">
              <div class="flex items-end justify-end">
                <div
                  class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end"
                >
                  <div>
                    <span
                      class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-violet-600 text-white"
                      >Your error message says permission denied, npm global
                      installs must be given root privileges.</span
                    >
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                  alt="My profile"
                  class="w-6 h-6 rounded-full order-2"
                />
              </div>
            </div>
            <div class="chat-message">
              <div class="flex items-end">
                <div
                  class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start"
                >
                  <div>
                    <span
                      class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600"
                      >Command was run with root privileges. I'm sure about
                      that.</span
                    >
                  </div>
                  <div>
                    <span
                      class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600"
                      >I've update the description so it's more obviously
                      now</span
                    >
                  </div>
                  <div>
                    <span
                      class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600"
                      >FYI https://askubuntu.com/a/700266/510172</span
                    >
                  </div>
                  <div>
                    <span
                      class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600"
                      >Check the line above (it ends with a # so, I'm running it
                      as root )
                      <pre># npm install -g @vue/devtools</pre>
                    </span>
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                  alt="My profile"
                  class="w-6 h-6 rounded-full order-1"
                />
              </div>
            </div>
            <div class="chat-message">
              <div class="flex items-end justify-end">
                <div
                  class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end"
                >
                  <div>
                    <span
                      class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-violet-600 text-white"
                      >Any updates on this issue? I'm getting the same error
                      when trying to install devtools. Thanks</span
                    >
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                  alt="My profile"
                  class="w-6 h-6 rounded-full order-2"
                />
              </div>
            </div>
            <div class="chat-message">
              <div class="flex items-end">
                <div
                  class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start"
                >
                  <div>
                    <span
                      class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600"
                      >Thanks for your message David. I thought I'm alone with
                      this issue. Please, 👍 the issue to support it :)</span
                    >
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                  alt="My profile"
                  class="w-6 h-6 rounded-full order-1"
                />
              </div>
            </div>
            <div class="chat-message">
              <div class="flex items-end justify-end">
                <div
                  class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end"
                >
                  <div>
                    <span
                      class="px-4 py-2 rounded-lg inline-block bg-violet-600 text-white"
                      >Are you using sudo?</span
                    >
                  </div>
                  <div>
                    <span
                      class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-violet-600 text-white"
                      >Run this command sudo chown -R `whoami`
                      /Users/cc/.npm-global/ then install the package globally
                      without using sudo</span
                    >
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                  alt="My profile"
                  class="w-6 h-6 rounded-full order-2"
                />
              </div>
            </div>
            <div class="chat-message">
              <div class="flex items-end">
                <div
                  class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start"
                >
                  <div>
                    <span
                      class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600"
                      >It seems like you are from Mac OS world. There is no
                      /Users/ folder on linux 😄</span
                    >
                  </div>
                  <div>
                    <span
                      class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600"
                      >I have no issue with any other packages installed with
                      root permission globally.</span
                    >
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                  alt="My profile"
                  class="w-6 h-6 rounded-full order-1"
                />
              </div>
            </div>
            <div class="chat-message">
              <div class="flex items-end justify-end">
                <div
                  class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end"
                >
                  <div>
                    <span
                      class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-violet-600 text-white"
                      >yes, I have a mac. I never had issues with root
                      permission as well, but this helped me to solve the
                      problem</span
                    >
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                  alt="My profile"
                  class="w-6 h-6 rounded-full order-2"
                />
              </div>
            </div>
            <div class="chat-message">
              <div class="flex items-end">
                <div
                  class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start"
                >
                  <div>
                    <span
                      class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600"
                      >I get the same error on Arch Linux (also with sudo)</span
                    >
                  </div>
                  <div>
                    <span
                      class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600"
                      >I also have this issue, Here is what I was doing until
                      now: #1076</span
                    >
                  </div>
                  <div>
                    <span
                      class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600"
                      >even i am facing</span
                    >
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                  alt="My profile"
                  class="w-6 h-6 rounded-full order-1"
                />
              </div>
            </div>
          </div>
          <div class="border-t-2 border-gray-200 px-4 py-[0.4rem] mb-2 sm:mb-0">
            <div class="flex gap-2">
              <textarea
                ref="inputArea"
                data-v-44194fcf=""
                placeholder="Type message"
                class="text-sm py-0 pl-0 outline-0 focus:shadow-none flex-1 rounded overflow-hidden border-none"
                spellcheck="false"
                rows="1"
                @input="onInput"
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
                >
                  <SendSvgIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end custom -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUpdated, ref } from 'vue'
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
    const route = useRoute()
    const sidebarOpen = ref(true)
    const dialogOpen = ref(true)
    const isDialog = ref(false)
    const conversations = ref<Conversation[]>([
      {
        id: 1,
        name: 'Dung',
        image: 'https://place-hold.it/300',
        unreadCount: 0,
        message: {
          content: 'Cái đậu xanh',
          createdAt: '10:34 16/12/2021',
          seenAt: '10:34 16/12/2021',
          userId: 1,
        },
      },
      {
        id: 2,
        name: 'Kha',
        image: 'https://place-hold.it/300',
        unreadCount: 2,
        message: {
          content: 'Trong đầm gì đẹp bằng sen',
          createdAt: '10:34 16/12/2021',
          seenAt: null,
        },
      },
      {
        id: 3,
        name: 'Tin',
        image: 'https://place-hold.it/300',
        unreadCount: 0,
        message: {
          content: 'Mấy chú bớt nóng',
          createdAt: '10:34 16/12/2021',
          seenAt: null,
          userId: 2,
        },
      },
      {
        id: 4,
        name: 'Lực',
        image: 'https://place-hold.it/300',
        unreadCount: 0,
        message: {
          content: 'Tất cả cút cút ra để a thể hiện',
          createdAt: '10:34 16/12/2021',
          seenAt: null,
          userId: 2,
        },
      },
    ])

    const curConversation = ref<Conversation>({})
    const sendMessage = (text: string) => {
      // send the message
    }
    const onMessageWasSent = (message: any) => {
      // called when the user sends a message
    }
    const openChat = () => {}
    const closeChat = () => {
      // called when the user clicks on the bottonm to close the chat
    }
    const handleScrollToTop = () => {
      // called when the user scrolls message list to top
      // leverage pagination for loading another page of messages
    }
    const handleOnType = () => {
      console.log('Emit typing event')
    }
    const editMessage = (message: any) => {}

    // custom
    const inputArea = ref<any>(null)

    const onInput = () => {
      console.log(inputArea.value.scrollHeight)
      inputArea.value.style.cssText = 'height:auto; padding:0'
      inputArea.value.style.cssText =
        'height:' + inputArea.value.scrollHeight + 'px'
    }

    onMounted(() => {
      curConversation.value = conversations.value[0]
      sidebarOpen.value = !!route.query.sidebar
      console.log(route.query)
    })

    onUpdated(() => {
      console.log('updated')
    })

    return {
      sidebarOpen,
      dialogOpen,
      isDialog,
      conversations,
      curConversation,
      inputArea,
      openChat,
      closeChat,
      handleScrollToTop,
      handleOnType,
      editMessage,
      onMessageWasSent,
      onInput,
    }
  },
})
</script>
<style scoped>
textarea:focus {
  box-shadow: none !important;
}
</style>
