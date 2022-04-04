<template>
  <v-textarea
    outlined
    :label="label"
    v-bind="$attrs"
    v-on="$listeners"
    rows="3"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BaseTextArea extends Vue {
  @Prop({ default: '' }) label!: string;
}
</script>
