<template>
  <div class="video-card">
    <Thumbnail :video="video" />
    <div
      :if="video"
      class="Title">
      <h1>
        <NuxtLink :to="videoLink(video)">{{ video.title }}</NuxtLink>
      </h1>
    </div>
  </div>
</template>

<script>
import Thumbnail from '~/components/Thumbnail'

export default {
  components: {
    Thumbnail
  },
  props: {
    video: {
      type: Object,
      required: true
    }
  },
  methods: {
    videoLink(video) {
      return '/watch/' + video.id
    }
  }
}
</script>

<style lang="css" scoped>
  .video-card {
    border: 1px solid #efefef;
    border-radius: 4px;
    margin: 0.25em auto 1.25em;
    max-width: 580px;
    padding: 1.75rem 1rem;
  }
  .Title {
    color: #ccc;
    font-weight: 700;
  }
</style>
