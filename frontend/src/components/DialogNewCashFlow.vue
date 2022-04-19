<template>
  <v-dialog v-model="show" width="500" class="dialog">
    <template v-slot:activator="{ on, attrs }">
      <BaseButton
        large
        primary
        v-bind="attrs"
        v-on="on"
        prepend-icon="mdi-plus"
      >
        Adicionar
      </BaseButton>
    </template>

    <v-card class="dialog__main">
      <header class="dialog__header">
        <BaseButton @click="closeDialog" color="grey" icon absolute top right>
          <v-icon>mdi-close</v-icon>
        </BaseButton>

        <span class="dialog__title text-h6">Novo Item</span>
      </header>

      <v-card-text class="dialog__body">
        <v-form
          ref="formNewCashFlow"
          v-model="valid"
          lazy-validation
        >
          <BaseInput
            v-model="cashflow.name"
            isRequired
            label="Nome"
            clearable
          />

          <v-row>
            <v-col class="pl-0">
              <BaseDatePicker
                isRequired
                label="Data"
                v-model="cashflow.date"
              />
            </v-col>

            <v-col class="pr-0">
              <BaseInput
                v-model.lazy="cashflow.value"
                isRequired
                label="Valor"
                v-money="money"
              />
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>

      <footer class="d-flex justify-center">
        <BaseButton
          :loading="loading"
          @click="create"
          large
          primary
        >
          Salvar
        </BaseButton>
      </footer>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { createCashFlow, ICashFlowModel } from '@/services/CashFlow';
import currencyUnmask from '@/utils/currencyUnmask';
import { VuexModule } from '@/store/store.vuex';
import BaseButton from './base/BaseButton.vue';
import BaseInput from './base/BaseInput.vue';
import BaseDatePicker from './base/BaseDatePicker.vue';

interface InputsValue {
  name: string;
  value: string;
  date: string;
}

@Component({
  components: {
    BaseInput,
    BaseButton,
    BaseDatePicker,
  },
})
export default class DialogNewCashFlow extends Vue {
  show = false;

  valid = true;

  loading = false;

  money = {
    decimal: ',',
    thousands: '.',
    prefix: 'R$ ',
    precision: 2,
    masked: false,
  }

  $refs!: { formNewCashFlow: HTMLFormElement };

  cashflow = {} as InputsValue;

  VuexModuleCashFlow = VuexModule.cashflow;

  changedListCashFlows = this.VuexModuleCashFlow.changedListCashFlows;

  async create() {
    this.loading = true;

    const body: ICashFlowModel = {
      ...this.cashflow,
      wallet_id: 1,
      value: currencyUnmask(this.cashflow.value),
      category_id: Number(this.$route.params.id),
    };

    const { data } = await createCashFlow(body);

    const ListCashFlows = this.VuexModuleCashFlow.allCashFlows;

    const payload = [...ListCashFlows, data.data];

    this.changedListCashFlows(payload);

    this.$toast.success(data.message);

    this.closeDialog();
  }

  closeDialog() {
    this.loading = false;
    this.show = false;
    this.$refs.formNewCashFlow.reset();
  }
}
</script>

<style lang="scss" scoped>
.dialog {
  border-radius: $border-radius;

  &__main {
    @include py(get-spacer(5));
    @include px(get-spacer(8));
  }

  &__header {
    @include d-flex(center, center, column);
  }

  &__title {
    font-weight: 500;
  }

  &__body {
    @include px(0 !important);
    @include pt(get-spacer(5) !important);
  }
}
</style>
