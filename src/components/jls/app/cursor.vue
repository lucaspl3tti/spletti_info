<template>
  <teleport to="body">
    <div ref="cursor" class="jls-app-cursor jls-app-cursor--hidden" />
  </teleport>
</template>

<script setup lang="ts">
import { Dom } from '~/src/helper/dom.helper';
import { Formatting } from '~/src/helper/formatting.helper';
import { NativeEventEmitter } from '@/helper/event-emitter.helper';

const cursor = ref();
let emitter: InstanceType<typeof NativeEventEmitter>;

onMounted(() => {
  emitter = new NativeEventEmitter();

  registerEvents();
});

function registerEvents() {
  if (!cursor.value) {
    throw new Error('Cursor element not found');
  }

  emitter.subscribe('app-loaded', () => {
    Dom.removeClass(cursor.value, 'jls-app-cursor--hidden');
  });

  document.addEventListener('mousemove', (event: MouseEvent) => onMouseMove(event)); // eslint-disable-line max-len
  document.addEventListener('click', () => onMouseClick());
}

function onMouseMove(event: MouseEvent) {
  if (!event.pageY || !event.pageX) {
    throw new Error('Invalid mouse event');
  }

  Dom.setStyle(
    cursor.value,
    'top',
    Formatting.convertToUnit(event.pageY - 10, 'px')!,
  );

  Dom.setStyle(
    cursor.value,
    'left',
    Formatting.convertToUnit(event.pageX - 10, 'px')!,
  );
}

async function onMouseClick() {
  Dom.addClass(cursor.value, 'jls-app-cursor--expanded');
  await sleep(500);
  Dom.removeClass(cursor.value, 'jls-app-cursor--expanded');
}
</script>

<style lang="scss">
.jls-app-cursor {
  pointer-events: none;
  position: absolute;
  z-index: $z-above-all;
  @include size(20px);
  box-sizing: content-box;
  border: 1px solid $color-white;
  border-radius: 50%;
  transition-timing-function: ease-out;
  transition-duration: 200ms;
  animation: cursor-shrink .5s infinite alternate;

  &::after {
    content: '';
    position: absolute;
    top: -8px;
    left: -8px;
    @include size(20px);
    opacity: 0.5;
    box-sizing: content-box;
    border: 8px solid $color-gray-550;
    border-radius: 50%;
    animation: cursor-shrink-large .5s infinite alternate;
  }

  &--expanded {
    border: 1px solid $color-secondary;
    animation: cursor-expand .5s forwards;
  }

  &--hidden {
    display: none;
  }
}

@keyframes cursor-shrink {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(.7);
  }
}

@keyframes cursor-shrink-large {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(.4);
  }
}

@keyframes cursor-expand {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(3);
  }

  100% {
    opacity: 0;
    transform: scale(1);
  }
}
</style>
