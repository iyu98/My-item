import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    currentCity: '深圳'
  },
  mutations: {
    userLogin (state, params) {
      sessionStorage.setItem('username', params.username)
      state.user = params.username
    },
    changeCity (state, params) {
      state.currentCity = params.city
    }
  },
  actions: {
  },
  modules: {
  }
})
