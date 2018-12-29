<template>
  <div class="Thumbnail">
    <img
      :if="video"
      :src="video.thumbnail"
      alt="video.title">
    <p v-if="video.title">{{ video.title }}</p>
  </div>
</template>

<script>
import { state } from '../store'

const featuredVideo = state().featuredVideo

export default {
  data: () => ({
    video: featuredVideo
  })
}
</script>
