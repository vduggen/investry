import { createModule, mutation } from 'vuex-class-component';
import TColors from '@/typings/types/TColors';

const VuexModule = createModule({
  namespaced: 'colors',
  strict: false,
});

class ColorsStore extends VuexModule {
  public colors: TColors[] = [];

  get getListColors() {
    return this.colors;
  }

  get listColorsIsEmpty() {
    return this.colors.length === 0;
  }

  @mutation changedListColors(payload: TColors[]) {
    this.colors = payload;
  }
}

export default ColorsStore;
