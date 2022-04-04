<template>
  <div>
    <!-- custom -->
    <div class="flex h-screen font-sans">
      <div class="hidden sm:block w-80 bg-gray-100 px-2 shadow-inner">
        <div class="relative mt-6 flex mb-4 px-3">
          <span class="absolute inset-y-0 pl-4 flex items-center"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-4 w-4 text-slate-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path></svg></span
          ><input
            type="text"
            placeholder="Search"
            class="py-2 pl-10 rounded-full text-xs w-full placeholder-gray-400"
          />
        </div>
        <div class="space-y-">
          <div class="flex items-center p-3 bg-slate-200 rounded">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              class="w-10 h-10 rounded-full"
            />
            <div class="flex flex-1 flex-col leading-tight pl-3">
              <div class="flex items-center justify-between">
                <span class="text-sm font-semibold text-slate-700"
                  >Lina Roy</span
                ><span class="text-xs text-slate-500">10:34 PM</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-xs text-gray-600"
                  >Then ok, lets meeting with client tomorrow</span
                ><span
                  class="px-2 inline-flex items-center justify-center w-4 h-4 rounded-full bg-blue-500 text-white text-xxs"
                  >1</span
                >
              </div>
            </div>
          </div>
          <div class="flex items-center p-3">
            <img
              src="https://images.unsplash.com/photo-1521676129211-b7a9e7592e65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              class="w-10 h-10 rounded-full"
            />
            <div class="flex flex-1 flex-col leading-tight pl-3">
              <div class="flex items-center justify-between">
                <span class="text-sm font-semibold text-slate-700"
                  >Branda Frost</span
                ><span class="text-xs text-slate-500">10:34 PM</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-xs text-gray-600">Nice to meet you!</span
                ><span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="text-blue-400 h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path></svg
                ></span>
              </div>
            </div>
          </div>
          <div class="flex items-center p-3">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              class="w-10 h-10 rounded-full"
            />
            <div class="flex flex-1 flex-col leading-tight pl-3">
              <div class="flex items-center justify-between">
                <span class="text-sm font-semibold text-slate-700"
                  >Paul Irish</span
                ><span class="text-xs text-slate-500">10:34 PM</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-xs text-gray-600"
                  >That's Great, then star working from tomorrow</span
                ><span
                  class="px-2 inline-flex items-center justify-center w-4 h-4 rounded-full bg-blue-500 text-white text-xxs"
                  >1</span
                >
              </div>
            </div>
          </div>
          <div class="flex items-center p-3">
            <img
              src="https://images.unsplash.com/photo-1544717304-a2db4a7b16ee?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              class="w-10 h-10 rounded-full"
            />
            <div class="flex flex-1 flex-col leading-tight pl-3">
              <span class="text-sm font-semibold text-slate-700"
                >Jessica Gilay</span
              ><span class="text-xs text-gray-600">That's sounds good</span>
            </div>
          </div>
          <div class="flex items-center p-3">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              class="w-10 h-10 rounded-full"
            />
            <div class="flex flex-1 flex-col leading-tight pl-3">
              <span class="text-sm font-semibold text-slae-700">Jhon Doe</span
              ><span class="text-xs text-gray-600"
                >Hi sir, the second comparent will be completeday today, that's
                ok?</span
              >
            </div>
          </div>
          <div class="flex items-center p-3">
            <img
              src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="My profile"
              class="w-10 h-10 rounded-full"
            />
            <div class="flex flex-1 flex-col leading-tight pl-3">
              <span class="text-sm font-semibold text-slate-700"
                >Eric Peterson</span
              ><span class="text-xs text-gray-600"
                >Firs of all meet with the compray CEO and BDA.</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 justify-between flex flex-col">
        <div
          class="flex flex-col sm:flex-row items-center justify-between py-0 border-b-2 border-gray-200"
        >
          <div class="flex items-center p-3">
            <img
              src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt=""
              class="w-4 sm:w-8 h-4 sm:h-8 rounded-full"
            />
            <div class="flex flex-col leading-tight">
              <div class="text-xl mt-1 ml-3 flex items-center">
                <span class="text-gray-700 mr-3">Anderson Vanhron</span>
              </div>
            </div>
          </div>
          <!-- <div class="flex items-center space-x-2">
            <button
              type="button"
              class="block inline-flex items-center justify-center rounded-full h-6 w-6 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg></button
            ><button
              type="button"
              class="block inline-flex items-center justify-center rounded-full h-6 w-6 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg></button
            ><button
              type="button"
              class="block inline-flex items-center justify-center rounded-full h-6 w-6 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                ></path>
              </svg>
            </button>
          </div> -->
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
                    >Any updates on this issue? I'm getting the same error when
                    trying to install devtools. Thanks</span
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
                    >I have no issue with any other packages installed with root
                    permission globally.</span
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
                    >yes, I have a mac. I never had issues with root permission
                    as well, but this helped me to solve the problem</span
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
                    >I also have this issue, Here is what I was doing until now:
                    #1076</span
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
        <div class="border-t-2 border-gray-200 px-4 py-2 mb-2 sm:mb-0">
          <div class="flex gap-2">
            <textarea
              ref="inputArea"
              data-v-44194fcf=""
              placeholder="Type message"
              class="py-0 pl-0 outline-0 focus:shadow-none flex-1 rounded overflow-hidden border-none"
              spellcheck="false"
              rows="1"
              @input="onInput"
            ></textarea>
            <div class="right-0 items-center inset-y-0 hidden sm:flex gap-2">
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
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  ></path>
                </svg></button
              ><button
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
                </svg></button
              ><button
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
                </svg></button
              ><button
                type="button"
                class="mt-auto block inline-flex items-center justify-center rounded-full h-6 w-6 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-3 w-4 transform rotate-90"
                >
                  <path
                    d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end custom -->
    <!-- <beautiful-chat
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
    /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

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

    // custom
    const inputArea = ref<any>(null)

    const onInput = () => {
      console.log(inputArea.value.scrollHeight)
      var el = this
      // setTimeout(function () {
      inputArea.value.style.cssText = 'height:auto; padding:0'
      // for box-sizing other than "content-box" use:
      // el.style.cssText = '-moz-box-sizing:content-box';
      inputArea.value.style.cssText =
        'height:' + inputArea.value.scrollHeight + 'px'
      // }, 0)
      // if (inputArea.value)
      //   inputArea.value.style.height = inputArea.value.scrollHeight + 'px'
    }

    onMounted(() => {
      // onInput()
    })

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
