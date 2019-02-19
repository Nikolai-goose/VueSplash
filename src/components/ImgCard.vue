<template lang="pug">
  li.img-card
    a(:href="img.link")
      img(:url="img.urls.small")
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
