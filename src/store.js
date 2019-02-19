import Vue from 'vue';
import Vuex from 'vuex';
import { VueMasonryPlugin } from 'vue-masonry';
import axios from './axios';

Vue.use(Vuex);
Vue.use(VueMasonryPlugin);

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
