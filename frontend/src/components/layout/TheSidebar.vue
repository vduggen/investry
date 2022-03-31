<template>
  <v-navigation-drawer class="sidebar" :mini-variant.sync="mini" app>
    <header class="px-3 pt-5 pb-3 d-flex justify-center">
      <img
        src="@/assets/logo-iniciais.svg"
        alt="Logo com as iniciais IY"
        style="width: 32px"
      />
    </header>

    <v-list dense :shaped="!mini">
      <v-list-item-group color="primary">
        <div v-for="(menu, index) in menus" :key="`submenu-${index}`">
          <TheSidebarMenuChildren
            v-if="menu.children && menu.children.length > 0"
            :children="menu.children"
            :icon="menu.meta.icon"
            :nameRoute="menu.meta.name"
          />

          <TheSidebarMenu
            v-else
            :aliasRoute="menu.name"
            :icon="menu.meta.icon"
            :nameRoute="menu.meta.name"
          />
        </div>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { RouteConfig } from 'vue-router';
import TheSidebarMenu from './TheSidebarMenu.vue';
import TheSidebarMenuChildren from './TheSidebarMenuChildren.vue';

@Component({
  components: {
    TheSidebarMenu,
    TheSidebarMenuChildren,
  },
})
export default class TheSidebar extends Vue {
  mini = false;

  private routes: RouteConfig[] = [];

  setDrawer(value: boolean) {
    this.mini = value;
  }

  get menus() {
    this.routes = this.$router.options.routes || [];

    return this.filterRoutes();
  }

  private filterRoutes() {
    const tmp: RouteConfig[] = [];

    this.routes.forEach((route: RouteConfig) => {
      const { children, meta } = route;

      // verifica a flag viewMenu e verifica se existe rotas filhas
      const result = meta?.viewMenu && children
        ? TheSidebar.filterChildren(route, children)
        : route;

      tmp.push(result);
    });

    return tmp;
  }

  private static filterChildren(masterMenu: RouteConfig, children: RouteConfig[]): RouteConfig {
    const getFilterMenus = children.filter(({ meta }) => meta?.viewMenu);
    const hasAnyFilterResult = getFilterMenus.length > 0;

    const copyObj = masterMenu;

    if (hasAnyFilterResult) {
      copyObj.children = getFilterMenus;
    } else {
      delete copyObj.children;
    }

    return copyObj;
  }
}
</script>

<style lang="scss">
.sidebar {
  @extend .iy__box-shadow;
}
</style>
