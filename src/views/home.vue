<template>
  <div class="home">
    <Program />

    <Explanation />

    <Example />

    <Contacts />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Explanation from '@/components/explanation.vue';
import Program from '@/components/program.vue';
import Example from '@/components/example.vue';
import Contacts from '@/components/contacts.vue';

export default {
  name: 'home',

  components: {
    Program,
    Explanation,
    Example,
    Contacts,
  },

  data() {
    return {
      name: '',
    };
  },

  props: {
    id: {
      type: Number,
    },
  },

  computed: {
    ...mapGetters(['currentClub']),

    club() {
      return this.currentClub ? this.currentClub : {};
    },
  },
};
</script>

<style lang="scss">
.program {
}
</style>
