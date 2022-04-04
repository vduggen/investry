<template>
  <v-container class="category">
    <BaseHeader :title="name">
      <template #right>
        <DialogNewItem />
      </template>
    </BaseHeader>

    <v-row class="category__main">
      <v-col class="iy__h-100">
        <BaseWrapperPage class="px-0 pb-0">
          <BaseTable
            :headers="table.headers"
            :items="table.data"
            :customs="table.customs"
            :items-per-page="paginationInfos.itemsPerPage"
            :page.sync="paginationInfos.page"
            hide-default-footer
            @page-count="paginationInfos.pageCount = $event"
          >
            <template #[`value`]="{ item }">
              {{ item.value | currencyMask }}
            </template>

            <template #[`date`]="{ item }">
              {{ item.date | dateMask }}
            </template>

            <template #[`description`]="{ item }">
              {{ item.description || '-' }}
            </template>
          </BaseTable>
          <v-divider />

          <v-pagination
            class="mt-5"
            v-model="paginationInfos.page"
            :length="paginationInfos.pageCount"
          />

        </BaseWrapperPage>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ICategory from '../typings/ICategory';
import ITableProps from '../typings/ITableProps';
import categories from '../mocks/categories';
import BaseHeader from '../components/base/BaseHeader.vue';
import DialogNewItem from '../components/DialogNewItem.vue';
import BaseWrapperPage from '../components/base/BaseWrapperPage.vue';
import BaseTable from '../components/base/BaseTable.vue';
import items from '../mocks/items';

const CategorySpecificProps = Vue.extend({
  components: {
    BaseHeader,
    DialogNewItem,
    BaseWrapperPage,
    BaseTable,
  },
});

@Component
export default class CategorySpecific extends CategorySpecificProps {
  infoCategory!: ICategory;

  idCategory!: number;

  paginationInfos = {
    page: 1,
    pageCount: 0,
    itemsPerPage: 7,
  }

  table: ITableProps = {
    headers: [
      {
        text: 'Nome',
        value: 'name',
        align: 'center',
      },
      {
        text: 'Valor',
        value: 'value',
        align: 'center',
      },
      {
        text: 'Data',
        value: 'date',
        align: 'center',
      },
      {
        text: 'Descrição',
        value: 'description',
        align: 'center',
      },
    ],
    customs: ['value', 'date', 'description'],
    data: [],
  }

  created() {
    this.idCategory = parseInt(this.$route.params.id, 10);

    this.getInfoCategory();

    this.getItemsByCategory();
  }

  getInfoCategory() {
    const [result] = categories.filter(({ id }) => id === this.idCategory);

    this.infoCategory = result;
  }

  getItemsByCategory() {
    const results = items.filter(({ category }) => category === this.idCategory);

    this.table.data = results;
  }

  get name() {
    return this.infoCategory.name;
  }
}
</script>

<style lang="scss" scoped>
.category {
  height: 100%;

  &__main {
    height: calc(100% - 68px);
  }
}
</style>
