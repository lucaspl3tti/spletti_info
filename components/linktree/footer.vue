<template>
  <div class="linktree-footer">
    <div class="linktree-footer__username">
      {{ name }}<span class="heading-dot">.</span>
    </div>

    <div class="linktree-footer__links">
      <a
        v-for="(item, index) in links"
        :key="index"
        :href="item.target"
        :target="item.openInNewTab ? '_blank' : '_self'"
        class="legal-link hover-underline"
      >
        {{ item.text }}
      </a>
    </div>
  </div>
</template>

<script setup>
// ---- define variables
// define default variables
const runtimeConfig = useRuntimeConfig();

let name = ref('Jan-Luca Splettstößer');
let links = reactive({});
let fetchError = ref(false);

const linktreeApiUrl = `${runtimeConfig.public.apiBase}/wp/v2/posts?categories=12`;
const { data, error } = await requestLinktreeData(linktreeApiUrl);
handleLinktreeResponse(data, error)

// ---- Define page functions
/**
 * Request data for legal page
 * @param {string} apiUrl
 */
 async function requestLinktreeData(apiUrl) {
  const { data, error } = await useFetch(apiUrl, {
    onRequestError({ error }) {
      return error;
    },
    onResponse({ response }) {
      return response._data[0];
    },
    onResponseError({ request, response }) {
      return { request, response };
    },
  });

  return { data, error };
};

/**
 * Process homepage fetch response
 * @param {object} responseData
 * @param {object} requestError
 */
 function handleLinktreeResponse(responseData, requestError) {
  if (requestError.value) return fetchError = ref(true);
  fetchError = ref(false);

  const data = responseData.value[0];
  name = ref(data.meta.name[0]);

  links['legal_link'] = {
    target: data.meta.legal_link[0],
    text: 'Impressum - Legal Disclosure',
    openInNewTab: false
  };

  if (data.meta.privacy_link[0] !== '') {
    links['privacy_link'] = {
      target: data.meta.privacy_link[0],
      text: 'Impressum - Legal Disclosure',
      openInNewTab: false
    };
  }
};
</script>

<style lang="scss" scoped>
.linktree-footer {
  padding: 0 0 50px;

  &__username {
    margin-top: 60px;
    margin-bottom: 1rem;
    font-size: 1.25rem;
    font-weight: 700;
  }

  &__links {
    font-size: 0.75rem;
  }
}
</style>
