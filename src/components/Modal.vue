
<template lang="pug">
  transition(name="modal-fade")
    .modal-backdrop(
      @click="hide"
    )
      .modal(
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      )
        header.modal-header
          slot(name="header")
            p modal
            button.button-close(
              aria-label="Close modal"
              @click="hideModal"
            )
              span x
        section.modal-body
          slot(name="body")
            p I'm the default body!
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Modal',
  methods: {
    ...mapMutations([
      'hideModal',
    ]),
    hide(e) {
      if (e.target.className === 'modal-backdrop') this.hideModal();
    },
  },
  computed: {
    ...mapGetters([
      'getCurrentPhotoId',
    ]),
  },
};
</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .button-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .button-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
</style>
