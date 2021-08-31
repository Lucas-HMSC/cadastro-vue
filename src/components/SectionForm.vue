<template>
  <section class="container">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'SectionForm',
}
</script>

<style scoped> 
.container {
  background: #FFF;
  border-radius: 0.5rem;
  padding: 1rem;
}
</style>