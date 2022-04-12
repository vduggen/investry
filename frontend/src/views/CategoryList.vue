<template>
  <v-container class="home">
    <BaseHeader :viewRedirect="false">
      <template #right>
        <DialogNewCategory />
      </template>
    </BaseHeader>

    <v-row class="main__wrapper">
      <v-col class="iy__h-100">
        <BaseWrapperPage>
          <div class="main__loader" v-if="loading">
            <v-progress-circular
              indeterminate
              color="primary"
              :size="70"
            />
          </div>

          <v-row v-if="getCategories.length > 0" class="main__row">
            <div v-for="(category, index) in getCategories" :key="`category-${index}`">
              <v-col>
                <CardCategory :category="category" />
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
import { mapGetters } from 'vuex';
import BaseHeader from '../components/base/BaseHeader.vue';
import CardCategory from '../components/CardCategory.vue';
import BaseWrapperPage from '../components/base/BaseWrapperPage.vue';
import DialogNewCategory from '../components/DialogNewCategory.vue';
import Category from '../services/Category';
import BaseButton from '../components/base/BaseButton.vue';
import { categoriesVuex } from '../store';

const CategoryListProps = Vue.extend({
  computed: {
    ...mapGetters(['getCategories']),
  },
});

@Component({
  components: {
    DialogNewCategory,
    BaseWrapperPage,
    CardCategory,
    BaseHeader,
    BaseButton,
  },
})
export default class CategoryList extends CategoryListProps {
  loading = false;

  HttpCategory = new Category();

  mounted() {
    this.getAllCategories();
  }

  async getAllCategories() {
    this.loading = true;

    const { data } = await this.HttpCategory.all();

    this.$store.dispatch(categoriesVuex.GET_CATEGORIES, data.data);

    this.loading = false;
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
      height: calc(100% - 68px);
    }

    &__row {
      @include d-flex;
    }
  }
}
</style>
