<template>
  <div>
    <div ref="mouseGlow" class="mouse-glow"></div>
    <!-- <div ref="screenBlur" class="screen-blur"></div> -->
  </div>
</template>

<script>
import Utilities from '~/helper/utilities.helper'

export default {
  data() {
    return {
      isActive: true,
    }
  },

  mounted() {
    this.mouseGlow = this.$refs.mouseGlow

    this.checkDevice()
    window.addEventListener('resize', () => this.checkDevice())
  },

  methods: {
    checkDevice() {
      const isTouchDevice = Utilities.isTouchDevice();
      const isMobileDevice = Utilities.checkScreenSizeDown('768px');

      if (!isTouchDevice && !isMobileDevice) {
        this.mouseGlow.classList.add('show')
        this.registerEvents()
      } else {
        this.mouseGlow.classList.remove('show')
      }
    },

    registerEvents() {
      document.body.addEventListener('pointermove', (event) => this.onPointerMove(event))
    },

    onPointerMove(event) {
      const { clientY, clientX} = event

      this.mouseGlow.animate({
        left: `${clientX}px`,
        top: `${clientY}px`,
      }, { duration: 3000, fill: 'forwards'})
    }
  },
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
