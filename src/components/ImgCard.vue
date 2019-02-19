<template lang="pug">
  li.img-card
    a(:href="img.links.html")
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
