<template lang="pug">
  .app
    header.header
      h1 temporary header
    .section
      img-list(:images="getImages")
      loader
    modal(v-if="getModalVisible")
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
      opacity: 0.7;
    }
  }
</style>
