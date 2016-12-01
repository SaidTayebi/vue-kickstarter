import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export default {
  state: {
    data: [],
    loading: false,
    success: false,
    error: ''
  },
  actions,
  getters,
  mutations
}
