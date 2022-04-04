<template>
  <v-row class="header">
    <v-col class="header__item header__item--left">
      <BaseButton
        v-if="viewRedirect"
        @click="$router.go(-1)"
        class="mr-3"
        icon
      >
        <v-icon>mdi-arrow-left</v-icon>
      </BaseButton>

      <span class="text-h4 font-weight-bold">{{ titleComputed }}</span>
    </v-col>

    <v-col class="header__item header__item--right">
      <slot name="right" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import BaseButton from './BaseButton.vue';

const BaseHeaderProps = Vue.extend({
  components: {
    BaseButton,
  },
});

@Component
export default class BaseHeader extends BaseHeaderProps {
  @Prop({ default: '' }) title!: string;

  @Prop({ default: true }) viewRedirect!: boolean;

  get titleComputed(): string | undefined {
    if (this.title) {
      return this.title;
    }

    return this.$route.meta?.name;
  }
}
</script>

<style lang="scss">
.header__item {
  display: flex;
  align-items: center;

  &--left {
    justify-content: flex-start;
  }

  &--right {
    justify-content: flex-end;
  }
}
</style>
