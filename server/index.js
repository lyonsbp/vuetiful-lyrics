const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const JssSoup = require('jssoup').default
const app = express()
// const cache = require('express-redis-cache')()
const port = process.env.PORT || 3000
const GeniusApi = require('./api')

app.use(cors())
app.use(bodyParser.json())

const accessToken = 'sAbM6u-gGTeypAu7w-DPyuxz9952Ai40FOP1lYgQkhkZnydmlofDvCEpSA5eDc7i'
const api = new GeniusApi(accessToken)

app.get('/', (req, res) => {
  res.send('Yooo')
})

app.post('/lyrics', async (req, res) => {
  const url = req.body.url

  try {
    let html = await api.getHTMLPage(url)
    let soup = new JssSoup(html.data)
    let lyrics = soup.find('div', 'lyrics').getText('<br/>')

    let response = {
      lyrics
    }
    res.send(response)
  } catch (e) {
    console.log(e)
    res.send(e)
  }
})

app.get('/search/lucky/:query', async (req, res) => {
  const query = req.params.query
  let searchResults = null

  try {
    searchResults = await api.search(query)
    searchResults = searchResults.data.response
  } catch (e) {
    console.log(e)
    res.send(e)
  }
  let url = searchResults.hits[0].result.url

  try {
    let html = await api.getHTMLPage(url)
    let soup = new JssSoup(html.data)
    let lyrics = soup.find('div', 'lyrics').getText('<br/>')

    let response = {
      lyrics,
      hit: searchResults.hits[0].result
    }
    res.send(response)
  } catch (e) {
    console.log(e)
    res.send(e)
  }
})

app.get('/search/:query', async (req, res) => {
  const query = req.params.query
  let searchResults = null

  try {
    searchResults = await api.search(query)
    searchResults = searchResults.data.response
  } catch (e) {
    console.log(e)
    res.send(e)
  }
  res.send(searchResults.hits)
})

app.listen(port, () => console.log(`App listening on port: ${port}`))
