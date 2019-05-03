<template>
  <v-card>
    <v-card-title>
      <h2 class="title">{{ artist }} - {{ songName }}</h2>
    </v-card-title>
    <v-card-text>
      {{ lyrics }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    lyrics: String,
    artist: String,
    songName: String
  }
}
</script>

<style>
</style>
