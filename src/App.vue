<template lang="pug">
  .app
    header.header
      h1 temporary header
    ul
      img-card(
        v-for="img in getImages"
        :key="img.id"
        v-bind:img="img")
</template>

<script>
import ImgCard from '@/components/ImgCard.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'app',
  components: {
    ImgCard,
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
