<template>
  <v-dialog v-model="show" width="500" class="dialog">
    <v-card class="dialog__main">
      <header class="dialog__header">
        <BaseButton
          @click="closeDialog"
          color="grey"
          icon
          absolute
          top
          right
        >
          <v-icon>mdi-close</v-icon>
        </BaseButton>

        <span class="dialog__title text-h6">Editar Categoria</span>
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
                :items="VuexModuleColors.getListColors"
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
          @click="editCategory"
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
import { Component, Vue, Prop } from 'vue-property-decorator';
import {
  updateCategory,
  TCategoryModelUpdate,
  ICategoryModel,
  ICategoryModelResponse,
} from '@/services/Category';
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
export default class DialogEditCategory extends Vue {
  @Prop({ default: false }) value!: boolean;

  valid = true;

  loading = false;

  $refs!: { formEditCategory: HTMLFormElement };

  category = {} as TCategoryModelUpdate;

  VuexModuleCategory = VuexModule.category;

  VuexModuleColors = VuexModule.colors;

  async editCategory() {
    this.loading = true;

    const body: ICategoryModel = {
      color_id: this.category.color_id,
      description: this.category.description,
      icon: this.category.icon,
      name: this.category.name,
    };

    const { data } = await updateCategory(this.category.id, body);

    this.$toast.success(data.message);

    const payload = this.updateListToPayload(data.data);
    this.VuexModuleCategory.changedCategories(payload);

    this.closeDialog();
  }

  updateListToPayload(dataApi: ICategoryModelResponse) {
    const categories = this.VuexModuleCategory.listCategories;

    return categories.map((currentCategory) => {
      /**
       * Se for a categoria selecionada substitui o objeto que existe com
       * as informações retornadas da API
       */
      if (currentCategory.id === this.category.id) {
        return dataApi;
      }

      // Caso não for apenas não substitui nada
      return currentCategory;
    });
  }

  closeDialog() {
    this.loading = false;
    this.show = false;
    this.$refs.formEditCategory.reset();
  }

  get show() {
    if (this.value) {
      const { categorySelected } = this.VuexModuleCategory;

      this.category = { ...categorySelected };
    }

    return this.value;
  }

  set show(val: boolean) {
    this.$emit('input', val);
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
