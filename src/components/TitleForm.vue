<template>
  <h2>
    {{ text }}<span v-if='name'>&nbsp;{{ name }}</span>
  </h2>
</template>

<script>
export default {
  name: 'TitleForm',
  props: {
    text: String,
    name: '',
  }
}
</script>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 1rem;
}
</style>