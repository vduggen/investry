<template>
  <v-select
    dense
    outlined
    :label="labelComputed"
    :items="items"
    v-bind="$attrs"
    v-on="$listeners"
    append-icon="mdi-chevron-down"
    :value="value"
    @input="$emit('input', $event)"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import FormatLabel from '../../utils/formatLabel';

const BaseSelectProps = Vue.extend({
  props: {
    isRequired: Boolean,
  },
});

@Component
export default class BaseSelect extends BaseSelectProps {
  @Prop({ default: '' }) label!: string;

  @Prop({ default: [] }) items!: [];

  @Prop({ default: '' }) value!: string;

  get labelComputed() {
    const label = new FormatLabel(this.label, this.isRequired);

    return label.getLabel();
  }
}
</script>
