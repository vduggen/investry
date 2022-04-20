<template>
  <v-card
    v-bind="$attrs"
    v-on="$listeners"
    class="iy__box-shadow card-category"
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

    <div class="card-category__texts">
      <div class="card-category__heading">
        <span class="card-category__name">{{ category.name }}</span>
      </div>

      <span class="card-category__description">{{ category.description }}</span>
    </div>

    <div class="card-category__footer">
      <span class="card-category__total">
        <strong class="card-category__label">Total: </strong>
        <span class="card-category__value">{{ category.cash_flow_total | currencyMask }}</span>
      </span>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { VuexModule } from '@/store/store.vuex';
import {
  deleteCategory,
  ICategoryModelResponse,
  TCategoryModelUpdate,
} from '@/services/Category';
import FormatIcon from '../utils/formatIcon';

@Component
export default class CardCategory extends Vue {
  @Prop() category!: ICategoryModelResponse;

  VuexModuleCategory = VuexModule.category;

  listCategories = this.VuexModuleCategory.listCategories;

  changedLoading = this.VuexModuleCategory.changedLoading;

  changedCategories = this.VuexModuleCategory.changedCategories;

  showMenu = false;

  items = [
    { title: 'Abrir', action: this.redirect },
    { title: 'Editar', action: this.handleDialogEditCategory },
    { title: 'Excluir', action: this.httpDeleteCategory },
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

  handleDialogEditCategory() {
    this.$emit('handleDialog', true);

    const payload: TCategoryModelUpdate = {
      id: this.category.id,
      name: this.category.name,
      icon: this.category.icon,
      description: this.category.description,
      color_id: this.category.color_id.id,
    };

    this.VuexModuleCategory.changedEditCategory(payload);
  }

  async httpDeleteCategory() {
    this.changedLoading(true);

    const { data } = await deleteCategory(this.category.id);

    this.$toast.success(data.message);
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
  border-radius: get-rounded('lg') !important;
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

  &__texts {
    @include d-flex(center, center, column);
    text-align: center;
    margin-top: get-spacer(4);
    margin-bottom: get-spacer(4);
  }

  &__heading {
    display: flex;
    align-items: center;
  }

  &__name {
    @include text('h6');
    font-weight: 700;
  }

  &__type {
    @include text('subtitle-1');
    color: text-variant('secondary');
    margin-left: get-spacer(1);
    font-weight: 500;
  }

  &__description {
    @include text('subtitle-2');
    color: text-variant('secondary');
    font-weight: 400;
  }

  &__total {
    @include text('subtitle-1');
  }

  &__label {
    color: text-variant('secondary');
    margin-right: get-spacer(1);
  }

  &__value {
    font-weight: 500;
  }

  &__texts,
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
