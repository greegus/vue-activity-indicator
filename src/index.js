import ActivityIndicator from './ActivityIndicator.vue'

const plugin = {
  install (Vue) {
    Vue.component('activity-indicator', ActivityIndicator)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
