<template lang="pug">
  .app
    header.header
      h1 temporary header
    .section
      img-list(:images="getImages")
</template>

<script>
import ImgList from '@/components/ImgList.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'app',
  components: {
    ImgList,
  },
  created() {
    this.fetch();
  },
  methods: {
    ...mapActions([
      'fetch',
    ]),
  },
  computed: {
    ...mapGetters([
      'getImages',
    ]),
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
