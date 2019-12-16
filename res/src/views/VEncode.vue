<template>
  <div>
    <div>
      <v-text-field placeholder="Enter info to encrypt"
                    outlined
      ></v-text-field>
      <v-btn @click="onEncryptClick">
        Encrypt!
      </v-btn>
    </div>
    <div>
      Resultado
    </div>
  </div>
</template>

<script>
export default {
  name: 'VEncode',
  data() {
    return {
    }
  },
  methods: {
    onEncryptClick() {

    }
  }
}
</script>
