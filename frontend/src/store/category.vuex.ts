import { createModule, mutation } from 'vuex-class-component';
import { ICategoryModelResponse, TCategoryModelUpdate } from '@/services/Category';

const VuexModule = createModule({
  namespaced: 'category',
  strict: false,
});

class CategoryStore extends VuexModule {
  public categories: ICategoryModelResponse[] = [];

  public id = 0;

  public loading = false;

  public editCategory = <TCategoryModelUpdate>{};

  get categorySelected() {
    return this.editCategory;
  }

  get categoryId() {
    return this.id;
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

  @mutation changedCategoryId(payload: number) {
    this.id = payload;
  }
}

export default CategoryStore;
