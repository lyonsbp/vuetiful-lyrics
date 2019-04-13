const express = require('express')
const app = express()
const port = 3000
const GeniusApi = require('./api')

const accessToken = 'sAbM6u-gGTeypAu7w-DPyuxz9952Ai40FOP1lYgQkhkZnydmlofDvCEpSA5eDc7i'
const api = new GeniusApi(accessToken)

app.get('/', (req, res) => {
  res.send('Yooo')
})

app.get('/lyrics', async (req, res) => {
  const artist = 'Taylor Swift'
  const songName = 'Trouble'

  try {
    let response = await api.search(songName, artist)
    res.send(response.data)
  } catch (e) {
    console.log(e)
  }
})

app.get('/lyrics/:artist/:songName', async (req, res) => {
  const artist = req.params.artist
  const songName = req.params.songName
  let response = null

  try {
    response = await api.search(songName, artist)
    res.send(response.data)
  } catch (e) {
    console.log(e)
    res.send(e)
  }
})

app.listen(port, () => console.log(`App listening on port: ${port}`))
