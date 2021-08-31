<template>
  <section class="container">
    <TitleForm 
      text='Bem vindo(a)'
      :name='user.name'
    />

    <InputLabel 
      label='Nome Completo'
      :value='user.name'
      type='text'
    />

    <InputLabel 
      label='Telefone'
      :value='user.telephone'
      type='text'
    />

    <InputLabel 
      label='GitHub'
      :value='user.github'
      type='text'
    />

    <InputLabel 
      label='Email'
      :value='user.email'
      type='text'
    />

    <ButtonLarge 
      value='Sair'
      styles='background: #DA514D'
      :handleClick='sair' 
    />
  </section>
</template>

<script>
import { mapState } from 'vuex';

import ButtonLarge from '@/components/ButtonLarge.vue';
import InputLabel from '@/components/InputLabel.vue';
import TitleForm from '@/components/TitleForm.vue';

export default {
  name: 'LoginForm',
  computed: {
    ...mapState(['user']),
  },
  components: {
    ButtonLarge,
    InputLabel,
    TitleForm
  },
  methods: {
    async sair() {
      await this.$store.dispatch('logout');
      this.$router.push({name: 'Login'});
    },
  },
}
</script>

<style lang="scss" scoped> 
.container {
  background: #FFF;
  border-radius: 0.5rem;
  padding: 1rem;
}
</style>
