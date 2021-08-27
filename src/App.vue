<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  background: #EE817E url('./assets/bg.png');
  font: 400 16px Arial, Helvetica, sans-serif;
}

a {
  display: block;
  text-decoration: none;
  text-align: center;
  color: rgba($color: #000000, $alpha: .3);
  transition: color .2s;

  &:hover {
    color: #68C891;
  }
}
</style>
