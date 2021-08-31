import Vue from 'vue'
import Vuex from 'vuex'

import { api } from '@/services.js';

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    user: {
      id: '',
      name: '',
      telephone: '',
      github: '',
      email: '',
      password: '',
    },
  },
  mutations: {
    UPDATE_USER(state, payload) {
      state.user = Object.assign(state.user, payload);
    },
  },
  actions: {
    updateUser(context, payload) {
      context.commit('UPDATE_USER', payload);
    },
    createUser(context, payload) {
      if ( payload.name.length > 0 &&
           payload.telephone.length > 0 &&
           payload.github.length > 0 &&
           payload.email.length > 0 &&
           payload.password.length > 0 
      ) {
        context.commit('UPDATE_USER', { id: payload.email });
        return api.post('/users', payload);
      }
    },
    async login(context, { email, password }) {
      if ( email.length > 0 && password.length > 0) {
        const objUser = await api.get(`/users/${email}`);
        if (password === objUser.data.password) {
          context.commit('UPDATE_USER', objUser.data);
        } else {
          console.log('Senha incorreta.')
        }
      }
    },
    logout(context) {
      context.commit('UPDATE_USER', { 
        id: '',
        name: '',
        telephone: '',
        github: '',
        email: '',
        password: '',
      });
    },
  }
})
