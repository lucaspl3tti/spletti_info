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
import { headingTypes, textPositionOptions } from '@/consts/misc';

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
checkComponentPropertyValidity(properties.headingType, 'heading-type', 'section', true, headingTypes);
checkComponentPropertyValidity(properties.textPosition, 'text-position', 'section', true, textPositionOptions);
checkComponentPropertyValidity(properties.titlePosition, 'title-position', 'section', true, textPositionOptions);
/* eslint-enable max-len */

const contentClasses = computed<string[]>((): string[] => {
  return ArrayAccess.wrapInArray(properties.contentClass) as string[];
});

const titleClasses = computed<string[]>((): string[] => {
  return ArrayAccess.wrapInArray(properties.titleClass) as string[];
});
</script>

<style lang="scss">
.section {
  position: relative;
}
</style>
