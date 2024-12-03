<template>
  <jls-button
    :class="['jls-scroll-to-top', scrolled ? 'show' : '']"
    theme="secondary"
    icon-btn
    @click="onClickScrollToTop"
  >
    <jls-icon pack="bi" name="arrow-up" size="32" />
  </jls-button>
</template>

<script setup lang="ts">
const scrolled = ref(false);

onMounted(() => {
  showButton();
});

function onClickScrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showButton() {
  window.addEventListener('scroll', () => {
    scrolled.value = scrollY > 400;
  });
}
</script>

<style lang="scss" scoped>
.jls-scroll-to-top {
  @include absolute-position(
    fixed,
    $top: auto,
    $left: auto,
    $right: 20px,
    $bottom: 30px,
    $zIndex: $z-fixed - 10,
  );
  cursor: pointer;
  color: $color-white;
  transform: scale(1) translateY(200px);
  transition: transform .33s !important;
  will-change: transform;

  &.show {
    transform: scale(1) translateY(0);
  }

  &.v-btn--elevated:hover {
    box-shadow: none;
  }
}

@include tablet-up {
  .jls-scroll-to-top {
    bottom: 20px;

    &.show {
      &:hover {
        box-shadow: 0 0 0 24px transparent;
        background-color: $color-orange-500;
        transform: scale(1.3) translateY(0);
        animation: pulse 1s;
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
