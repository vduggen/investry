<template>
  <v-btn v-bind="attrs">
    <v-icon v-if="icon" left>{{ icon }}</v-icon>
    <slot></slot>
  </v-btn>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const BaseButtonProps = Vue.extend({
  props: {
    icon: {
      type: String,
      default: '',
    },
    large: Boolean,
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
      large: this.large,
      depressed: true,
      color: 'primary',
      class: { ...this.classes },
      ...this.$attrs,
    };
  }
}
</script>
