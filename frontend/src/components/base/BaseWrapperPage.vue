<template>
  <v-card class="card" elevation="0">
    <slot />
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class BaseWrapperPage extends Vue {}
</script>

<style lang="scss">
@import "~vuetify/src/styles/main.sass";

.card {
  @extend .rounded-lg;
  @extend .iy__h-100;
  @extend .pa-6;
}
</style>
