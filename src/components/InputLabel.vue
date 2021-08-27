<template>
  <div class="input-group">
    <label>{{ label }}</label>
    <input 
      :type='type'
      v-model='name'
      :placeholder='placeholder'
    >
  </div>
</template>

<script>
import { mapFields } from '@/helpers.js';

export default {
  name: 'InputLabel',
  props: {
    label: String, 
    model: String,
    type: String,
    placeholder: String,
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
  },
}
</script>

<style lang='scss' scoped>
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
</style>