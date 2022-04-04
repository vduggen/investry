<template>
  <div class="breadcrumb">
    <span class="text-h4 font-weight-bold">{{ title }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class BaseHeader extends Vue {
  get title(): string | undefined {
    return this.$route.meta?.name;
  }
}
</script>
