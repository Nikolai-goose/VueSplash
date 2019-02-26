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
    modal: {
      visible: false,
      loading: false,
      currentPhoto: {},
    },
  },
  mutations: {
    updateCurrentPage(state) {
      state.currentPage += 1;
    },
    setImages(state, imgs) {
      state.imgs = state.imgs.concat(imgs); //eslint-disable-line
    },
    showModal(state) {
      state.modal.visible = true;
    },
    hideModal(state) {
      state.modal.visible = false;
    },
    setModalLoading(state) {
      state.modal.loading = !state.modal.loading;
    },
    setCurrentPhoto(state, photo) {
      state.modal.currentPhoto = photo;
    },
  },
  getters: {
    getImages: state => state.imgs,
    getCurrentPage: state => state.currentPage,
    getModalVisible: state => state.modal.visible,
    getModalLoading: state => state.modal.loading,
    getCurrentPhoto: state => state.modal.currentPhoto,
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
    openModal({ commit, dispatch }, photoId) {
      commit('showModal');
      dispatch('fetchSimgleImage', photoId);
    },
    fetchSimgleImage({ commit }, photoId) {
      commit('setModalLoading');
      axios.get(`/photos/${photoId}`)
        .then((res) => {
          commit('setModalLoading');
          commit('setCurrentPhoto', res.data);
        })
        .catch((err) => {
          commit('setModalLoading');
          console.log(err);
        });
    },
  },
});
