<template>
  <v-list class="elevation-2">
    <v-list-tile
      v-for="({result}, ind) in results"
      :key="ind"
      @click="$emit('search', result)"
    >
      <v-list-tile-content>
        <v-list-tile-title>{{ result.title }}</v-list-tile-title>
        <v-list-tile-sub-title>{{ result.primary_artist.name }}</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {
  props: {
    results: Array
  }
}
</script>

<style>

</style>
