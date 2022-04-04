<template>
  <v-list-group :append-icon="icon" no-action>
    <template v-slot:activator>
      <v-list-item-content>
        <v-list-item-title>
          {{ nameRoute }}
        </v-list-item-title>
      </v-list-item-content>
    </template>

    <v-list-item
      v-for="(child, childIndex) in children"
      :key="`submenu-${childIndex}`"
      link
      :to="{ name: child.name }"
    >
      <v-list-item-content>
        <v-list-item-title>
          {{ child.meta.name }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list-group>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { RouteConfig } from 'vue-router';

@Component({})
export default class TheSidebarMenuChildren extends Vue {
  @Prop({ default: [] }) children!: RouteConfig[];

  @Prop({ default: '' }) icon!: string;

  @Prop({ default: '' }) nameRoute!: string;
}
</script>

<style scoped></style>
