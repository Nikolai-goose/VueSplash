<template lang="pug">
  li.image-card
    a.image-card__link(:href="img.links.html")
      img.image-card__image(:src="img.urls.small")
</template>

<script>
export default {
  name: 'ImgCard',
  props: {
    img: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
  .image-card {
    height: auto;
    margin: 0 5px 8px;
    width: 100%;
    max-width: calc(33.33333% - 10px);


    &__image {
      height: auto;
      width: 100%;
    }
  }
</style>
