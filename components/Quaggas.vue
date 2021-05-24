<template>
  <div>
    <StreamBarcodeReader
      @decode="onDecode"
      @loaded="onLoaded"
    />
  </div>
</template>

<script>
import { StreamBarcodeReader } from 'vue-barcode-reader'

export default {
  components: {
    StreamBarcodeReader: StreamBarcodeReader
  }
}

</script>
