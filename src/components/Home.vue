<template>
  <v-container>
    <v-layout>
      <v-flex>
        <LyricCard
          :lyrics="lyrics"
          :artist="artist"
          :songName="songName"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
import LyricCard from './LyricCard'
export default {
  components: {
    LyricCard
  },
  data () {
    return {
      apiUrl: 'https://vuetiful-lyrics-backend.herokuapp.com',
      lyrics: null,
      artist: null,
      songName: null
    }
  },
  methods: {
    async getLyrics (artist, songName) {
      this.lyrics = await axios.get(`${this.apiUrl}/${artist}/${songName}`)
    }
  }
}
</script>

<style>

</style>
