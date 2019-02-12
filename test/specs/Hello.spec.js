import ActivityIndicator from 'src/ActivityIndicator.vue'
import { createVM } from '../helpers/utils.js'

describe('ActivityIndicator.vue', function () {
  it('should render', function () {
    const vm = createVM(this, `<ActivityIndicator />`, { components: { ActivityIndicator }})
    vm.$el.querySelector('.activity-indicator').exists
  })

  it('should render large', function () {
    const vm = createVM(this, `<ActivityIndicator size="large" />`, { components: { ActivityIndicator }})
    vm.$el.querySelector('.activity-indicator').exists
  })

  it('should render small', function () {
    const vm = createVM(this, `<ActivityIndicator size="small" />`, { components: { ActivityIndicator }})
    vm.$el.querySelector('.activity-indicator').exists
  })

  it('should render red', function () {
    const vm = createVM(this, `<ActivityIndicator color="red" />`, { components: { ActivityIndicator }})
    vm.$el.querySelector('.activity-indicator').exists
  })
})
