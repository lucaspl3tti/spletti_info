<template>
  <div class="clb-form-captcha">
    <div class="clb-form-captcha__box">
      <div class="clb-form-captcha__image-wrapper">
        <img
          class="clb-form-captcha__image"
          :src="captchaImage"
          alt="CAPTCHA"
        />
      </div>

      <div class="clb-form-captcha__controls">
        <div class="clb-form-captcha__input">
          <clb-form-input
            :id="id"
            v-model="userInput"
            :label="label"
            :name="name"
            :theme="theme"
            is-not-floating
            required
            rounded
            @input="onInput"
          />
        </div>

        <div class="clb-form-captcha__refresh">
          <clb-icon
            pack="fa7-solid"
            name="repeat"
            color="currentColor"
            size="32"
            @click="resetCaptcha"
          />
        </div>
      </div>
    </div>

    <transition>
      <div
        v-if="isInvalid"
        class="clb-form-captcha__error"
      >
        {{ validationMessage }}
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import type { ClbFormCaptchaProperties } from '@/interfaces/components/form.interface';
import { colorVariants } from '@/consts/misc.consts';
import { Color } from '@helper/color.helper';
import { Dom } from '@helper/dom.helper';
import { Utilities } from '@helper/utilities.helper';

const properties = withDefaults(defineProps<ClbFormCaptchaProperties>(), {
  id: undefined,
  name: undefined,
  label: '',
  rounded: false,
  theme: 'light',
  validationMessage: undefined,
});

checkComponentPropertyValidity(properties.theme, 'theme', 'form-checkbox', true, colorVariants);

const captchaText = ref<string>('');
const captchaImage = ref<string>('');
const userInput = ref<string>('');
const isInvalid = ref<boolean>(false);

onMounted(() => {
  generateCaptcha();
});

watch(() => properties.theme, () => {
  resetCaptcha();
});

function generateCaptcha() {
  captchaText.value  = Utilities.generateRandomText(6);
  captchaImage.value = createCaptchaImage(captchaText.value);
}

function createCaptchaImage(text: string): string {
  const backgroundColor = properties.theme === 'dark'
    ? Color.getComputedStyleColor('--color-dark')
    : Color.getComputedStyleColor('--color-white');
  const textColor = properties.theme === 'dark'
    ? Color.getComputedStyleColor('--color-white')
    : Color.getComputedStyleColor('--color-dark');
  const lineColorSlightlyTransparent = (opacity: string|number) => {
    return properties.theme === 'dark'
      ? `rgba(51, 51, 51, ${opacity.toString()})`
      : `rgba(203, 202, 202, ${opacity.toString()})`;
  };

  const canvas = Dom.createElement('canvas', {
    width: 350,
    height: 80,
  }) as HTMLCanvasElement;

  const context = canvas.getContext('2d');

  if (!context) {
    console.error('Failed to generate captcha image.');
    return '';
  }

  context.fillStyle = backgroundColor;
  context.fillRect(0, 0, canvas.width, canvas.height);

  for (let index = 0; index < 50; index++) {
    context.strokeStyle = index % 2 === 0
      ? Color.getComputedStyleColor('--color-gray-700')
      : Color.getComputedStyleColor('--color-gray-500');
    context.beginPath();
    context.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
    context.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
    context.stroke();
  }

  const fontSize = 32;
  context.font = `bold ${fontSize}px Arial`;
  context.textBaseline = 'middle';
  context.textAlign = 'center';

  const paddingX = 30;
  const availableWidth = canvas.width - (paddingX * 2);
  const slotWidth = availableWidth / text.length;

  text.split('').forEach((character, index) => {
    context.save();

    const x = paddingX + (index * slotWidth) + (slotWidth / 2) + ((Math.random() - 0.5) * 10);
    const waveOffset = Math.sin(index * 1.5) * 8;
    const y = (canvas.height / 2) + waveOffset + ((Math.random() - 0.5) * 10);
    const angle = (Math.random() - 0.5) * 0.4;

    context.translate(x, y);
    context.rotate(angle);
    context.fillStyle = textColor;
    context.fillText(character, 0, 0);
    context.restore();
  });

  for (let index = 0; index < 7; index++) {
    context.strokeStyle = lineColorSlightlyTransparent(0.5);
    context.lineWidth = 1 + Math.random();
    context.beginPath();
    context.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
    context.bezierCurveTo(
      Math.random() * canvas.width, Math.random() * canvas.height,
      Math.random() * canvas.width, Math.random() * canvas.height,
      Math.random() * canvas.width, Math.random() * canvas.height,
    );
    context.stroke();
  }

  for (let index = 0; index < 30; index++) {
    context.fillStyle = lineColorSlightlyTransparent(0.6);
    context.beginPath();
    context.arc(
      Math.random() * canvas.width,
      Math.random() * canvas.height,
      Math.random() * 1.5,
      0,
      Math.PI * 2,
    );
    context.fill();
  }

  return canvas.toDataURL('image/png');
}

function verifyCaptcha(): boolean {
  if (userInput.value === captchaText.value) {
    isInvalid.value = false;
  } else {
    isInvalid.value = true;
    resetCaptcha();
  }

  return isInvalid.value;
}

function resetCaptcha(): void {
  generateCaptcha();
  userInput.value = '';
}

function onInput(): void {
  isInvalid.value = false;
}

defineExpose({
  verifyCaptcha,
  reset: resetCaptcha,
});
</script>

<style lang="scss" scoped>
.clb-form-captcha {
  position: relative;
  z-index: 1;
  margin-bottom: spacing(4);

  // &__box {
  //   margin-top: spacing(4);
  // }

  &__image {
    margin-bottom: spacing(2);
  }

  &__controls {
    @include flex(row nowrap, $align: center, $gap: spacing(2));
  }

  &__input {
    flex: 1 1 auto;
  }

  &__refresh {
    @include flex(row, $align: center, $justify: center);
    cursor: pointer;
    margin-bottom: spacing(4);
    transition: color $animation-speed ease;

    &:hover {
      color: color.adjust($color-white, $lightness: -10%);
    }
  }

  &__error {
    @include position(absolute, $top: 100%, $left: 0, $zIndex: 1);
    width: 100%;
    padding: spacing(1.5) spacing(4) 0;
    color: $color-error;
    font-size: map.get($clb-font-sizes, 'smaller', 'xs');
  }

  .v-enter-active,
  .v-leave-active {
    transition: translate $animation-speed ease, opacity $animation-speed ease;
  }

  .v-enter-from,
  .v-leave-to {
    z-index: -1;
    translate: 0 -100%;
    opacity: 0;
  }
}

@include tablet-up {
  .clb-form-captcha {
    max-width: 350px;
  }
}
</style>
