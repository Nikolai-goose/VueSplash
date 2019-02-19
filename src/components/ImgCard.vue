<template lang="pug">
  li.img-card
    h3 {{ title }}
</template>

<script>
export default {
  name: 'ImgCard',
  props: [
    'title',
  ],
};
</script>
