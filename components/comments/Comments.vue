<template>
  <div class="Comments">
    <CommentForm />
    <div class="CommentListBox">
      <h3>Comments</h3>
      <div @onSubmitComment="getComments">
        <p>New Comment</p>
      </div>
      <div>
        <Comment
          v-for="comment in comments"
          :key="comment.id"
          :comment="comment" />
      </div>
    </div>
  </div>
</template>

<script>
import { state } from '../../store'
import CommentForm from './CommentForm.vue'
import Comment from './Comment.vue'

export default {
  components: {
    CommentForm,
    Comment
  },
  props: {
    comment: {
      type: Object,
      required: false,
      default: () => ({
        id: 0
      })
    }
  },
  data: function() {
    return {
      comments: state().comments
    }
  },
  beforeMount: () => {
    console.log('before mount', state().comments)
  },
  methods: {
    getComments: function(e) {
      console.log('[Comments]', 'getComments')
      return state().comments
    }
  }
}
</script>

<style lang="css">
.CommentListBox{
  margin: 2.25em 0.25em;
  padding: 1.25em 0.25em;
}
</style>
