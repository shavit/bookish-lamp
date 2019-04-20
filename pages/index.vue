<template>
  <div>
    <Navbar />
    <section class="body">
      <div class="container">
        <div class="feed">
          <Thumbnail :video="video" />
          <VideoList />
        </div>
        <div class="sidebar">
          <Comments />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Thumbnail from '~/components/Thumbnail.vue'
import VideoList from '~/components/VideoList.vue'
import Comments from '~/components/comments/Comments.vue'

import { state } from '../store'

const featuredVideo = state().featuredVideo

// API endpoint
// https://api.graph.cool/simple/v1/cjq8o1jtk25q00197axtf5sm9

export default {
  components: {
    Navbar,
    Thumbnail,
    VideoList,
    Comments
  },
  data: () => ({
    username: null,
    video: featuredVideo
  })
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

body {
  align-items: flex-start;
  justify-content: center;
  min-height: 100vh;
}

.container {
  display: flex;
}
</style>
