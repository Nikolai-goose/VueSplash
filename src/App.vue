<template lang="pug">
  .app
    header.header
      h1 temporary header
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

<style>
</style>
