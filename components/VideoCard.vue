<template>
  <div class="VideoCard">
    <div
      :if="video"
      class="Title">
      Video Card Title: {{ video }}
      <div>
        <code>{{ video }}</code>
      </div>
    </div>
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

<style lang="css">
  .VideoCard {
    border: 1px solid #efefef;
    border-radius: 4px;
    margin: 0.25em auto 1.25em;
    padding: 1.75rem 1rem;
  }
  .Title {
    color: #ccc;
    font-weight: 700;
  }
</style>
