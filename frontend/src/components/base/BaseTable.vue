<template>
  <v-data-table
    :headers="headers"
    :items="items"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template
      v-for="custom in customs"
      #[`item.${custom}`]="{ item }"
    >
      <slot :name="custom" :item="item" />
    </template>

    <template #[`no-data`]>
      Nenhum dado disponível
    </template>
  </v-data-table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ITableHeader from '../../typings/interfaces/ITableHeader';

@Component
export default class BaseTable extends Vue {
  @Prop({ default: [] }) headers!: ITableHeader[];

  @Prop({ default: [] }) items!: [];

  @Prop({ default: [] }) customs!: string[];
}
</script>
