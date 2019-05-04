<template>
  <v-container grid-list-md>
    <v-layout wrap>
      <v-flex xs12 md6>
        <v-text-field
          label="Search for a song"
          hint="ex. taylor swift trouble"
          prepend-icon="search"
          v-model="searchInput"
        >
        </v-text-field>
      </v-flex>

      <v-flex xs12>
        <v-btn
          color="primary"
          @click="search"
        >Search
        </v-btn>
        <v-btn
          color="error"
          @click="getLyricsLucky"
        >I'm Feeling lucky
        </v-btn>
      </v-flex>

      <v-flex xs12 v-if="searchResults">
        <SearchResultsList
          :results="searchResults"
          @search="getLyrics"
        >
        </SearchResultsList>
      </v-flex>

      <v-flex xs12>
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
import SearchResultsList from './SearchResultsList'
export default {
  components: {
    LyricCard,
    SearchResultsList
  },
  data () {
    return {
      apiUrl: 'https://vuetiful-lyrics-backend.herokuapp.com',
      searchInput: '',
      searchResults: null,
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
    async getLyrics (result) {
      this.loading = true
      this.searchResults = null

      try {
        let response = await axios.post(`${this.apiUrl}/lyrics`, {url: result.url})
        this.result.lyrics = response.data.lyrics
        this.result.artist = result.primary_artist.name
        this.result.songName = result.title
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
        this.searchResults = response.data
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
