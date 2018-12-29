<template>
  <div class="VideoList">
    <p>{{ videos.length }} Videos</p>
    <VideoCard
      :for="video in videos"
      :key="video.id"
      :video="video" />
  </div>
</template>

<script>
import { state } from '../store'
import VideoCard from './VideoCard'

export default {
  components: {
    VideoCard
  },
  props: {
    video: {
      type: Object,
      required: false,
      default: () => ({})
    },
    i: {
      type: Number,
      required: false,
      default: () => {
        return 0
      }
    }
  },
  data: () => ({
    videos: state().videos
  })
}
</script>
