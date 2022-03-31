<template>
  <div class="breadcrumb">
    <span class="breadcrumb__title">{{ title }}</span>

    <v-breadcrumbs class="breadcrumb__item" :items="items">
      <template #divider>
        <v-icon>mdi-chevron-left</v-icon>
      </template>

      <template #[`item`]="{ item }">
        <v-breadcrumbs-item
          :class="{ 'font-weight-medium': !item.disabled }"
          :to="item.to"
          :disabled="item.disabled"
        >
          {{ item.text }}
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

interface IBreadcrumb {
  text: string,
  disabled: boolean,
}

@Component({})
export default class BaseBreadcrumb extends Vue {
  get title() {
    return this.$route.meta?.name;
  }

  get items() {
    const routes = this.$route.matched;
    const tmp: IBreadcrumb[] = [];

    routes.forEach((element, index) => {
      const currentItemIsLast = index === routes.length - 1;

      tmp.push({
        text: element.meta?.name,
        disabled: !currentItemIsLast, // Desabilita todos menos o ultimo
      });
    });

    return tmp;
  }
}
</script>

<style lang="scss">
@import "~vuetify/src/styles/main.sass";

.breadcrumb {
  &__title {
    @extend .text-h4;
    @extend .font-weight-bold;
  }

  &__item {
    @extend .px-0;
    @extend .pb-0;
  }
}
</style>
