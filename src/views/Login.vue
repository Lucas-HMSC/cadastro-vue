<template>
  <Wrapper>
    <LoginForm />
  </Wrapper>
</template>

<script>
import Wrapper from '@/components/Wrapper.vue';
import LoginForm from '@/components/LoginForm.vue';

export default {
  name: 'Register',
  components: {
    Wrapper,
    LoginForm
  }
}
</script>