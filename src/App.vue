<template lang="pug">
  .app
    header.header
      h1 temporary header
    .section
      img-list(:images="getImages")
      loader
    modal(
      v-if="getModalVisible"
      :photo="getCurrentPhoto"
      :loading="getModalLoading"
    )
</template>

<script>
import ImgList from '@/components/ImgList.vue';
import Loader from '@/components/Loader.vue';
import Modal from '@/components/Modal.vue';
import { mapGetters, mapActions } from 'vuex';
import { debounce } from 'debounce';

export default {
  name: 'app',
  components: {
    ImgList,
    Loader,
    Modal,
  },
  created() {
    this.fetchImages(this.getCurrentPage);
  },
  methods: {
    ...mapActions([
      'fetchImages',
    ]),
    scroll() {
      window.onscroll = () => {
        const currentScroll = document.documentElement.scrollTop;
        const bottomOfWindow = currentScroll
        + window.innerHeight === document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          debounce(
            this.fetchImages(this.getCurrentPage), 100,
          );
        }
      };
    },
  },
  computed: {
    ...mapGetters([
      'getImages',
      'getCurrentPage',
      'getModalVisible',
      'getModalLoading',
      'getCurrentPhoto',
    ]),
  },
  mounted() {
    this.scroll();
  },
};
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
  }

  .app {
    font-family: 'Montserrat';
  }

  .section {
    margin: 0 auto;
    max-width: 1200px;
    width: 80%;
  }

  .button {
    background-color: #000000;
    border: none;
    border-radius: 4px;
    color: #ffffff;
    cursor: pointer;
    font-size: 16px;
    height: 32px;
    line-height: 16px;
    padding: 8px 9px;

    &--white {
      background-color: #ffffff;
      color: #000000;
    }
    &--transparent {
      background-color: transparent;
      color: #000000;
    }
    &--semitransparent {
      opacity: 0.7;
    }
    &--close {
      height: 24px;
      padding: 0;
      position: relative;
      width: 24px;

      &::before,
      &::after {
        background-color: #000000;
        border-radius: 3px;
        content: "";
        height: 3px;
        left: 50%;
        position: absolute;
        top: 50%;
        width: 16px;
      }
      &::before {
        transform: translate(-50%, -50%) rotate(45deg);
      }
      &::after {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }
  }
</style>
