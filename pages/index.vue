<template>
  <div>
    <Navbar />
    <section class="body">
      <div class="container">
        <div class="feed">
          <Thumbnail/>
          <VideoList />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Thumbnail from '~/components/Thumbnail.vue'
import VideoList from '~/components/VideoList.vue'

// API endpoint
// https://api.graph.cool/simple/v1/cjq8o1jtk25q00197axtf5sm9

export default {
  components: {
    Navbar,
    Thumbnail,
    VideoList
  },
  data: () => ({
    username: null
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
