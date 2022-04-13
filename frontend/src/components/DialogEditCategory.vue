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
import Color from '@/services/Color';
import Category from '@/services/Category';
import { VuexModule } from '@/store/store.vuex';
import IBodyCategory from '@/typings/IBodyCategory';
import BaseButton from './base/BaseButton.vue';
import BaseInput from './base/BaseInput.vue';
import BaseSelect from './base/BaseSelect.vue';
import BaseDatePicker from './base/BaseDatePicker.vue';
import BaseTextArea from './base/BaseTextArea.vue';

interface InputsValue extends IBodyCategory {
  id: number;
}

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

  colors = [];

  valid = true;

  loading = false;

  HttpColor = new Color();

  HttpCategory = new Category();

  $refs!: { formEditCategory: HTMLFormElement };

  category = {} as InputsValue;

  VuexModuleCategory = VuexModule.category;

  async editCategory() {
    this.loading = true;

    const body: IBodyCategory = {
      color_id: Number(this.category.color_id),
      description: this.category.description,
      icon: this.category.icon,
      name: this.category.name,
    };

    const { data } = await this.HttpCategory.update(this.category.id, body);

    this.$toast.success(data.message);

    const categories = this.VuexModuleCategory.listCategories;

    const payload = categories.map((category) => (category.id === this.category.id
      ? data.data
      : category
    ));

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

  get show() {
    if (this.value) {
      const { categorySelected } = this.VuexModuleCategory;

      this.category = {
        description: categorySelected.description,
        icon: categorySelected.icon,
        id: categorySelected.id,
        name: categorySelected.name,
        color_id: Number(categorySelected.color_id.id),
      };
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
