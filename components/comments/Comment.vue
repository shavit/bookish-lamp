<template>
  <div class="Comment">
    <h4>Comment</h4>
    <div class="">
      <p>{{ comment }}</p>
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
