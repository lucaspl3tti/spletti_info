<template>
  <BNavbarBrand class="h1 mb-0 handwriting-font">
    <span class="d-block d-xl-none">
      JLS<span class="heading-dot">.</span>
    </span>
    <span class="d-none d-xl-block">
      Jan-Luca Splettstößer<span class="heading-dot">.</span>
    </span>
  </BNavbarBrand>
</template>

<script>
export default {}
</script>

<style lang="scss">
.navbar .navbar-brand {
  display: flex;
  place-items: center;
  height: 55px;
  max-width: 25%;
  border-radius: 25px;
  padding: spacing(1) spacing(5);
  color: $color-white;
  font-size: $font-size-h3;
  align-self: center;
}

@include tablet-up {
  .navbar .navbar-brand {
    max-width: 35%;
  }
}

@include tablet-portrait-up {
  .navbar .navbar-brand {
    box-shadow: none;
    font-size: 38px;
  }
}
</style>
