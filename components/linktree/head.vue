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
// ---- define variables
// define default variables
const runtimeConfig = useRuntimeConfig()

let username = ref('luca.spl3tti')
let profileImageSrc = ref('/img/jls_profilepic.jpg')
let fetchError = ref(false)

const linktreeApiUrl = `${runtimeConfig.public.apiBase}/wp/v2/posts?categories=12`
const { data, error } = await requestLinktreeData(linktreeApiUrl)
handleLinktreeResponse(data, error)

// ---- Define page functions
/**
 * Request data for linktree page
 * @param {string} apiUrl
 */
 async function requestLinktreeData(apiUrl) {
  const { data, error } = await useFetch(apiUrl, {
    onRequestError({ error }) {
      return error
    },
    onResponse({ response }) {
      return response._data[0]
    },
    onResponseError({ request, response }) {
      return { request, response }
    },
  })

  return { data, error }
}

/**
 * Process linktree fetch response
 * @param {object} responseData
 * @param {object} requestError
 */
 function handleLinktreeResponse(responseData, requestError) {
  if (requestError.value) return fetchError = ref(true)
  fetchError = ref(false)

  const data = responseData.value[0]
  username = ref(data.meta.username[0])
  profileImageSrc = ref(data.featured_image)
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
