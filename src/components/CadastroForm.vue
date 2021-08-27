<template>
  <section class="container">
    <h2>Cadastrar</h2>

    <!-- <InputLabel 
      label='Nome Completo'
      model='name'
      type='text'
      placeholder='Nome Sobrenome'
    /> -->

    <div class="input-group">
      <label for='nome'>Nome Completo</label>
      <input 
        name='nome'   
        id='nome'
        type="text"
        v-model='name'
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
        v-model='github'
        placeholder="Username"
      >
    </div>
    <div class="input-group">
      <label for='email'>Email</label>
      <input 
        name='email'   
        id='email'
        type="email"
        v-model='email'
        placeholder="email@email.com"
      >
    </div>
    <div class="input-group">
      <label for='senha'>Senha</label>
      <input 
        name='senha'   
        id='senha'
        type="password"
        v-model='password'
        placeholder="******"
      >
    </div>

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
import { mapFields } from '@/helpers.js';

// import InputLabel from '@/components/InputLabel.vue';
import ButtonLarge from '@/components/ButtonLarge.vue';

export default {
  name: 'CadastroForm',
  components: {
    ButtonLarge
  },
  data() {
    return {
      telefoneMask: '',
    }
  },
  computed: {
    ...mapFields({
      fields: ['name', 'telephone', 'github', 'email', 'password'],
      base: 'user',
      mutation: 'UPDATE_USER'
    }),
  },
  watch: {
    telefoneMask() {
      this.telefoneMask = this.telefoneMask.replace(/\D/g, '');
      if (this.telefoneMask.length === 11) {
        this.telefoneMask = this.maskTelephone(this.telefoneMask);
        this.telephone = this.telefoneMask;
      } else if (this.telefoneMask.length > 11) {
        this.telefoneMask = this.telefoneMask.slice(0, 11);
      }
    },
  },
  methods: {
    maskTelephone(value) {
      return value.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/g,'($1) $2 $3-$4');
    },
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
    background: #68C891;;
  }
}
</style>
