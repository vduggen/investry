import { createModule, mutation } from 'vuex-class-component';
import ICashFlow from '@/typings/ICashFlow';

const VuexModule = createModule({
  namespaced: 'cashflow',
  strict: false,
});

class CashFlowStore extends VuexModule {
  public listCashflow: ICashFlow[] = [];

  get allCashFlows() {
    return this.listCashflow;
  }

  @mutation changedListCashFlows(payload: ICashFlow[]) {
    this.listCashflow = payload;
  }
}

export default CashFlowStore;
