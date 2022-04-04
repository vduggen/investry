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
.card {
  height: 100%;
  padding: get-spacer(6);
  border-radius: $border-radius;
}
</style>
