<template>
  <v-dialog v-model="show" width="500" class="dialog">
    <template v-slot:activator="{ on, attrs }">
      <BaseButton
        large
        primary
        v-bind="attrs"
        v-on="on"
        prepend-icon="mdi-plus"
      >
        Adicionar
      </BaseButton>
    </template>

    <v-card class="dialog__main">
      <header class="dialog__header">
        <BaseButton @click="closeDialog" color="grey" icon absolute top right>
          <v-icon>mdi-close</v-icon>
        </BaseButton>

        <span class="dialog__title text-h6">Criar Categoria</span>
      </header>

      <v-card-text class="dialog__body">
        <v-form
          ref="formEditCategory"
          v-model="valid"
          lazy-validation
        >
          <BaseInput v-model="category.name" isRequired label="Nome" clearable />

          <v-row>
            <v-col class="pl-0">
              <BaseSelect
                isRequired
                :items="colors"
                label="Cor"
                item-text="name"
                item-value="id"
                clearable
                v-model="category.color_id"
              />
            </v-col>

            <v-col class="pr-0">
              <BaseInput v-model="category.icon" isRequired label="Nome do ícone" clearable />
            </v-col>
          </v-row>

          <BaseTextArea v-model="category.description" hide-details label="Descrição" />
        </v-form>
      </v-card-text>

      <footer class="d-flex justify-center">
        <BaseButton
          :loading="loading"
          @click="createCategory"
          large
          primary
        >
          Salvar
        </BaseButton>
      </footer>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Color from '@/services/Color';
import Category from '@/services/Category';
import IBodyCategory from '@/typings/IBodyCategory';
import { VuexModule } from '@/store/store.vuex';
import BaseButton from './base/BaseButton.vue';
import BaseInput from './base/BaseInput.vue';
import BaseSelect from './base/BaseSelect.vue';
import BaseDatePicker from './base/BaseDatePicker.vue';
import BaseTextArea from './base/BaseTextArea.vue';

@Component({
  components: {
    BaseInput,
    BaseButton,
    BaseSelect,
    BaseDatePicker,
    BaseTextArea,
  },
})
export default class DialogNewCategory extends Vue {
  show = false;

  colors = [];

  valid = true;

  loading = false;

  HttpColor = new Color();

  HttpCategory = new Category();

  $refs!: { formEditCategory: HTMLFormElement };

  category = {} as IBodyCategory;

  VuexModuleCategory = VuexModule.category;

  async createCategory() {
    this.loading = true;

    const { data } = await this.HttpCategory.create(this.category);

    this.$toast.success(data.message);

    const categories = this.VuexModuleCategory.listCategories;

    const payload = [...categories, data.data];

    this.VuexModuleCategory.changedCategories(payload);

    this.closeDialog();
  }

  closeDialog() {
    this.loading = false;
    this.show = false;
    this.$refs.formEditCategory.reset();
  }

  mounted() {
    this.getAllColors();
  }

  async getAllColors() {
    const { data } = await this.HttpColor.all();

    this.colors = data.data;
  }
}
</script>

<style lang="scss" scoped>
.dialog {
  border-radius: $border-radius;

  &__main {
    @include py(get-spacer(5));
    @include px(get-spacer(8));
  }

  &__header {
    @include d-flex(center, center, column);
  }

  &__title {
    font-weight: 500;
  }

  &__body {
    @include px(0 !important);
    @include pt(get-spacer(5) !important);
  }
}
</style>
