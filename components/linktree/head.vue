<template>
  <div class="linktree-head">
    <img
      :src="profileImageSrc"
      alt="profile picture"
      class="linktree-head__profile-image"
    />

    <div class="linktree-head__username">
      @{{ username }}
    </div>
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()

const username = ref('luca.spl3tti')
const profileImageSrc = ref('/img/jls_profilepic.jpg')

const linktreeApiUrl = `${runtimeConfig.public.apiBase}/wp/v2/posts/422`
const linktreeData = await $fetch(linktreeApiUrl)
handleLinktreeResponse(linktreeData)

function handleLinktreeResponse(data) {
  username.value = data.meta.username[0]
  profileImageSrc.value = data.featured_image
}
</script>

<style lang="scss" scoped>
.linktree-head {
  padding: 50px 0 0;

  &__profile-image {
    display: block;
    height: auto;
    width: 128px;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
  }

  &__username {
    padding: 15px 0;
  }
}
</style>
