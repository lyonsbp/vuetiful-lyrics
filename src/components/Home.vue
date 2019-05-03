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
          :loading="loading"
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
      loading: false,
      result: {
        lyrics: '',
        artist: '',
        songName: ''
      }
    }
  },
  methods: {
    async getLyrics () {
      this.loading = true
      const artist = this.searchArtist
      const songName = this.searchSongName

      try {
        let response = await axios.get(`${this.apiUrl}/lyrics/${artist}/${songName}`)
        this.result.lyrics = response.data.lyrics
        const hit = response.data.hit
        this.result.songName = hit.title
        this.result.artist = hit.primary_artist.name
      } catch (e) {
        console.log(e)
      }
      this.loading = false
    }
  }
}
</script>

<style>

</style>
