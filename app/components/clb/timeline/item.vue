<template>
  <div class="clb-timeline-item">
    <div class="clb-timeline-item__content">
      <slot />
    </div>

    <div class="clb-timeline-item__divider">
      <div class="clb-timeline-item__divider__before"></div>
      <div class="clb-timeline-item__divider__dot"></div>
      <div class="clb-timeline-item__divider__after"></div>
    </div>

    <div class="clb-timeline-item__opposite">
      <slot name="opposite" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.clb-timeline-item {
  --clb-timeline-line-size-base: 100%;
  --clb-timeline-line-size-offset: 12px;
  --clb-timeline-line-thickness: 2px;
  --clb-timeline-line-inset: 0px;
  --clb-timeline-dot-size: 38px;
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: max-content 1fr;
  align-items: flex-start;
  row-gap: 24px;
  height: 100%;

  &:first-of-type {
    .clb-timeline-item__divider {
      &__before {
        display: none;
      }
    }
  }

  &:last-of-type {
    .clb-timeline-item__divider {
      &__after {
        display: none;
      }
    }
  }

  &__content,
  &__opposite {
    width: 100%;
    padding-block-start: 0;
  }

  &__content {
    grid-column: 2;
    justify-self: flex-start;
    padding-inline: 24px 0;
  }

  &__opposite {
    display: none;
  }

  &__divider {
    position: relative;
    display: flex;
    grid-column: 1;
    justify-content: center;
    height: 100%;

    &__before,
    &__after {
      position: absolute;
      width: var(--clb-timeline-line-thickness);
      background: $color-gray-600;
    }

    &__before {
      top: -#{spacing(5)};
      height: calc(
        var(--clb-timeline-line-size-offset) +
        (var(--clb-timeline-dot-size) / 2) -
        var(--clb-timeline-line-inset)
      );
    }

    &__after {
      top: #{spacing(3)};
      height: calc(
        var(--clb-timeline-line-size-base) -
        (var(--clb-timeline-dot-size) / 2) +
        var(--clb-timeline-line-size-offset) -
        var(--clb-timeline-line-inset)
      );
    }

    &__dot {
      z-index: 1;
      display: flex;
      flex-shrink: 0;
      justify-content: center;
      align-items: center;
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background-color: $color-gray-100;
    }
  }
}

@include desktop-up {
  .clb-timeline-item {
    grid-template-columns: 1fr min-content 1fr;

    &__content {
      grid-column: 3;
    }

    &__opposite {
      display: flex;
      flex-flow: column;
      grid-column: 1;
      justify-self: flex-end;
      align-items: flex-end;
      padding-inline: 0 24px;
    }

    &__divider {
      grid-column: 2;
    }
  }
}
</style>
