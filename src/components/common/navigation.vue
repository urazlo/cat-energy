<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <router-link
          to="/"
          class="nav__link"
        >
          Home
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">

.nav {
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;

  &__list {
    display: flex;
    list-style: none;
  }
}
</style>
