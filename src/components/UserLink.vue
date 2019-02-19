<template lang="pug">
  a.user-link(:url="user.links.html")
    img.user-link__image(:src="user.profile_image.small")
    .user-link__name {{user.name}}
</template>

<script>
export default {
  name: 'UserLink',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
  .user-link {
    align-items: center;
    bottom: 12px;
    color: #ffffff;
    cursor: pointer;
    display: flex;
    left: 12px;
    position: absolute;

    &__image {
      border-radius: 50%;
      margin-right: 6px;
    }

    &__name {
      font-size: 13px;
      text-shadow: 0 1px 8px rgba(0,0,0,.1);
      opacity: 0.8;
    }
  }
</style>
