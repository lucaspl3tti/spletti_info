<template>
  <div class="clb-form-alert">
    <div :class="`clb-form-alert__text clb-form-alert__text--${state}`">
      <clb-icon
        pack="bi"
        :name="alertIcon"
        size="28"
        color="currentColor"
      />

      <p>
        {{ alertText }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ClbFormAlertProperties } from '@/interfaces/components/form.interface';
import { formAlertStates } from '@/consts/misc.consts';

const properties = withDefaults(defineProps<ClbFormAlertProperties>(), {
  state: 'success',
});

checkComponentPropertyValidity(properties.state, 'state', 'form-alert', true, formAlertStates);

const alertText = computed(() => {
  return properties.state === 'success'
    ? $trans('contact.success')
    : $trans('contact.error');
});

const alertIcon = computed(() => {
  return properties.state === 'success' ? 'check' : 'exclamation';
});
</script>

<style lang="scss">
.clb-form-alert {
  &__text {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: spacing(2);

    p {
      margin: 0;
    }

    &--success {
      color: $color-success;
    }

    &--error {
      color: $color-error;
    }
  }
}

@include tablet-up {
  .clb-form-alert {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>
