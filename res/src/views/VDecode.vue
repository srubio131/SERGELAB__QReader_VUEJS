<template>
  <div class="vdecode">
    <qrcode-stream @decode="onDecode"></qrcode-stream>
    <div v-if="result !== ''">
      <label>Results</label>
      <v-chip outlined>
        {{ result }}
      </v-chip>
    </div>
  </div>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader'

export default {
  name: 'VDecode',
  components: {
    QrcodeStream
  },
  data() {
    return {
      result: ''
    }
  },
  methods: {
    onDecode(decodedString) {
      this.result = decodedString
    }
  }
}
</script>

<style lang="scss" scoped>
.vdecode {

}
</style>