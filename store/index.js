import Vuex from 'vuex'
// import StreamBarcodeReader from 'vue-barcode-reader'


// // register component 'v-quagga'
// Vuex.use(VueQuagga);

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
