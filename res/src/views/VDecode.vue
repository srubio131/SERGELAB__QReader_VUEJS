<template>
<div>
  Decode
  <qrcode-stream @decode="onDecode"></qrcode-stream>
  Result: {{ result }}
</div>
</template>

<script>
import { QrcodeStream, QrcodeCapture } from 'vue-qrcode-reader'

export default {
  name: 'VDecode',
  components: {
    QrcodeStream,
    QrcodeCapture
  },
  data() {
    return {
      bottomNav: 'recent',
      result: ''
    }
  },
  methods: {
    onDecode(decodedString) {
      console.log(decodedString)
      this.result = decodedString
    }
  }
}
</script>
