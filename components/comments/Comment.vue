<template>
  <div class="Comment">
    <div class="">
      <p>{{ comment.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true
    }
  }
}
</script>
