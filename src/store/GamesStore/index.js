import * as actions from './actions'
import mutations from './mutations'
import * as getters from './getters'

const GamesStore = {
  namespaced: true,
  state: {
    platform: ''
  },
  getters,
  mutations,
  actions
}

export default GamesStore
