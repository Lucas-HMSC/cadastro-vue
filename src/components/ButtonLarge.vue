<template>
  <button @click='handleClick'> 
    {{ value }}
  </button>
</template>

<script>
export default {
  name: 'ButtonLarge',
  props: ['value', 'handleClick'],
}
</script>

<style lang='scss' scoped>
button {
  width: 100%;
  margin: 1rem 0;
  border: none;
  background: rgba($color: #000000, $alpha: .3);
  color: #FFF;
  padding: 0.8rem;
  border-radius: 0.5rem;
  text-transform: uppercase;
  font-weight: 600; 
  cursor: pointer;
  transition: filter .2s;

  &:hover {
    filter: brightness(0.9);
  }
}
</style>