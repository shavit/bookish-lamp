<template>
  <div>
    <Navbar />
    <VideoPlayer :options="videoOptions" />
    <h1>{{ video.title }}</h1>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import VideoPlayer from '~/components/VideoPlayer.vue'
import { state } from '../../store'
const videoStore = state().videos

export default {
  async asyncData({ params }) {
    const video = videoStore.filter(x => x.id == params.id)[0]

    return {
      video: video,
      videoOptions: {
        autoplay: true,
        controls: true,
        fluid: true,
        sources: [
          {
            src: video.url,
            type: 'video/mp4'
          }
        ]
      }
    }
  },
  components: {
    Navbar,
    VideoPlayer
  }
}
</script>
