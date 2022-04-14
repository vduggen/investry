<template>
  <v-container class="category">
    <BaseHeader :title="name">
      <template #right>
        <DialogNewCashFlow />
      </template>
    </BaseHeader>

    <v-row class="category__main">
      <v-col class="iy__h-100">
        <BaseWrapperPage class="pa-0">
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

        </BaseWrapperPage>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CashFlow from '@/services/CashFlow';
import { VuexModule } from '@/store/store.vuex';
import ITableProps from '../typings/ITableProps';
import BaseHeader from '../components/base/BaseHeader.vue';
import BaseWrapperPage from '../components/base/BaseWrapperPage.vue';
import BaseTable from '../components/base/BaseTable.vue';
import DialogNewCashFlow from '../components/DialogNewCashFlow.vue';

const CategorySpecificProps = Vue.extend({
  components: {
    BaseHeader,
    BaseWrapperPage,
    BaseTable,
    DialogNewCashFlow,
  },
});

@Component
export default class CategorySpecific extends CategorySpecificProps {
  infoCategory = {};

  idCategory!: number;

  teste = '';

  HttpCashFlow = new CashFlow();

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
    ],
    customs: ['value', 'date', 'description'],
  }

  name = '';

  VuexModuleCashFlow = VuexModule.cashflow;

  changedListCashFlows = this.VuexModuleCashFlow.changedListCashFlows;

  created() {
    this.idCategory = parseInt(this.$route.params.id, 10);

    this.getAllCashFlows();
  }

  async getAllCashFlows() {
    const { data } = await this.HttpCashFlow.findByCategory(this.idCategory);

    if (data.data.length > 0) {
      this.name = data.data[0].category_id.name;

      this.changedListCashFlows(data.data);
    }
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
