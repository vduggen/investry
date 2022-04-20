<template>
  <v-row class="header">
    <v-col class="header__item header__item--left">
      <BaseButton
        v-if="viewRedirect"
        @click="$router.go(-1)"
        class="mr-3"
        icon
      >
        <v-icon>mdi-arrow-left</v-icon>
      </BaseButton>

      <div class="d-flex flex-column">
        <span class="text-h4 font-weight-bold">{{ titleComputed }}</span>
        <span class="subtitle-1 text--secondary">{{ VuexModuleComponents.getCurrentDate }}</span>
      </div>
    </v-col>

    <v-col class="header__item header__item--right">
      <slot name="right" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import dayjs from 'dayjs';
import { Component, Prop, Vue } from 'vue-property-decorator';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/pt';
import BaseButton from './BaseButton.vue';
import { VuexModule } from '@/store/store.vuex';

const BaseHeaderProps = Vue.extend({
  components: {
    BaseButton,
  },
});

@Component
export default class BaseHeader extends BaseHeaderProps {
  @Prop({ default: '' }) title!: string;

  @Prop({ default: true }) viewRedirect!: boolean;

  VuexModuleComponents = VuexModule.components;

  get titleComputed(): string | undefined {
    if (this.title) {
      return this.title;
    }

    return this.$route.meta?.name;
  }

  mounted() {
    if (this.VuexModuleComponents.dateIsEmpty) {
      dayjs.locale('pt');
      dayjs.extend(localizedFormat);

      const payload = dayjs().locale('pt-br').format('LL');

      this.VuexModuleComponents.changedCurrentDate(payload);
    }
  }
}
</script>

<style lang="scss">
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
</style>
