import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      data: {}
    },
    mutations: {
      setData (state, data) {
        state.data = data
      }
    }
  })
}

export default createStore
