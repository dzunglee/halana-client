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
              <component :is="Component" />
            </router-view>
          </section>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { RootState } from 'store/index'
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Layout',
  components: {},

  setup() {
    const store = useStore<RootState>()
    const loading = computed(() => store.state.loading)
    const isAuthenticated = computed(
      () => store.getters['auth/isAuthenticated'],
    )
    const show2ndSidebar = computed(() => store.state.show2ndSidebar)
    const showHeader = computed(() => store.state.showHeader)
    const mobileMenuOpen = ref(false)

    return {
      store,
      mobileMenuOpen,
      showHeader,
      isAuthenticated,
      show2ndSidebar,
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
