import Vue from 'vue';
import Vuex from 'vuex';
import axios from './axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    imgs: [],
  },
  mutations: {
    fetch(state, imgs) {
      state.imgs = state.imgs.concat(imgs); //eslint-disable-line
    },
  },
  getters: {
    getImages: state => state.imgs,
  },
  actions: {
    fetch({ commit }) {
      axios.get('/photos/')
        .then((res) => {
          commit('fetch', res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
