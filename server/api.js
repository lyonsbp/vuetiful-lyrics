const axios = require('axios')
const baseURL = 'https://api.genius.com'

class GeniusApi {
  constructor (accessToken) {
    this.accessToken = accessToken
  }

  search (query) {
    const url = `${baseURL}/search`
    const data = {
      params: { 'q': query },
      headers: { Authorization: `Bearer ${this.accessToken}` }
    }
    return axios.get(url, data)
  }

  getHTMLPage (url) {
    return axios.get(url)
  }
}

module.exports = GeniusApi
