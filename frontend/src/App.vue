<template>
  <v-app>
    <TheSidebar />

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import TheSidebar from './components/layout/TheSidebar.vue';

export default Vue.extend({
  components: { TheSidebar },
  name: 'App',
});
</script>
