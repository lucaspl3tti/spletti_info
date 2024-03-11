<template>
  <jls-button
    :class="['scroll-to-top', scrolled ? 'show' : '']"
    theme="secondary"
    rounded
    icon-btn
    @click="onClickScrollToTop"
  >
    <icon
      name="bi:arrow-up"
      size="32"
      color="currentColor"
      class="c-icon c-icon--arrow-up"
    />
  </jls-button>
</template>

<script setup lang="ts">
const scrolled = ref(false)

onMounted(() => {
  showButton()
})

function onClickScrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function showButton() {
  window.addEventListener('scroll', () => {
    scrolled.value = scrollY > 400
  })
}
</script>

<style lang="scss" scoped>
.scroll-to-top {
    position: fixed;
    right: 20px;
    bottom: 30px;
    z-index: $z-fixed - 10;
    cursor: pointer;
    color: $color-white;
    // box-shadow: 0 2px 15px rgba($color: #000000, $alpha: 0.4);
    transform: scale(1) translateY(200px);
    will-change: transform;
    transition: transform .33s !important;

    &.show {
        transform: scale(1) translateY(0);
    }

    &.v-btn--elevated:hover {
      box-shadow: none;
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
