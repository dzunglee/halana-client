<template>
  <Main>
    <beautiful-chat
      :participants="participants"
      :titleImageUrl="titleImageUrl"
      :onMessageWasSent="onMessageWasSent"
      :messageList="messageList"
      :newMessagesCount="newMessagesCount"
      :isOpen="isChatOpen"
      :close="closeChat"
      :open="openChat"
      :showEmoji="true"
      :showFile="true"
      :showEdition="true"
      :showDeletion="true"
      :deletionConfirmation="true"
      :showTypingIndicator="showTypingIndicator"
      :showLauncher="true"
      :showCloseButton="true"
      :colors="colors"
      :alwaysScrollToBottom="alwaysScrollToBottom"
      :disableUserListToggle="false"
      :messageStyling="messageStyling"
      @onType="handleOnType"
      @edit="editMessage"
    />
  </Main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: '',
  setup() {
    const participants = ref([
      {
        id: 'user1',
        name: 'Matteo',
        imageUrl: 'https://avatars3.githubusercontent.com/u/1915989?s=230&v=4',
      },
      {
        id: 'user2',
        name: 'Support',
        imageUrl: 'https://avatars3.githubusercontent.com/u/37018832?s=200&v=4',
      },
    ]) // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.
    const titleImageUrl = ref(
      'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
    )
    const messageList = ref<any>([
      { type: 'text', author: `me`, data: { text: `Say yes!` } },
      { type: 'text', author: `user1`, data: { text: `No.` } },
    ]) // the list of the messages to show, can be paginated and adjusted dynamically
    const newMessagesCount = ref<number>(0)
    const isChatOpen = ref(false) // to determine whether the chat window should be open or closed
    const showTypingIndicator = '' // when set to a value matching the participant.id it shows the typing indicator for the specific user
    const colors = {
      header: {
        bg: '#4e8cff',
        text: '#ffffff',
      },
      launcher: {
        bg: '#4e8cff',
      },
      messageList: {
        bg: '#ffffff',
      },
      sentMessage: {
        bg: '#4e8cff',
        text: '#ffffff',
      },
      receivedMessage: {
        bg: '#eaeaea',
        text: '#222222',
      },
      userInput: {
        bg: '#f4f7f9',
        text: '#565867',
      },
    } // specifies the color scheme for the component
    const alwaysScrollToBottom = false // when set to true always scrolls the chat to the bottom when new events are in (new message, user starts typing...)
    const messageStyling = true // enables *bold* /emph/ _underline_ and such (more info at github.com/mattezza/msgdown)

    const sendMessage = (text: string) => {
      if (text.length > 0) {
        newMessagesCount.value = isChatOpen
          ? newMessagesCount.value
          : newMessagesCount.value + 1
        onMessageWasSent({ author: 'support', type: 'text', data: { text } })
      }
    }
    const onMessageWasSent = (message: any) => {
      // called when the user sends a message
      messageList.value = [...messageList.value, message]
    }
    const openChat = () => {
      // called when the user clicks on the fab button to open the chat
      isChatOpen.value = true
      newMessagesCount.value = 0
    }
    const closeChat = () => {
      // called when the user clicks on the botton to close the chat
      isChatOpen.value = false
    }
    const handleScrollToTop = () => {
      // called when the user scrolls message list to top
      // leverage pagination for loading another page of messages
    }
    const handleOnType = () => {
      console.log('Emit typing event')
    }
    const editMessage = (message: any) => {
      const m = messageList.find((m: any) => m.id === message.id)
      m.isEdited = true
      m.data.text = message.data.text
    }

    return {
      participants,
      titleImageUrl,
      messageList,
      newMessagesCount,
      isChatOpen,
      showTypingIndicator,
      colors,
      alwaysScrollToBottom,
      messageStyling,
      openChat,
      closeChat,
      handleScrollToTop,
      handleOnType,
      editMessage,
      onMessageWasSent,
    }
  },
})
</script>
