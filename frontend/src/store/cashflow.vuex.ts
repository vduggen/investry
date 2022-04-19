import { createModule, mutation } from 'vuex-class-component';
import { ICashFlowModelResponse } from '@/services/CashFlow';

const VuexModule = createModule({
  namespaced: 'cashflow',
  strict: false,
});

class CashFlowStore extends VuexModule {
  public listCashflow: ICashFlowModelResponse[] = [];

  get allCashFlows() {
    return this.listCashflow;
  }

  @mutation changedListCashFlows(payload: ICashFlowModelResponse[]) {
    this.listCashflow = payload;
  }
}

export default CashFlowStore;
