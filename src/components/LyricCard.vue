<template>
  <v-card>
    <v-card-title>
      <h2 v-if="loading">{{ loadingText }}</h2>
      <h2 v-else-if="artist" class="title">
        {{ artist }} - {{ songName }}
      </h2>
      <h2 v-else>{{ initialText }}</h2>
    </v-card-title>

    <v-card-text>
      <v-progress-circular v-if="loading" indeterminate/>
      <div v-else v-html="lyrics"></div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    lyrics: String,
    artist: String,
    songName: String,
    loading: Boolean
  },
  data () {
    return {
      initialText: 'Search for a song to fetch the lyrics.',
      loadingText: 'Fetching lyrics...'
    }
  }
}
</script>

<style>
</style>
