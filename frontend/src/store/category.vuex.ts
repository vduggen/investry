import { createModule, mutation } from 'vuex-class-component';
import ICategory from '../typings/ICategory';

const VuexModule = createModule({
  namespaced: 'category',
  strict: false,
});

class CategoryStore extends VuexModule {
  public categories: ICategory[] = [];

  public loading = false;

  public editCategory = <ICategory>{};

  get categorySelected() {
    return this.editCategory;
  }

  get stateLoading() {
    return this.loading;
  }

  get listCategories(): ICategory[] {
    return this.categories;
  }

  get existCategories() {
    return this.categories.length > 0;
  }

  @mutation changedCategories(payload: ICategory[]) {
    this.categories = payload;
  }

  @mutation changedLoading(payload: boolean) {
    this.loading = payload;
  }

  @mutation changedEditCategory(payload: ICategory) {
    this.editCategory = payload;
  }
}

export default CategoryStore;
