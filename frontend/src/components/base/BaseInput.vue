<template>
  <v-text-field
    :label="labelComputed"
    outlined
    dense
    v-bind="$attrs"
    v-on="$listeners"
    :value="value"
    @input="$emit('input', $event)"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import FormatLabel from '../../utils/formatLabel';

const BaseInputProps = Vue.extend({
  props: {
    isRequired: Boolean,
    value: String,
  },
});

@Component
export default class BaseInput extends BaseInputProps {
  @Prop({ default: '' }) label!: string;

  get labelComputed() {
    const label = new FormatLabel(this.label, this.isRequired);

    return label.getLabel();
  }
}
</script>
