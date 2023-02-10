<template>
  <div
    :class="['scroll-to-top', this.scrolled ? 'show' : '']"
    @click="onClickScrollToTop"
  >
    <Icon
      name="bi:arrow-up"
      size="32"
      color="currentColor"
      :class="['bi-arrow-up']"
    />
  </div>
</template>

<script>
export default {
  data(){
    return {
      scrolled: false,
    };
  },

  mounted() {
    this.showButton();
  },

  methods: {
    onClickScrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },

    showButton() {
      window.addEventListener('scroll', () => {
        this.scrolled = scrollY > 400 ? true : false;
      });
    },
  },
}
</script>

<style lang="scss" scoped>
.scroll-to-top {
    position: fixed;
    right: 20px;
    bottom: 30px;
    z-index: $z-fixed - 10;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: $color-orange-300;
    cursor: pointer;
    border-radius: 50%;
    color: $color-white;
    // box-shadow: 0 2px 15px rgba($color: #000000, $alpha: 0.4);
    transform: scale(1) translateY(200px);
    will-change: transform;
    transition: transform .33s;

    &.show {
        transform: scale(1) translateY(0);
    }
}

@include tablet-up {
    .scroll-to-top {
        bottom: 20px;

        &.show {
          &:hover {
            animation: pulse 1s;
            transform: scale(1.3) translateY(0);
            background-color: $color-orange-500;
            box-shadow: 0 0 0 24px transparent;
          }
        }
    }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 $color-orange-500;
  }
}
</style>
