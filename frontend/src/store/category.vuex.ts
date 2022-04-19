import { createModule, mutation } from 'vuex-class-component';
import { ICategoryModelResponse, TCategoryModelUpdate } from '@/services/Category';

const VuexModule = createModule({
  namespaced: 'category',
  strict: false,
});

class CategoryStore extends VuexModule {
  public categories: ICategoryModelResponse[] = [];

  public loading = false;

  public editCategory = <TCategoryModelUpdate>{};

  get categorySelected() {
    return this.editCategory;
  }

  get stateLoading() {
    return this.loading;
  }

  get listCategories() {
    return this.categories;
  }

  get listCategoriesIsEmpty() {
    return this.categories.length === 0;
  }

  get existCategories() {
    return this.categories.length > 0;
  }

  @mutation changedCategories(payload: ICategoryModelResponse[]) {
    this.categories = payload;
  }

  @mutation changedLoading(payload: boolean) {
    this.loading = payload;
  }

  @mutation changedEditCategory(payload: TCategoryModelUpdate) {
    this.editCategory = payload;
  }
}

export default CategoryStore;
