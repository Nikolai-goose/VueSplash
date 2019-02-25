<template lang="pug">
  .app
    header.header
      h1 temporary header
    .section
      img-list(:images="getImages")
      loader
</template>

<script>
import ImgList from '@/components/ImgList.vue';
import Loader from '@/components/Loader.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'app',
  components: {
    ImgList,
    Loader,
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
          this.fetchImages(this.getCurrentPage);
          document.documentElement.scrollTop = currentScroll - 1; // fixes infinite load
        }
      };
    },
  },
  computed: {
    ...mapGetters([
      'getImages',
      'getCurrentPage',
    ]),
  },
  mounted() {
    this.scroll();
  },
};
</script>

<style lang="scss">
  .app {
    font-family: 'Montserrat'
  }

  .section {
    margin: 0 auto;
    max-width: 1200px;
    width: 80%;
  }
</style>
