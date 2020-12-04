<template>
  <div>
    <Navbar />
    <p>Watch</p>
    <p>video ID: {{ id }}</p>
    <VideoPlayer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import VideoPlayer from '~/components/VideoPlayer.vue'

export default {
  async asyncData({ params }) {
    return {
      id: params.id
    }
  },
  components: {
    Navbar,
    VideoPlayer
  }
}
</script>
