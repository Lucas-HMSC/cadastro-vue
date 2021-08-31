<template>
  <section class="container">
    <h2>Cadastrar</h2>

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
  </section>
</template>

<script>
import InputLabel from '@/components/InputLabel.vue';
import ButtonLarge from '@/components/ButtonLarge.vue';

export default {
  name: 'RegisterForm',
  components: {
    ButtonLarge,
    InputLabel
  },
  methods: {
    async register() {
      try {
        await this.$store.dispatch('createUser', this.$store.state.user);
        this.$router.push({name: 'LoginSuccess', params: {id: this.$store.state.user.id}});
      } catch(e) {
        console.log(e);
      }
    },
  },
}
</script>

<style lang="scss" scoped> 
.container {
  background: #FFF;
  border-radius: 0.5rem;
  padding: 1rem;

  h2 {
    text-align: center;
    margin-bottom: 1rem;
  }

  button {
    background: #68C891;;
  }
}
</style>
