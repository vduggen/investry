<template>
  <v-progress-circular
    indeterminate
    color="primary"
    :size="70"
  />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class BaseLoader extends Vue {}
</script>
