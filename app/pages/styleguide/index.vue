<template>
  <main class="spletti spletti--styleguide">
    <div class="container">
      <h1>Frontend-Styleguide</h1>

      <ul>
        <li>
          Components:

          <ul>
            <li>
              <nuxt-link to="/styleguide/components/button">Button</nuxt-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup lang="ts">
// const breadcrumbItems: Ref<BreadcrumbItem[]> = ref([
//   { id: 'home', text: 'Garnele-Online.de', href: '/' },
//   { id: 'styleguide', text: 'Styleguide' },
// ]);

definePageMeta({
  middleware: ['dev-pages-client'],
});
</script>
