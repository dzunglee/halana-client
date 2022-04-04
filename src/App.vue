<template>
  <el-config-provider :zIndex="9999">
    <DefaultLayout />
  </el-config-provider>
</template>

<script lang="ts">
import { computed, defineComponent, inject, watch, onMounted } from 'vue'
import { useStore } from 'vuex'
import { ElConfigProvider } from 'element-plus'
import DefaultLayout from './layouts/default-layout.vue'

export default defineComponent({
  components: {
    DefaultLayout,
    ElConfigProvider,
  },
  inheritAttrs: false,

  setup() {
    const $message = inject<IMessage>('$message')
    const store = useStore()
    const loading = computed(() => store.state.loading)
    const initialize = () => {
      store.commit('SET_LOADING', true)
      return Promise.resolve()
    }

    watch(loading, (nexVal) => {
      const elm = document.getElementById('global-loading')
      if (nexVal) elm?.classList.remove('hidden')
      else elm?.classList.add('hidden')
    })

    initialize()
      .then(() => store.dispatch('initialized', true))
      .catch((error: Error) => {
        $message?.error(
          `Couldn't initialize the system with error: ${error.message}`,
        )
      })
      .finally(() => store.commit('SET_LOADING', false))

    return { zIndex: 3000, size: 'small' }
  },
})
</script>
<style>
#global-loading {
  z-index: 120000;
}
</style>
