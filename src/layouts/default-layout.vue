<template>
  <div class="h-screen flex overflow-hidden">
    <div class="flex-1 min-w-0 flex flex-col overflow-hidden">
      <main class="flex-1 flex overflow-hidden">
        <div class="flex-1 flex xl:overflow-hidden w-full">
          <section
            aria-labelledby="primary-heading"
            class="min-w-0 flex-1 h-full flex flex-col overflow-hidden lg:order-last"
          >
            <router-view v-slot="{ Component }">
              <component :is="Component" v-if="isAuthenticated" />
              <div class="p-3" v-else>Unauthenticated</div>
            </router-view>
          </section>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { RootState } from 'store/index'
import { computed, defineComponent, onBeforeMount } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Layout',
  components: {},

  setup() {
    const store = useStore<RootState>()
    const loading = computed(() => store.state.loading)
    const isAuthenticated = computed(
      () => store.getters['chat/isAuthenticated'],
    )
    onBeforeMount(() => {
      store.dispatch('chat/getMe')
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
