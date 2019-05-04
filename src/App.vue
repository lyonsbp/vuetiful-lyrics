<template>
  <v-app>
    <v-toolbar app color="primary" dark>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetiful Lyrics</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <Home/>
    </v-content>
  </v-app>
</template>

<script>
import Home from './components/Home'

export default {
  name: 'App',
  components: {
    Home
  },
  data () {
    return {
      //
    }
  }
}
</script>
