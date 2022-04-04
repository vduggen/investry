<template>
  <v-dialog
    v-model="dialog"
    width="500"
    class="dialog"
  >
    <template v-slot:activator="{ on, attrs }">
      <BaseButton
        v-bind="attrs"
        v-on="on"
        large
        primary
        prepend-icon="mdi-plus"
      >
        Adicionar
      </BaseButton>
    </template>

    <v-card class="dialog__main">
      <header class="dialog__header">
        <BaseButton
            @click="dialog = false"
            color="grey"
            icon
            absolute
            top
            right
          >
          <v-icon>mdi-close</v-icon>
        </BaseButton>

        <span class="dialog__title text-h6">Novo Item</span>
      </header>

      <v-card-text class="dialog__body">
        <BaseInput isRequired label="Nome" clearable />

        <v-row>
          <v-col class="pl-0">
            <BaseInput
              v-model="price"
              v-money="money"
              isRequired
              label="Valor"
              clearable
              ref="productPrice"
              @click:clear="reset"
            />
          </v-col>

          <v-col class="pr-0">
            <BaseSelect
              isRequired
              :items="items"
              label="Categoria"
              item-text="name"
              clearable
            />
          </v-col>
        </v-row>

        <BaseDatePicker isRequired label="Data" />

        <BaseTextArea hide-details label="Descrição" />
      </v-card-text>

      <footer class="d-flex justify-center">
        <BaseButton @click="dialog = false" large primary>
          Salvar
        </BaseButton>
      </footer>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseButton from './base/BaseButton.vue';
import BaseInput from './base/BaseInput.vue';
import BaseSelect from './base/BaseSelect.vue';
import BaseDatePicker from './base/BaseDatePicker.vue';
import BaseTextArea from './base/BaseTextArea.vue';
import categories from '../mocks/categories';

@Component({
  components: {
    BaseInput,
    BaseButton,
    BaseSelect,
    BaseDatePicker,
    BaseTextArea,
  },
})

export default class DialogNewItem extends Vue {
  dialog = false;

  items = categories;

  price = 0;

  $refs!: {
    productPrice: HTMLFormElement
  }

  money = {
    decimal: ',',
    thousands: '.',
    prefix: 'R$ ',
    precision: 2,
    masked: false,
  }

  reset() {
    const input = this.$refs.productPrice.$el.querySelector('input');

    input.value = 0;
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
