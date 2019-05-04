<template>
  <v-container grid-list-md>
    <v-layout wrap>
      <v-flex xs12 md6>
        <v-text-field
          label="Search for a song"
          hint="ex. taylor swift trouble"
          v-model="searchInput"
        >
        </v-text-field>
      </v-flex>
      <v-flex xs12>
        <v-btn
          color="primary"
          @click="getLyricsLucky"
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
      apiUrl: 'https://vuetiful-lyrics.netlify.com',
      searchInput: '',
      loading: false,
      result: {
        lyrics: '',
        artist: '',
        songName: ''
      }
    }
  },
  methods: {
    async getLyricsLucky () {
      this.loading = true
      const query = this.searchInput

      try {
        let response = await axios.get(`${this.apiUrl}/search/lucky/${query}`)
        this.result.lyrics = response.data.lyrics
        const hit = response.data.hit
        this.result.songName = hit.title
        this.result.artist = hit.primary_artist.name
      } catch (e) {
        console.log(e)
      }
      this.loading = false
    },
    async search () {
      this.loading = true
      const query = this.searchInput

      try {
        let response = await axios.get(`${this.apiUrl}/search/${query}`)
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
