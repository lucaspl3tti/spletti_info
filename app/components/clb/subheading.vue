<template>
  <component
    :is="headingType"
    ref="subheadingElement"
    :class="[
      'clb-subheading',
      `text-${position}`,
      {
        [headingAppearance]: !Utilities.isEmpty(headingAppearance),
        'handwriting-font': isHandwritingFont,
        'fw-medium': isHandwritingFont,
      },
    ]"
  >
    <div ref="defaultSlotElement" :style="`display: ${isHtml ? 'none' : 'contents'};`">
      <slot>{{ renderedText }}</slot>
    </div>

    <span v-if="isHtml" v-html="renderedText" />
    <!-- <span v-if="!isHtml">
    </span> -->

  </component>
</template>

<script setup lang="ts">
import type { ClbSubheadingProperties } from '@/interfaces/components/heading.interface';
import { textPositions } from '@/consts/misc.consts';
import { Utilities } from '@helper/utilities.helper';
import { renderToString } from 'vue/server-renderer';

const slots = useSlots();

const properties = withDefaults(defineProps<ClbSubheadingProperties>(), {
  headingType: 'h2',
  headingAppearance: undefined,
  text: undefined,
  isHtml: false,
  position: 'start',
  isHandwritingFont: false,
});

checkComponentPropertyValidity(properties.position, 'position', 'subheading', true, textPositions);

const defaultSlotElement = ref<HTMLElement | null>(null);
const htmlContent = ref('');
const renderedText = computed(() => {
  if (properties.isHtml && Utilities.isEmpty(properties.text)) {
    return htmlContent.value;
  }

  return properties.text;
});

onMounted(async () => {
  if (import.meta.server && slots.default) {
    const vnode = h('div', slots.default());
    htmlContent.value = await renderToString(vnode);
    return;
  }

  if (defaultSlotElement.value) {
    htmlContent.value = defaultSlotElement.value.innerHTML;
  }
});
</script>

<style lang="scss">
// .clb-subheading {}
</style>
