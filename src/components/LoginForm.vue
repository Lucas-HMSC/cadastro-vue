<template>
  <SectionForm>
    <TitleForm 
      text='Entrar'
    />

    <InputLabel 
      label='Email'
      model='email'
      type='email'
      placeholder='email@email.com'
    />

    <InputLabel 
      label='Senha'
      model='password'
      type='password'
      placeholder='******'
    />

    <ButtonLarge 
      value='Entrar'
      :handleClick='validateUsuario' 
    />
    
    <RouterLink to='/'>
      Criar uma conta
    </RouterLink>
  </SectionForm>
</template>

<script>
import { mapState } from 'vuex';

import ButtonLarge from '@/components/ButtonLarge.vue';
import SectionForm from '@/components/SectionForm.vue';
import InputLabel from '@/components/InputLabel.vue';
import TitleForm from '@/components/TitleForm.vue';

export default {
  name: 'LoginForm',
  components: {
    ButtonLarge,
    InputLabel,
    TitleForm,
    SectionForm
  },
  computed: {
    ...mapState(['user']),
  },
  methods: {
    async validateUsuario() {
      try {
        await this.$store.dispatch('login', this.user);
        if (this.user.id) this.$router.push({name: 'LoginSuccess', params: { id: this.user.id }});
      } catch(e) {
        console.log(e);
      }
    },
  },
}
</script>

<style lang="scss" scoped> 

</style>
