<template>
  <h2>{{ text }}</h2>
</template>

<script>
export default {
  name: 'TitleForm',
  props: {
    text: String,
  }
}
</script>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 1rem;
}
</style>