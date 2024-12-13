<template>
  <jls-button
    class="jls-qualifications-resume"
    theme="secondary"
    to="/img/about-me.png"
    is-external
    uneven-border
    :title="$t(`general.download.label`)"
  >
    {{ $t(`general.download.label`) }}
    <template #append>
      <jls-icon
        pack="bi"
        name="download"
        size="24"
        color="currentColor"
      />
    </template>
  </jls-button>
</template>

<script setup lang="ts">
// @TODO: Implement code to get file for download button from API
</script>

<style lang="scss">
.jls-qualifications-resume {
  &:hover:not(.jls-btn--icon) {
    .nuxt-icon {
      transform: translateY(spacing(1)) !important;
    }
  }
}

@include tablet-portrait-down {
  .jls-qualifications-resume {
    align-self: flex-end;
    margin-top: spacing(4)
  }
}

@include tablet-portrait-up {
  .jls-qualifications-resume {
    @include absolute-position(
      $top: 0,
      $left: auto,
      $right: 0,
      $bottom: auto
    )
  }
}
</style>
