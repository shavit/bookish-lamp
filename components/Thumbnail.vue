<template>
  <div class="thumbnail">
    <p>Thumbnail</p>
    <img
      :if="video"
      :src="video.thumbnail"
      alt="video.title">
    <p
      v-if="video.title"
      class="overlay-title">
      {{ video.title }}
    </p>
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

<style scoped>
.thumbnail {
  background: #000;
  display: inline-block;
  position: relative;
}
.thumbnail img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
}
.thumbnail .overlay-title {
  backgrounds: #000 linear-gradient(rgba(0, 0, 0, 0), #000);
  bottom: 0;
  display: block;
  color: #fff;
  opacity: 0;
  padding: 1em 0.75em;
  position: absolute;
  width: 100%;
}
.thumbnail:hover .overlay-title {
  opacity: 1;
  transition: opacity 0.15s ease-in-out;
}
</style>
