<template>
  <div class="h-screen flex overflow-hidden bg-white">
    <div class="flex-1 min-w-0 flex flex-col overflow-hidden">
      <main class="flex-1 flex overflow-hidden">
        <div class="flex-1 flex xl:overflow-hidden w-full">
          <section
            aria-labelledby="primary-heading"
            class="min-w-0 flex-1 h-full flex flex-col overflow-hidden lg:order-last"
          >
            <router-view v-slot="{ Component }">
              <component :is="Component" v-if="isAuthenticated" />
              <div class="p-3" v-if="!isAuthenticated && !loading">
                Unauthenticated
              </div>
            </router-view>
          </section>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { SET_AUTH } from 'modules/chat/store/types'
import { RootState } from 'store/index'
import { computed, defineComponent, inject, onBeforeMount } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Layout',
  components: {},

  setup() {
    const store = useStore<RootState>()
    const $message = inject<IMessage>('$message')
    const loading = computed(() => store.state.loading)
    const isAuthenticated = computed(
      () => store.getters['chat/isAuthenticated'],
    )
    onBeforeMount(() => {
      store
        .dispatch('chat/actGetMe')
        .catch((error: Error) => {
          $message?.error(`Unauthenticated: ${error?.message}`)
        })
        .finally(() => {
          store.commit('SET_LOADING', false)
        })
    })
    return {
      store,
      isAuthenticated,
      loading,
    }
  },
})
</script>

<style scoped>
main {
  height: calc(100vh - 74px);
}
</style>
