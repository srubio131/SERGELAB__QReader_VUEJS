<template>
  <div>Encode</div>
</template>

<script>
import { QrcodeCapture } from 'vue-qrcode-reader'

export default {
  name: 'VEncode',
  components: {
    QrcodeCapture
  },
  data() {
    return {
      bottomNav: 'recent'
    }
  },
  methods: {
    onDecode (decodedString) {

    }
  }
}
</script>
