
<template lang="pug">
  transition(name="modal-fade")
    .modal-backdrop(
      @click="hide"
    )
      loader(
        v-if="this.loading"
      )
      .modal.hover-block(
        v-else
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      )
        .hover-block__item.hover-block__item--top-left
          button.button.button--transparent.button--close(
            aria-label="Close modal"
            @click="hideModal"
          )
        section.modal__body.hover-block__item.hover-block__item--center
          v-lazy-image.modal__image(
            :src="photo.urls.full"
            :src-placeholder="photo.urls.small"
          )
        .hover-block__item.hover-block__item--bottom-left
          user-link(:user="photo.user")
</template>

<script>
import UserLink from '@/components/UserLink.vue';
import Loader from '@/components/Loader.vue';
import VLazyImage from 'v-lazy-image';
import { mapMutations } from 'vuex';

export default {
  name: 'Modal',
  components: {
    UserLink,
    Loader,
    VLazyImage,
  },
  props: {
    photo: {
      type: Object,
      required: true,
    },
    loading: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    ...mapMutations([
      'hideModal',
    ]),
    hide(e) {
      if (e.target.className === 'modal-backdrop' || e.target.className === 'modal hover-block') this.hideModal();
    },
  },
};
</script>

<style lang="scss">
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    height: 100%;
    left: 0;
    top: 0;
    width: 100%;

    &__header,
    &__body,
    &__footer {
      display: flex;
    }

    &__header {
      border-bottom: 1px solid #eeeeee;
      justify-content: space-between;
    }

    &__body {
      background: #ffffff;
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      height: 100%;
      max-height: 80%;
      max-width: 80%;
      overflow-x: auto;
      width: auto;
    }

    &__image {
      height: 100%;
    }

    &__footer {
      border-top: 1px solid #eeeeee;
      justify-content: flex-end;
    }
  }

  @media (max-width: 1400px) {
    .modal {
      &__body {
        max-width: 90%;
      }
    }
  }

  @media (max-width: 768px) {
    .modal {
      &__body {
        max-width: 100%;
      }
    }
  }
</style>
