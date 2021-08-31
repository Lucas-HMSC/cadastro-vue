<template>
  <Wrapper>
    <LoginSuccess />
  </Wrapper>
</template>

<script>
import Wrapper from '@/components/Wrapper.vue';
import LoginSuccess from '@/components/LoginSuccess.vue';

export default {
  name: 'Register',
  components: {
    Wrapper,
    LoginSuccess
  }
}
</script>