<template>
  <SectionForm>
    <TitleForm 
      text='Cadastrar' 
    />

    <InputLabel 
      label='Nome Completo'
      model='name'
      type='text'
      placeholder='Nome Sobrenome'
    />

    <InputLabel 
      label='Telefone'
      model='telephone'
      type='text'
      placeholder='(12) 9 1234-5678'
    />

    <InputLabel 
      label='GitHub'
      model='github'
      type='text'
      placeholder='Username'
    />

    <InputLabel 
      label='Email'
      model='email'
      type='text'
      placeholder='email@email.com'
    />

    <InputLabel 
      label='Senha'
      model='password'
      type='password'
      placeholder='******'
    />

    <ButtonLarge 
      value='Cadastrar'
      :handleClick='register'
    />
    
    <RouterLink to='/login'>
      Ja sou cadastrado!
    </RouterLink>
  </SectionForm>
</template>

<script>
import ButtonLarge from '@/components/ButtonLarge.vue';
import SectionForm from '@/components/SectionForm.vue';
import InputLabel from '@/components/InputLabel.vue';
import TitleForm from '@/components/TitleForm.vue';

export default {
  name: 'RegisterForm',
  components: {
    ButtonLarge,
    InputLabel,
    TitleForm,
    SectionForm
  },
  methods: {
    async register() {
      try {
        await this.$store.dispatch('createUser', this.$store.state.user);
        if (this.$store.state.user.id) this.$router.push({name: 'LoginSuccess', params: {id: this.$store.state.user.id}});
      } catch(e) {
        console.log(e);
      }
    },
  },
}
</script>

<style lang="scss" scoped> 

</style>