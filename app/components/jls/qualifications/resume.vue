<template>
  <clb-button
    v-if="resume"
    class="jls-qualifications-resume"
    :href="getAssetFullPath(resume.filepath)"
    target="_blank"
    theme="secondary"
    :title="$trans('qualifications.resume.download.label')"
    border-style="rounded"
    download
  >
    {{ $trans('qualifications.resume.download.label') }}
    <template #append>
      <clb-icon
        pack="bi"
        name="download"
        size="24"
        color="currentColor"
      />
    </template>
  </clb-button>
</template>

<script setup lang="ts">
import type { PimcoreApiResponse, PimcoreResume } from '~/src/interfaces/api.interface';

const runtimeConfig = useRuntimeConfig();
const { apiUrl } = runtimeConfig.public;
const { locale } = useI18n();

const resume: Ref<PimcoreResume|null> = ref(null);
const apiRoute = `${apiUrl}/single-types/resume?lang=${locale.value}`;
const resumeData: PimcoreApiResponse = await $fetch(apiRoute);
handleResumeData(resumeData);

function handleResumeData(response: PimcoreApiResponse): void {
  resume.value = response.data as PimcoreResume;
}
</script>

<style lang="scss">
.jls-qualifications-resume {
  .nuxt-icon {
    transition: translate 0.15s ease;
  }

  &:hover:not(.clb-btn--icon) {
    .nuxt-icon {
      translate: 0 spacing(1);
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
    @include position(
      absolute,
      $top: 0,
      $left: auto,
      $right: 0,
      $bottom: auto
    )
  }
}
</style>
