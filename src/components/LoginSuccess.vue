<template>
  <section class="container">
    <h2>Bem vindo(a) {{ usuario.nome }}</h2>
    <div class="input-group">
      <label for='nome'>Nome Completo</label>
      <input 
        name='nome'   
        id='nome'
        type="text"
        :value='usuario.nome'
        disabled
      >
    </div>
    <div class="input-group">
      <label for='telefone'>Telefone</label>
      <input 
        name='telefone'   
        id='telefone'
        type="text"
        :value='usuario.telefone'
        disabled
      >
    </div>
    <div class="input-group">
      <label for='github'>GitHub</label>
      <input 
        name='github'   
        id='github'
        type="text"
        :value='usuario.github'
        disabled
      >
    </div>
    <div class="input-group">
      <label for='email'>Email</label>
      <input 
        name='email'   
        id='email'
        type="email"
        :value='usuario.email'
        disabled
      >
    </div>
    <button @click='sair'>
      Sair
    </button>
  </section>
</template>

<script>
import { api } from '@/services.js';

export default {
  name: 'LoginForm',
  data() {
    return {
      usuario: {},
    }
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  methods: {
    puxarUsuario() {
      api
        .get(`/users/${this.id}`)
        .then((response) => {
          this.usuario = response.data;
        })
    },
    sair() {
      this.$router.push({name: 'Login'});
    },
  },
  created() {
    this.puxarUsuario();
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
    background: #DA514D;
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
