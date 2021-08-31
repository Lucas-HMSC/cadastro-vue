<template>
  <Wrapper>
    <RegisterForm />
  </Wrapper>
</template>

<script>
import Wrapper from '@/components/Wrapper.vue';
import RegisterForm from '@/components/RegisterForm.vue';

export default {
  name: 'Register',
  components: {
    Wrapper,
    RegisterForm
  }
}
</script>