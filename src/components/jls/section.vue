<template>
  <section
    :id="id"
    :class="[
      'section',
      name,
      `text-${textPosition}`,
    ]"
  >
    <div class="section__title">
      <slot name="title">
        <jls-heading
          v-if="title"
          :heading-type="headingType"
          :text="title"
          :position="titlePosition"
          :class="[...titleClasses]"
        />
      </slot>
    </div>

    <div :class="['section__content', ...contentClasses]">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { SectionProperties } from '@/interfaces/components/misc.interface';
import { ArrayAccess } from '@/helper/array-access.helper';
import { textPositionOptions } from '@/consts/misc';

const properties = withDefaults(defineProps<SectionProperties>(), {
  id: undefined,
  name: undefined,
  title: undefined,
  headingType: 'h2',
  textPosition: 'left',
  titlePosition: 'center',
  titleClass: undefined,
  contentClass: undefined,
});

/* eslint-disable max-len */
if (!['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(properties.headingType)) {
  throw new Error(`The heading type "${properties.headingType}" is not valid for section component!`);
}

if (!textPositionOptions.includes(properties.textPosition)) {
  throw new Error(`The text position "${properties.textPosition}" is not valid for section component!`);
}

if (!textPositionOptions.includes(properties.titlePosition)) {
  throw new Error(`The title position "${properties.titlePosition}" is not valid for section component!`);
}
/* eslint-enable max-len */

const contentClasses = computed<string[]>((): string[] => {
  return ArrayAccess.toStringArray(properties.contentClass);
});

const titleClasses = computed<string[]>((): string[] => {
  return ArrayAccess.toStringArray(properties.titleClass);
});
</script>

<style lang="scss">
.section {
  position: relative;
}
</style>
