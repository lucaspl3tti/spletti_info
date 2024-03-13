<template>
  <div>
    <div ref="mouseGlow" class="mouse-glow"></div>
    <!-- <div ref="screenBlur" class="screen-blur"></div> -->
  </div>
</template>

<script setup>
import Utilities from '~/helper/utilities.helper';

const mouseGlow = ref('');
const isActive = ref(true);

onMounted(() => {
  checkDevice();
  window.addEventListener('resize', () => checkDevice());
});

function checkDevice() {
  const isTouchDevice = Utilities.isTouchDevice();
  const isMobileDevice = Utilities.checkScreenSizeDown('768px');

  if (!isTouchDevice && !isMobileDevice) {
    mouseGlow.value.classList.add('show');
    registerEvents();
  } else {
    mouseGlow.value.classList.remove('show');
  }
}

function registerEvents() {
  document.body.addEventListener('pointermove', (event) => {
    onPointerMove(event);
  });
}

function onPointerMove(event) {
  const { clientY, clientX } = event;

  mouseGlow.value.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 3000, fill: 'forwards' },
  );
}
</script>

<style lang="scss">
.mouse-glow {
  display: none;
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: -1;
  translate: -50% -50%;
  height: 200px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background: $gradient-mouse-glow;
  filter: blur(80px);
  // animation: rotateMouseGlow 20s infinite;

  &.show {
    display: block;
  }
}

.screen-blur {
  display: none;
  position: absolute;
  z-index: 2;
  height: 100%;
  width: 100%;
  backdrop-filter: blur(200px);

  &.show {
    display: block;
  }
}

@keyframes rotateMouseGlow {
  from {
    rotate: 0deg;
  }

  50% {
    scale: 1;
  }

  to {
    rotate: 360deg;
  }
}
</style>
