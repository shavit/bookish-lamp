<template>
  <div>
    <Navbar />
    <p>Watch</p>
    <p>video ID: {{ id }}</p>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  async asyncData({ params }) {
    return {
      id: params.id
    }
  },
  components: {
    Navbar
  }
}
</script>
