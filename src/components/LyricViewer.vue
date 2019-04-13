<template>
  <iframe id="">
    <div id="rg_embed_link_378195" class="rg_embed_link" data-song-id="378195">
      Read
      <a href="https://genius.com/Sia-chandelier-lyrics">“Chandelier” by Sia</a>
      on Genius
    </div>
  </iframe>
</template>

<script>
export default {
  mounted () {
    let lyricScript = document.createElement('script')
    lyricScript.setAttribute('src', 'https://genius.com/songs/378195/embed.js')
    lyricScript.setAttribute('crossorigin', 'true')
    document.body.appendChild(lyricScript)
  }
}
</script>

<style>
</style>
