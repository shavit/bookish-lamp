<template>
  <div>
    <NuxtLink to="/">Videos</NuxtLink>
    <NavbarSearch />
  </div>
</template>

<script>
import NavbarSearch from '~/components/navbar/NavbarSearch.vue'

export default {
  components: {
    NavbarSearch
  }
}
</script>

<style scoped>
div {
  background: #432425;
  display: flex;
  padding: 0.25rem 1rem;
}
</style>
