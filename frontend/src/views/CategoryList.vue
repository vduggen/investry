<template>
  <v-container class="home">
    <DialogEditCategory v-model="dialog" />

    <BaseHeader :viewRedirect="false">
      <template #right>
        <DialogNewCategory />
      </template>
    </BaseHeader>

    <v-row class="main__wrapper">
      <v-col class="iy__h-100">
        <BaseWrapperPage>
          <div class="main__loader" v-if="VuexModuleCategory.stateLoading">
            <BaseLoader />
          </div>

          <v-row v-else-if="VuexModuleCategory.existCategories" class="main__row">
            <div
              v-for="(category, index) in VuexModuleCategory.listCategories"
              :key="`category-${index}`"
            >
              <v-col>
                <CardCategory :category="category" @handleDialog="handleDialog" />
              </v-col>
            </div>
          </v-row>

          <div class="main__empty-data" v-else>
            <img
              src="@/assets/undraw_no_data_re_kwbl.svg"
              alt="Sem dados"
              width="170"
            />

            <span class="main__text text--secondary text-h6">Nenhuma categoria encontrada</span>
          </div>
        </BaseWrapperPage>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { VuexModule } from '@/store/store.vuex';
import BaseHeader from '@/components/base/BaseHeader.vue';
import CardCategory from '@/components/CardCategory.vue';
import BaseWrapperPage from '@/components/base/BaseWrapperPage.vue';
import DialogEditCategory from '@/components/DialogEditCategory.vue';
import DialogNewCategory from '@/components/DialogNewCategory.vue';
import { getListCategories } from '@/services/Category';
import BaseButton from '@/components/base/BaseButton.vue';
import BaseLoader from '@/components/base/BaseLoader.vue';
import { getAllColors } from '@/services/Color';

@Component({
  components: {
    DialogEditCategory,
    DialogNewCategory,
    BaseWrapperPage,
    CardCategory,
    BaseHeader,
    BaseButton,
    BaseLoader,
  },
})
export default class CategoryList extends Vue {
  VuexModuleCategory = VuexModule.category;

  VuexModuleColors = VuexModule.colors;

  dialog = false;

  changedCategories = this.VuexModuleCategory.changedCategories;

  changedLoading = this.VuexModuleCategory.changedLoading;

  mounted() {
    Promise.all([
      this.HttpGetAllColors(),
      this.getAllCategories(),
    ]);
  }

  handleDialog(val: boolean) {
    this.dialog = val;
  }

  async HttpGetAllColors() {
    if (this.VuexModuleColors.listColorsIsEmpty) {
      const { data } = await getAllColors();

      this.VuexModuleColors.changedListColors(data.data);
    }
  }

  async getAllCategories() {
    if (this.VuexModuleCategory.listCategoriesIsEmpty) {
      this.changedLoading(true);

      const { data } = await getListCategories();

      this.changedCategories(data.data);

      this.changedLoading(false);
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 100%;

  .main {
    &__loader {
      height: 100%;
      @include d-flex;
    }

    &__empty-data {
      @include d-flex(center, center, column);
      height: 100%;
    }

    &__text {
      margin-top: get-spacer(5);
    }

    &__wrapper {
      height: calc(100% - 14%);
    }

    &__row {
      @include d-flex(flex-start);
    }
  }
}
</style>
