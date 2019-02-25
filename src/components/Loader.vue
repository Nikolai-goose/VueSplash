<template lang="pug">
  .loader
    -var n = 1
    .cube-loader
      while n <= 4
        div(class=`cube loader-${n}`)
        -n++
</template>

<script>
export default {
  name: 'Loader',
};
</script>


<style lang="scss">
  .loader {
    align-items: center;
    display: flex;
    height: 170px;
    width: 100%;

    .cube-loader {
      width: 73px;
      height: 73px;
      margin: 0 auto;
      margin-top: 49px;
      position: relative;
      transform: rotateZ(45deg);

      & .cube {
        position: relative;
        transform: rotateZ(45deg);
        width: 50%;
        height: 50%;
        float: left;
        transform: scale(1.1);
        &:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 1.0);
          animation: cube-loader 2.76s infinite linear both;
          transform-origin: 100% 100%;
        }
      }
      & .loader-2 {
        transform: scale(1.1) rotateZ(90deg);
        &:before {
          animation-delay: 0.35s;
        }
      }
      & .loader-3 {
        transform: scale(1.1) rotateZ(270deg);
        &:before {
          animation-delay: 1.04s;
        }
      }
      & .loader-4 {
        transform: scale(1.1) rotateZ(180deg);
        &:before {
          animation-delay: 0.69s;
        }
      }
    }
  }

  @keyframes cube-loader {
    0%, 10% {
      transform: perspective(136px) rotateX(-180deg);
      opacity: 0;
    }
    25%, 75% {
      transform: perspective(136px) rotateX(0deg);
      opacity: 1;
    }
    90%, 100% {
      transform: perspective(136px) rotateY(180deg);
      opacity: 0;
    }
  }
</style>
