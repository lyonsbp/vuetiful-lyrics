const axios = require('axios')
const baseURL = 'https://api.genius.com'

class GeniusApi {
  constructor (accessToken) {
    this.accessToken = accessToken
  }

  search (songName, artist) {
    const url = `${baseURL}/search`
    const data = {
      params: { 'q': `${songName} ${artist}` },
      headers: { Authorization: `Bearer ${this.accessToken}` }
    }
    return axios.get(url, data)
  }
}

module.exports = GeniusApi
