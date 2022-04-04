<template>
  <v-card v-bind="$attrs" v-on="$listeners" class="rounded-lg iy__box-shadow card-category">
    <v-tooltip v-if="description" bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon absolute top right v-bind="attrs" v-on="on">
          <v-icon>mdi-help-circle-outline</v-icon>
        </v-btn>
      </template>
      <span>{{ description }}</span>
    </v-tooltip>

    <div class="card-category__icon" :class="colors">
      <v-icon size="2rem" color="white">{{ iconComputed }}</v-icon>
    </div>

    <div class="card-category__title my-6">
      <span class="text-h6 font-weight-bold">{{ title }}</span>
    </div>

    <div class="card-category__footer">
      <span class="subtitle-1">
        <strong class="text--secondary mr-1">Total: </strong>
        <span class="font-weight-medium">{{ total | currencyMask }}</span>
      </span>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import FormatIcon from '../utils/formatIcon';

@Component
export default class CardCategory extends Vue {
  @Prop({ default: '' }) icon!: string;

  @Prop({ default: '' }) title!: string;

  @Prop({ default: 0 }) total!: number;

  @Prop({ default: '' }) color!: string;

  @Prop({ default: '' }) description!: string;

  get colors() {
    const base = 'card-category__icon';

    return {
      [`${base}--${this.color}`]: true,
    };
  }

  get iconComputed() {
    const icon = new FormatIcon(this.icon);

    return icon.getIconName();
  }
}
</script>

<style lang="scss" scoped>
.card-category {
  @include d-flex(center, center, column);
  @include set-w-h(250px);

  &__title,
  &__footer {
    padding: 0;
  }

  &__icon {
    @include set-w-h(65px);
    @include d-flex(center, center);
    @include rounded;

    &--error {
      background-color: $iy-red;
    }

    &--success {
      background-color: $iy-green;
    }
  }
}
</style>
