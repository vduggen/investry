<template>
  <div class="breadcrumb">
    <span class="breadcrumb__title">{{ title }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class BaseHeader extends Vue {
  get title() {
    return this.$route.meta?.name;
  }
}
</script>

<style lang="scss">
@import "~vuetify/src/styles/main.sass";

.breadcrumb {
  &__title {
    @extend .text-h4;
    @extend .font-weight-bold;
  }
}
</style>
