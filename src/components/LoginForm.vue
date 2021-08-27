<template>
  <section class="container">
    <h2>Entrar</h2>
    <div class="input-group">
      <label for='email'>Email</label>
      <input 
        name='email'   
        id='email'
        type="email"
        v-model='userInput.email'
      >
    </div>
    <div class="input-group">
      <label for='senha'>Senha</label>
      <input 
        name='senha'   
        id='senha'
        type="password"
        v-model='userInput.password'
      >
    </div>

    <button @click='validateUsuario'>
      Entrar
    </button>
    
    <RouterLink to='/'>
      Criar uma conta
    </RouterLink>
  </section>
</template>

<script>
import { mapState } from 'vuex';

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
  computed: {
    ...mapState(['user']),
  },
  methods: {
    async validateUsuario() {
      try {
        await this.$store.dispatch('login', this.userInput);
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

  .input-group {
    display: flex;
    flex-direction: column;
    margin-top: 0.8rem;

    label {
      flex: 1;
      color: rgba($color: #000000, $alpha: .3);
      font-size: 0.8rem;
    }

    input {
      flex: 1;
      padding: 0.5rem;
      border-radius: 0.5rem;
      border: 1px solid rgba($color: #000000, $alpha: .3);
      transition: border-color .2s;
      font: 400 16px Arial, Helvetica, sans-serif;

      &:focus {
        outline: none;
        border-color: #68C891;
      }
    }
  }

  button {
    width: 100%;
    margin: 1rem 0;
    border: none;
    background: #68C891;
    color: #FFF;
    padding: 0.8rem;
    border-radius: 0.5rem;
    text-transform: uppercase;
    font-weight: 600; 
    cursor: pointer;
    transition: filter .2s;

    &:hover {
      filter: brightness(0.9);
    }
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

}
</style>
