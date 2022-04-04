<template>
  <v-container class="home">
    <v-row class="header">
      <v-col class="header__item header__item--left">
        <BaseHeader />
      </v-col>

      <v-col class="header__item header__item--right">
        <BaseButton large primary icon="mdi-plus">
          Adicionar
        </BaseButton>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="iy__h-100">
        <BaseWrapperPage>
          <v-row class="main__row">
            <div v-for="(category, index) in categories" :key="`category-${index}`">
              <v-col>
                <CardCategory
                  :icon="category.icon"
                  :title="category.name"
                  :color="category.color"
                  :description="category.description"
                  @click="$router.push({ name: 'home2' })"
                  :total="1500"
                />
              </v-col>
            </div>
          </v-row>
        </BaseWrapperPage>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseHeader from '../components/base/BaseHeader.vue';
import CardCategory from '../components/CardCategory.vue';
import BaseButton from '../components/base/BaseButton.vue';
import BaseWrapperPage from '../components/base/BaseWrapperPage.vue';
import categories from '../mocks/categories';
import ICategory from '../typings/ICategory';

@Component({
  components: {
    BaseWrapperPage,
    BaseButton,
    CardCategory,
    BaseHeader,
  },
})
export default class HomeView extends Vue {
  categories: ICategory[] = categories
}
</script>

<style lang="scss" scoped>
.home {
  height: 100%;

  .header__item {
    display: flex;
    align-items: center;

    &--left {
      justify-content: flex-start;
    }

    &--right {
      justify-content: flex-end;
    }
  }

  .main__row {
    @include d-flex;
  }
}
</style>
