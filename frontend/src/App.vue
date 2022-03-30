<template>
  <v-app>
    <router-view name="TheSidebar"></router-view>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class App extends Vue {

}
</script>
