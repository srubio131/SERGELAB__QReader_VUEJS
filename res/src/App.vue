<template>
  <v-app>
    <v-container class="app">
      <div class="app__content">
        <router-view></router-view>
      </div>
      <div class="app__bottom-nav">
        <v-bottom-navigation class="d-flex align-center"
                             v-model="bottomNav"
                             absolute
                             grow
                             color="teal"
                             @change="onNavClick">
          <v-btn value="decode">
            <span>Decode</span>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn value="encode">
            <span>Encode</span>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
        </v-bottom-navigation>
      </div>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      bottomNav: 'decode'
    }
  },
  methods: {
    onNavClick() {
      console.log(this.bottomNav)
      this.$router.push(`/${this.bottomNav}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  &__content {
    height: 100%;
  }

  &__bottom-nav {
  }
}
</style>