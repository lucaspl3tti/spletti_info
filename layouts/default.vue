<template>
  <div class="nuxt-layout nuxt-layout--default">
    <app-particles />

    <div class="jls-navigation">
      <app-navbar />
    </div>

    <div class="page-content">
      <slot />
    </div>

    <div class="jls-footer">
      <app-footer />
    </div>

    <jls-social-list />

    <jls-scroll-to-top />
  </div>
</template>
