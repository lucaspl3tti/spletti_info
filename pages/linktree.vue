<template>
  <main :class="['spletti', 'spletti--linktree', langClass]">
    <LinktreeParticles />

    <div class="linktree-container">
      <LinktreeHead />
      <LinktreeLinks />
      <LinktreeFooter />
    </div>
  </main>
</template>

<script setup>
const langClass = ref(`spletti-${localStorage.language}`)
definePageMeta({
  layout: 'linktree',
});
</script>

<style lang="scss">
.linktree {
  background: rgba(16, 12, 39, 1);
  color: rgba(248, 247, 253, 1);
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  letter-spacing: 2px;
  text-align: center;

  a {
    text-decoration: none;
    color: rgba(248, 247, 253, 1);

    &:hover {
      color: rgba(255, 109, 0, 1);
    }
  }

  .spletti--linktree {
    width: 100vw;
    height: 100vh;
    margin: 0;
  }

  &-container {
    position: relative;
    z-index: 2;
  }
}
</style>
