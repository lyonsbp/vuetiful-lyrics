const JssSoup = require('jssoup').default
const GeniusApi = require('../server/api')

const accessToken = 'sAbM6u-gGTeypAu7w-DPyuxz9952Ai40FOP1lYgQkhkZnydmlofDvCEpSA5eDc7i'
const api = new GeniusApi(accessToken)

exports.handler = async (event, context, callback) => {
  console.log(event)
  const artist = event.queryStringParameters.artist
  const songName = event.queryStringParameters.songName
  let response = null

  try {
    response = await api.search(songName, artist)
    response = response.data.response
  } catch (e) {
    console.log(e)
    callback(null, {
      statusCode: 400,
      body: e
    })
  }
  let url = response.hits[0].result.url

  try {
    let html = await api.getHTMLPage(url)
    let soup = new JssSoup(html.data)
    let lyrics = soup.find('div', 'lyrics')

    callback(null, {
      statusCode: 200,
      body: lyrics.getText('\n')
    })
  } catch (e) {
    console.log(e)
    callback(null, {
      statusCode: 400,
      body: e
    })
  }
}
