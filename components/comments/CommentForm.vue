<template>
  <div class="CommentForm">
    <p>Comment Form</p>
    <form @submit.prevent="onSubmit">
      <textarea
        :model="comment.body"
        :value="comment.body"
        @input="comment.body = $event.target.value" />
      <p :bind="comment">Preview</p>
      <p>{{ comment }}</p>
      <button
        class="font-bold bg-orange py-2 px-4 rounded-full"
        type="submit">
        Send
      </button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: false,
      default: () => ({
        id: 1,
        body: null
      })
    }
  },
  methods: {
    onSubmit: function() {
      let newComment = {
        id: 1,
        body: this.comment
      }
      this.$emit('onSubmitComment', newComment)
      this.comment.body = null
    }
  }
}
</script>

<style>
.CommentForm {
  margin: 0.25em;
  padding: 0.75em 0.25em;
}
</style>
