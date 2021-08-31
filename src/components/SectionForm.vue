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

@media screen and (max-width: 51rem) {
  .container {
    margin-bottom: 2rem;
  }
}
</style>