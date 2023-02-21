<template>
  <div id="app">
    <Header/>

    <main class="main">
      <router-view/>
    </main>

    <Footer/>
  </div>
</template>

<style lang="scss"></style>

<script>
import Header from '@/components/common/header.vue';
import Footer from '@/components/common/footer.vue';

export default {
  components: {
    Footer,
    Header
  },
};

</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-x: hidden;
  min-height: 100vh;

  font-size: 1.6rem;
}

.main {
  @include flex-column;
  justify-content: center;
  flex: 1 1 auto;
  width: 100%;
}

.section {
  justify-content: center;
}
</style>
