<template>
  <v-container class="category">
    <BaseHeader :title="name">
      <template #right>
        <DialogNewCashFlow />
      </template>
    </BaseHeader>

    <v-row class="category__main">
      <v-col  class="iy__h-100">
        <BaseWrapperPage class="pa-0">
          <div v-if="loading" class="category__loader">
            <BaseLoader />
          </div>

          <div v-else>
            <BaseTable
              :headers="table.headers"
              :items="VuexModuleCashFlow.allCashFlows"
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
          </div>
        </BaseWrapperPage>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getAllCashFlows } from '@/services/CashFlow';
import { filterCategoryById } from '@/services/Category';
import { VuexModule } from '@/store/store.vuex';
import ITableProps from '../typings/interfaces/ITableProps';
import BaseHeader from '../components/base/BaseHeader.vue';
import BaseWrapperPage from '../components/base/BaseWrapperPage.vue';
import BaseTable from '../components/base/BaseTable.vue';
import DialogNewCashFlow from '../components/DialogNewCashFlow.vue';
import BaseLoader from '../components/base/BaseLoader.vue';

const CategorySpecificProps = Vue.extend({
  components: {
    BaseHeader,
    BaseWrapperPage,
    BaseTable,
    DialogNewCashFlow,
    BaseLoader,
  },
});

@Component
export default class CategorySpecific extends CategorySpecificProps {
  infoCategory = {};

  idCategory!: number;

  teste = '';

  paginationInfos = {
    page: 1,
    pageCount: 0,
    itemsPerPage: 7,
  }

  loading = false;

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
    ],
    customs: ['value', 'date', 'description'],
  }

  name = '...';

  VuexModuleCashFlow = VuexModule.cashflow;

  changedListCashFlows = this.VuexModuleCashFlow.changedListCashFlows;

  created() {
    this.idCategory = parseInt(this.$route.params.id, 10);

    Promise.all([
      this.HttpGetInfoCategory(),
      this.HttpAllCashFlows(),
    ]);
  }

  async HttpGetInfoCategory() {
    const { data } = await filterCategoryById(this.idCategory);

    this.name = data.data.name;
  }

  async HttpAllCashFlows() {
    this.loading = true;

    const { data } = await getAllCashFlows({
      category_id: this.idCategory,
    });

    this.changedListCashFlows(data.data);

    this.loading = false;
  }
}
</script>

<style lang="scss" scoped>
.category {
  height: 100%;

  &__loader {
    @include set-w-h(100%);
    @include d-flex;
  }

  &__main {
    height: calc(100% - 68px);
  }
}
</style>
