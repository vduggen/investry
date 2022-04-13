<template>
  <v-card
    v-bind="$attrs"
    v-on="$listeners"
    class="rounded-lg iy__box-shadow card-category"
  >
    <v-menu
      v-model="showMenu"
      absolute
      left
      offset-y
      offset-x
      origin="center center"
      transition="scale-transition"
      style="max-width: 600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" icon absolute top right>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="`${item.title}-${index}`"
          @click="item.action"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <div class="card-category__icon" :class="colors">
      <v-icon size="2rem" color="white">{{ iconComputed }}</v-icon>
    </div>

    <div class="card-category__title d-flex flex-column text-center my-4 px-6">
      <span class="text-h6 font-weight-bold">{{ category.name }}</span>

      <span class="subtitle-2 text--secondary">{{ category.description }}</span>
    </div>

    <div class="card-category__footer">
      <span class="subtitle-1">
        <strong class="text--secondary mr-1">Total: </strong>
        <span class="font-weight-medium">{{ 1500 | currencyMask }}</span>
      </span>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ICategory from '@/typings/ICategory';
import { VuexModule } from '@/store/store.vuex';
import Category from '../services/Category';
import FormatIcon from '../utils/formatIcon';

@Component
export default class CardCategory extends Vue {
  @Prop() category!: ICategory;

  VuexModuleCategory = VuexModule.category;

  listCategories = this.VuexModuleCategory.listCategories;

  changedLoading = this.VuexModuleCategory.changedLoading;

  changedCategories = this.VuexModuleCategory.changedCategories;

  showMenu = false;

  HttpCategory = new Category();

  items = [
    { title: 'Abrir', action: this.redirect },
    { title: 'Editar', action: this.handleDialog },
    { title: 'Excluir', action: this.deleteCategory },
  ];

  redirect() {
    this.$router.push({
      name: 'category-id',
      params: {
        id: `${this.category.id}`,
      },
    });
  }

  get colors() {
    const base = 'card-category__icon';

    return {
      [`${base}--${this.category.color_id.prefix}`]: true,
    };
  }

  handleDialog() {
    this.$emit('handleDialog', true);

    this.VuexModuleCategory.changedEditCategory(this.category);
  }

  async deleteCategory() {
    this.changedLoading(true);

    const response = await this.HttpCategory.delete(this.category.id);

    this.$toast.success(response.data.message);

    const payload = this.listCategories.filter(({ id }) => id !== this.category.id);

    this.changedCategories(payload);
    this.changedLoading(false);
  }

  get iconComputed() {
    const icon = new FormatIcon(this.category.icon);

    return icon.getIconName();
  }
}
</script>

<style lang="scss" scoped>
.card-category {
  @include d-flex(center, flex-start, column);
  width: 280px;
  min-height: 300px;
  padding: get-spacer(7) get-spacer(3);

  &__header {
    position: absolute;
    top: 0;
    width: 100%;

    padding: .5rem 0.7rem;

    @include d-flex(center, flex-end);
  }

  &__title,
  &__footer {
    padding: 0;
  }

  &__icon {
    @include set-w-h(65px);
    @include d-flex(center, center);
    @include rounded;

    &--error {
      background-color: $iy-red;
    }

    &--success {
      background-color: $iy-green;
    }
  }
}
</style>
