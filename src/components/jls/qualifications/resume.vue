<template>
  <jls-button
    v-if="resume"
    class="jls-qualifications-resume"
    :href="getAssetFullPath(resume.filepath)"
    is-external
    target="_blank"
    theme="secondary"
    :title="$t('qualifications.resume.download.label')"
  >
    {{ $t('qualifications.resume.download.label') }}
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
import type { ApiResponse, Resume } from '~/src/interfaces/api.interface';

const runtimeConfig = useRuntimeConfig();
const { apiUrl } = runtimeConfig.public;
const { locale } = useI18n();

const resume: Ref<Resume|null> = ref(null);
const resumeData: ApiResponse = await $fetch(`${apiUrl}/single-types/resume?lang=${locale.value}`); // eslint-disable-line max-len

handleResumeData(resumeData);

function handleResumeData(response: ApiResponse): void {
  resume.value = response.data as Resume;
}
</script>

<style lang="scss">
.jls-qualifications-resume {
  &:hover:not(.jls-btn--icon) {
    .nuxt-icon {
      transform: translateY(spacing(1)) !important;
    }
  }
}

@include tablet-down {
  .jls-qualifications-resume {
    align-self: flex-end;
    width: 100%;
    margin-top: spacing(4);
  }
}

@include tablet-up {
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
