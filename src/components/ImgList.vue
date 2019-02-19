<template lang="pug">
  ul(v-masonry item-selector=".card").cards
    img-card(
      v-masonry-tile
      v-for="img in images"
      :key="img.id"
      :img="img")
</template>

<script>
import ImgCard from '@/components/ImgCard.vue';

export default {
  name: 'ImgList',
  components: {
    ImgCard,
  },
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
  .cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
