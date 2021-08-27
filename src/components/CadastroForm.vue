<template>
  <section class="container">
    <h2>Cadastrar</h2>
    <div class="input-group">
      <label for='nome'>Nome Completo</label>
      <input 
        name='nome'   
        id='nome'
        type="text"
        v-model='usuario.nome'
        placeholder="Nome Sobrenome"
      >
    </div>
    <div class="input-group">
      <label for='telefone'>Telefone</label>
      <input 
        name='telefone'   
        id='telefone'
        type="text"
        v-model='telefoneMask'
        placeholder="(12) 9 1234-5678"
      >
    </div>
    <div class="input-group">
      <label for='github'>GitHub</label>
      <input 
        name='github'   
        id='github'
        type="text"
        v-model='usuario.github'
        placeholder="Username"
      >
    </div>
    <div class="input-group">
      <label for='email'>Email</label>
      <input 
        name='email'   
        id='email'
        type="email"
        v-model='usuario.email'
        placeholder="email@email.com"
      >
    </div>
    <div class="input-group">
      <label for='senha'>Senha</label>
      <input 
        name='senha'   
        id='senha'
        type="password"
        v-model='usuario.senha'
        placeholder="******"
      >
    </div>

    <button @click='cadastrar'>
      Cadastrar
    </button>
    
    <RouterLink to='/login'>
      Ja sou cadastrado!
    </RouterLink>
  </section>
</template>

<script>
import { api } from '@/services.js';

export default {
  name: 'CadastroForm',
  data() {
    return {
      usuario: {
        nome: '',
        telefone: '',
        github: '',
        email: '',
        senha: '',
      },
      telefoneMask: '',
    }
  },
  watch: {
    telefoneMask() {
      this.telefoneMask = this.telefoneMask.replace(/\D/g, '');
      if (this.telefoneMask.length === 11) {
        this.telefoneMask = this.mascaraTelefone(this.telefoneMask);
        this.usuario.telefone = this.telefoneMask;
      } else if (this.telefoneMask.length > 11) {
        this.telefoneMask = this.telefoneMask.slice(0, 11);
      }
    },
  },
  methods: {
    mascaraTelefone(value) {
      return value.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/g,'($1) $2 $3-$4');
    },
    validarCampos() {
      if (
        this.usuario.nome.length > 0 &&
        this.usuario.telefone.length > 0 &&
        this.usuario.github.length > 0 &&
        this.usuario.email.length > 0 &&
        this.usuario.senha.length > 0 
      ) return true;
      else return false;
    },
    atribuirId() {
      this.usuario.id = this.usuario.email;
    },
    loginAutomatico() {
      this.$router.push({name: 'LoginSuccess', params: {id: this.usuario.id}});
    },
    cadastrar() {
      const validacao = this.validarCampos();
      if (validacao) {
        this.atribuirId();
        api
          .post('/users', this.usuario)
          .then(() => {
            this.loginAutomatico();
          })
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

      &::placeholder {
        color: rgba($color: #000000, $alpha: .3);
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
