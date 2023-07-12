<template>
  <div class="link-list">
    <a
      v-for="(item, index) in links"
      :key="index"
      :href="item.target"
      :target="item.openInNewTab ? '_blank' : '_self'"
      class="link-list__link"
    >
      <i :class="item.iconClasses"></i>
      &nbsp;<span>{{ item.text }}</span>
    </a>
  </div>
</template>

<script setup>
// ---- define variables
// define default variables
const runtimeConfig = useRuntimeConfig()

let links = reactive({})
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
};

/**
 * Process linktree fetch response
 * @param {object} responseData
 * @param {object} requestError
 */
 function handleLinktreeResponse(responseData, requestError) {
  if (requestError.value) return fetchError = ref(true)
  fetchError = ref(false)

  const data = responseData.value[0]

  // add links to array
  links['my_website'] = {
    target: data.meta.website_link[0],
    text: 'Meine Webseite',
    iconClasses: 'fas fa-desktop',
    openInNewTab: false
  }

  if (data.meta.instagram_link[0] !== '') {
    links['instagram'] = {
      target: data.meta.instagram_link[0],
      text: 'Instagram',
      iconClasses: 'fab fa-instagram',
      openInNewTab: true
    }
  }

  if (data.meta.github_link[0] !== '') {
    links['github'] = {
      target: data.meta.github_link[0],
      text: 'Github',
      iconClasses: 'fab fa-github',
      openInNewTab: true
    }
  }

  if (data.meta.linkedin_link[0] !== '') {
    links['linkedin'] = {
      target: data.meta.linkedin_link[0],
      text: 'LinkedIn',
      iconClasses: 'fab fa-linkedin',
      openInNewTab: true
    }
  }

  if (data.meta.spotify_link[0] !== '') {
    links['spotify'] = {
      target: data.meta.spotify_link[0],
      text: 'Spotify',
      iconClasses: 'fab fa-spotify',
      openInNewTab: true
    }
  }

  links['contact'] = {
    target: `mailto:${data.meta.email[0]}`,
    text: 'Kontakt',
    iconClasses: 'fas fa-at',
    openInNewTab: false
  }
}
</script>

<style lang="scss" scoped>
.link-list__link {
  display: block;
  width: 250px;
  margin: 1.25rem auto 0 auto;
  padding: 0.5rem 2rem;
  background: rgba(255, 134, 0, 1);
  border: 2px solid rgba(255, 134, 0, 1);
  border-radius: 25px 0;
  color: rgba(248, 247, 253, 1);
  font-size: 0.85rem;
  cursor: pointer;
  transition: border-radius 0.4s;

  .fas,
  .fab {
    transform: scale(1);
    transition: transform 0.4s;
  }

  &:hover {
    background: rgba(255, 109, 0, 1);
    border-radius: 0 25px;
    border-color: rgba(255, 109, 0, 1);
    color: rgba(248, 247, 253, 1);

    .fas,
    .fab {
      transform: scale(1.35);
    }
  }
}

.first-link {
  margin-top: 0;
}
</style>
