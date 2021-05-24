import Vuex from 'vuex'
// import StreamBarcodeReader from 'vue-barcode-reader'
import VueQuagga from 'vue-quaggajs'

const createStore = () => {
  return new Vuex.Use(VueQuagga).Store({
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
