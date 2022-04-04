<template>
  <v-btn v-bind="attrs" v-on="$listeners">
    <v-icon v-if="prependIcon" left>{{ prependIconComputed }}</v-icon>
    <slot></slot>
  </v-btn>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FormatIcon from '@/utils/formatIcon';

const BaseButtonProps = Vue.extend({
  props: {
    prependIcon: {
      type: String,
      default: '',
    },
    primary: Boolean,
    secondary: Boolean,
  },
});

@Component
export default class BaseButton extends BaseButtonProps {
  get classes() {
    const base = 'iy__button';

    return {
      'text-none': true,
      [`${base}--primary`]: this.primary,
    };
  }

  get attrs() {
    return {
      outlined: this.secondary,
      depressed: true,
      color: 'primary',
      class: { ...this.classes },
      ...this.$attrs,
    };
  }

  get prependIconComputed() {
    const icon = new FormatIcon(this.prependIcon);

    return icon.getIconName();
  }
}
</script>
