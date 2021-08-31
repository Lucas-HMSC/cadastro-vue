<template>
  <div class="input-group">
    <label>{{ label }}</label>
    <input 
      v-if='value'
      :value='value'
      :type='type'
      disabled
    >
    <input 
      v-else
      :type='type'
      v-model='text'
      :placeholder='placeholder'
    >
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'InputLabel',
  props: {
    label: String, 
    model: String,
    type: String,
    placeholder: String,
    value: String,
  },
  data: () => ({
    text: '',
  }),
  computed: {
    
  },
  watch: {
    text() {
      if (this.model === 'name') this.updateUser({ name: this.text });
      if (this.model === 'telephone') this.maskTelephone();
      if (this.model === 'github') this.updateUser({ github: this.text });
      if (this.model === 'email') this.updateUser({ email: this.text });
      if (this.model === 'password') this.updateUser({ password: this.text });
    },
  },
  methods: {
    ...mapActions(['updateUser']),
    maskTelephone() {
      this.text = this.text.replace(/\D/g, '');
      if (this.text.length === 11) {
        this.text = this.text.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/g,'($1) $2 $3-$4');
        this.$store.dispatch('updateUser', { telephone: this.text });
      } else if (this.text.length > 11) {
        this.text = this.text.slice(0, 11);
      }
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