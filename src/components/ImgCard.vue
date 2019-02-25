<template lang="pug">
  li.card
    .card__hover-block.hover-block(:href="img.links.html")
      user-link(:user="img.user")
      .button.button--white.button--transparent.hover-block__button(@click="openModal")
        span.fas.fa-expand
    img.card__image(:src="img.urls.small")
</template>

<script>
import UserLink from '@/components/UserLink.vue';
import { mapMutations } from 'vuex';

export default {
  name: 'ImgCard',
  components: {
    UserLink,
  },
  props: {
    img: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapMutations([
      'showModal',
    ]),
    openModal() {
      this.showModal(this.img.id);
    },
  },
};
</script>

<style lang="scss">
  .card {
    height: auto;
    position: relative;
    margin: 0 5px 8px;
    max-width: calc(33.33333% - 10px);
    width: 100%;

    &__hover-block {
      background-image: linear-gradient(to bottom,
      rgba(0,0,0,0.5) 7%,
      rgba(0,0,0,0) 20%,
      rgba(0,0,0,0) 80%,
      rgba(0,0,0,0.5) 93%);
      bottom: 4px;
      left: 0;
      position: absolute;
      top: 0;
      transition: opacity 0.2s ease-out;
      opacity: 0;
      width: 100%;
    }
    &:hover &__hover-block {
      opacity: 1;
    }

    &__image {
      height: auto;
      width: 100%;
    }
  }

  .hover-block {
    position: absolute;

    &__button {
      bottom: 12px;
      right: 12px;
      position: absolute
    }
  }
</style>
