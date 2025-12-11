<template>
  <section
    :id="id"
    :class="[
      'clb-section',
      name,
      `text-${textPosition}`,
    ]"
  >
    <div class="clb-section__title">
      <slot name="title">
        <clb-heading
          v-if="title"
          :heading-type="headingType"
          :text="title"
          :position="titlePosition"
          :class="[...titleClasses]"
        />
      </slot>
    </div>

    <slot name="subheading">
      <div v-if="subheading" class="clb-section__subheading">
        <clb-subheading
          :heading-type="subheadingType"
          :heading-appearance="subheadingAppearance"
          :text="subheading"
          :position="titlePosition"
          :class="[...subheadingClasses]"
          :is-handwriting-font="subheadingIsHandwritingFont"
        />
      </div>
    </slot>

    <div :class="['clb-section__content', ...contentClasses]">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ClbSectionProperties } from '@/interfaces/components/section.interface';
import type { HeadingSub } from '@/types/misc.types';
import ArrayAccess from '@helper/array-access.helper';
import Utilities from '@helper/utilities.helper';
import { headingTypes, textPositions } from '@/consts/misc.consts';

const properties = withDefaults(defineProps<ClbSectionProperties>(), {
  id: undefined,
  contentClass: undefined,
  headingType: 'h2',
  name: undefined,
  subheading: undefined,
  subheadingAppearance: undefined,
  subheadingClass: undefined,
  subheadingIsHandwritingFont: false,
  textPosition: 'start',
  title: undefined,
  titlePosition: 'center',
  titleClass: undefined,
});

/* eslint-disable max-len */
checkComponentPropertyValidity(properties.headingType, 'heading-type', 'section', true, headingTypes);
checkComponentPropertyValidity(properties.textPosition, 'text-position', 'section', true, textPositions);
checkComponentPropertyValidity(properties.titlePosition, 'title-position', 'section', true, textPositions);
/* eslint-enable max-len */

const contentClasses = computed<string[]>((): string[] => {
  return ArrayAccess.wrapInArray(properties.contentClass) as string[];
});

const subheadingClasses = computed<string[]>((): string[] => {
  return ArrayAccess.wrapInArray(properties.subheadingClass) as string[];
});

const subheadingType = computed<HeadingSub>((): HeadingSub => {
  if (!properties.subheading || Utilities.isEmpty(properties.subheading)) {
    return 'h2';
  }

  return Utilities.getNextSmallerHeadingType(properties.headingType) as HeadingSub;
});

const titleClasses = computed<string[]>((): string[] => {
  return ArrayAccess.wrapInArray(properties.titleClass) as string[];
});
</script>

<style lang="scss">
.clb-section {
  position: relative;
  padding-top: spacing(12.5);
  padding-bottom: spacing(12.5);
}
</style>
