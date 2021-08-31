<template>
  <div class="wrapper">
    <section class="sidebar-left">
      <h1>Learn to code by watching others</h1>
      <p>see how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
    </section>
    <section class="sidebar-right">
      <InputPromo />
      <slot></slot>
    </section>
  </div>
</template>

<script>
import InputPromo from '@/components/InputPromo.vue';

export default {
  name: 'Wrapper',
  components: {
    InputPromo
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100vh;
  max-width: 60rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  .sidebar-left {
    color: #eee;
    display: flex;
    flex-direction: column;
    max-width: 30rem;
    gap: 2rem;

    h1 {
      font-size: 2.5rem;
      max-width: 22rem;
    }
  }

  .sidebar-right {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 30rem;
  }
}

@media screen and (max-width: 61rem) {
  .wrapper {
    max-width: 50rem;
    gap: 1rem;
  }
}

@media screen and (max-width: 51rem) {
  .wrapper {
    grid-template-columns: auto;

    .sidebar-left {
      margin-top: 1rem;
      align-items: center;

      p {
        text-align: center;
      }
    }

    .sidebar-right {
      margin: 2rem 0;
    }
  }
}

@media screen and (max-width: 32rem) {
  .wrapper {
    padding: 1rem;
    overflow: scroll;
  }
}

@media screen and (max-width: 25rem) {
  .wrapper .sidebar-left h1 {
      font-size: 2rem;
      text-align: center;
  }
}
</style>