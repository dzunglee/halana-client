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
        <Conversations />
        <Messages />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount, onMounted, ref } from 'vue'
import {
  CloseChatSvgIcon,
  CloseSidebarSvgIcon,
  OpenSidebarSvgIcon,
  MessengerSvgIcon,
} from '../icons'
import { Conversations, Messages } from '../components'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { SET_RECEIVER_ID, SET_SENDER_ID, SET_SIDEBAR } from '../store/types'

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
    const route = useRoute()
    const store = useStore()
    // ref
    const inputAreaRef = ref<any>(null)
    const chatContainerRef = ref<any>(null)
    const typingRef = ref<any>(null)
    // data

    // settings
    const sidebarOpen = computed(() => store.getters['chat/isOpenSidebar'])
    const dialogOpen = ref(true)
    const isDialog = ref(false)

    //
    const profile = computed<Profile>(() => store.getters['chat/user'])

    onMounted(() => {})

    onBeforeMount(() => {
      const { sidebar } = route.query
      const { cId } = route.params
      const ids = cId.toString().split(':')
      if (ids.length === 2) {
        store.commit(`chat/${SET_RECEIVER_ID}`, ids[1])
      }
      store.commit(`chat/${SET_SIDEBAR}`, !!sidebar)
    })

    return {
      sidebarOpen,
      dialogOpen,
      isDialog,
      inputAreaRef,
      chatContainerRef,
      typingRef,
      profile,
    }
  },
})
</script>
<style scoped>
textarea:focus {
  box-shadow: none !important;
}
</style>
