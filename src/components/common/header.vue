<template>
  <header class="header">
    <div class="nav__logo-wr">
      <router-link to="/">
        <img
          class="nav__logo"
          src="/assets/img/logo.jpg"
          alt=""
        >
      </router-link>
    </div>
    <Navigation/>
  </header>
</template>

<script lang="ts">
import Navigation from './navigation.vue';

export default {
  components: {
    Navigation
  },
};
</script>

<style lang="scss">
  .header {
    display: flex;
    align-items: center;
    width: 100%;
  }
</style>
