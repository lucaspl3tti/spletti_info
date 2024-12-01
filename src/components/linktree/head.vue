<template>
  <div class="linktree-head">
    <img
      :src="profilleImage"
      alt="profile picture"
      class="linktree-head__profile-image"
    />

    <div class="linktree-head__username">
      @{{ username }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { LinktreeHeadProperties } from '@/interfaces/components/linktree.interface'; // eslint-disable-line max-len

// eslint-disable-next-line
const properties = withDefaults(defineProps<LinktreeHeadProperties>(), {
  profilleImage: '',
  username: '',
});
</script>

<style lang="scss" scoped>
.linktree-head {
  padding: spacing(12) 0 0;

  &__profile-image {
    display: block;
    @include size(128px, auto);
    max-width: 100%;
    @include marginX(auto);
    border-radius: 50%;
  }

  &__username {
    padding: spacing(4) 0;
  }
}
</style>
