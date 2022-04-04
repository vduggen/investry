<template>
  <div class="breadcrumb">
    <span class="text-h4 font-weight-bold">{{ title }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class BaseHeader extends Vue {
  get title(): string {
    return this.$route.meta?.name;
  }
}
</script>
