<template>
  <v-list-item
    :to="{ name: aliasRoute }"
    link
    exact-path
  >
    <v-list-item-icon>
      <v-icon>{{ iconComputed }}</v-icon>
    </v-list-item-icon>

    <v-list-item-content>
      <v-list-item-title>
        {{ nameRoute }}
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import FormatIcon from '../../utils/formatIcon';

@Component({
})
export default class TheSidebarMenu extends Vue {
  @Prop({ default: '' }) aliasRoute!: string;

  @Prop({ default: '' }) icon!: string;

  @Prop({ default: '' }) nameRoute!: string;

  get iconComputed() {
    const icon = new FormatIcon(this.icon);

    return icon.getIconName();
  }
}
</script>
