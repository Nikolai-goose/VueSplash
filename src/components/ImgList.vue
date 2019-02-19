<template lang="pug">
  ul
    img-card(
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
