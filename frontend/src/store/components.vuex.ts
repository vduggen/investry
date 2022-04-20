import { createModule, mutation } from 'vuex-class-component';

const VuexModule = createModule({
  namespaced: 'components',
  strict: false,
});

class ComponentsStore extends VuexModule {
  public currentDate = '';

  get getCurrentDate() {
    return this.currentDate;
  }

  get dateIsEmpty() {
    return this.currentDate === '';
  }

  @mutation changedCurrentDate(payload: string): void {
    this.currentDate = payload;
  }
}

export default ComponentsStore;
