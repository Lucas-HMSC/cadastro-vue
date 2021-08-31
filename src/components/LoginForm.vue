<template>
  <section class="container">
    <h2>Entrar</h2>

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
  </section>
</template>

<script>
import { mapState } from 'vuex';

import ButtonLarge from '@/components/ButtonLarge.vue';
import InputLabel from '@/components/InputLabel.vue';

export default {
  name: 'LoginForm',
  data() {
    return {
      userInput: {
        email: '',
        password: '',
      }
    }
  },
  components: {
    ButtonLarge,
    InputLabel
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
.container {
  background: #FFF;
  border-radius: 0.5rem;
  padding: 1rem;

  h2 {
    text-align: center;
    margin-bottom: 1rem;
  }

  button {
    background: #68C891;
  }
}
</style>
