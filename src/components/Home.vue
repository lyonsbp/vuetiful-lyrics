<template>
  <v-container grid-list-md>
    <v-layout wrap>
      <v-flex xs12 md6>
        <v-text-field
          label="Artist"
          v-model="searchArtist"
        >
        </v-text-field>
      </v-flex>
      <v-flex xs12 md6>
        <v-text-field
          label="Song"
          v-model="searchSongName"
        >
        </v-text-field>
      </v-flex>
      <v-flex xs12>
        <v-btn
          color="primary"
          @click="getLyrics"
        >Search
        </v-btn>
      </v-flex>
      <v-flex>
        <LyricCard
          :lyrics="result.lyrics"
          :artist="result.artist"
          :songName="result.songName"
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
      searchArtist: '',
      searchSongName: '',
      result: {
        lyrics: '',
        artist: '',
        songName: ''
      }
    }
  },
  methods: {
    async getLyrics () {
      const artist = this.searchArtist
      const songName = this.searchSongName
      let response = await axios.get(`${this.apiUrl}/lyrics/${artist}/${songName}`)
      this.lyrics = response.lyrics
      console.log(response)
    }
  }
}
</script>

<style>

</style>
