<template>
  <div class="Thumbnail">
    <p>Thumbnail</p>
    <img
      :if="video"
      :src="video.thumbnail"
      alt="video.title">
    <p v-if="video.title">{{ video.title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    video: {
      type: Object,
      required: true
    }
  }
}
</script>
