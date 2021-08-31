<template>
  <button @click='handleClick' :style='styles'> 
    {{ value }}
  </button>
</template>

<script>
export default {
  name: 'ButtonLarge',
  props: {
    value: String,
    handleClick: Function,
    styles: String,
  },
}
</script>

<style lang='scss' scoped>
button {
  width: 100%;
  margin: 1rem 0;
  border: none;
  background: #68C891;
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