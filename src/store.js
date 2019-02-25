import Vue from 'vue';
import Vuex from 'vuex';
import { VueMasonryPlugin } from 'vue-masonry';
import axios from './axios';

Vue.use(Vuex);
Vue.use(VueMasonryPlugin);

export default new Vuex.Store({
  state: {
    imgs: [],
    currentPage: 1,
  },
  mutations: {
    updateCurrentPage(state) {
      state.currentPage += 1;
    },
    setImages(state, imgs) {
      state.imgs = state.imgs.concat(imgs); //eslint-disable-line
    },
  },
  getters: {
    getImages: state => state.imgs,
    getCurrentPage: state => state.currentPage,
  },
  actions: {
    fetchImages({ commit }, currentPage) {
      axios.get(`/photos?page=${currentPage}`)
        .then((res) => {
          commit('updateCurrentPage');
          commit('setImages', res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
