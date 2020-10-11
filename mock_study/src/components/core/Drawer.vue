<template>
  <v-navigation-drawer
    v-model="inputValue"
    app
    color="#008348"
    dark
    floating
    mobile-break-point="991"
    persistent
  >
    <v-list dense>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="title">管理コンソール</v-list-item-title>
          <v-list-item-subtitle>{{ $route.name }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider />
      <template v-for="item in lists">
        <v-list-item
          link
          :to="item.path"
          v-if="item.kind == 'menu'"
          :key="item.name"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group
          color="white"
          v-else-if="item.kind == 'group'"
          :prepend-icon="item.icon"
          no-action
          :key="item.name"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item-content>
          </template>
          <template v-for="subItem in item.menu">
            <v-list-item
              v-if="subItem.kind == 'menu'"
              :key="subItem.name"
              link
              :to="subItem.path"
            >
              <v-list-item-content>
                <v-list-item-title v-text="subItem.name" />
              </v-list-item-content>
              <v-list-item-icon>
                <v-icon>{{ subItem.icon }}</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </template>
        </v-list-group>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<style>
.v-list-item__title {
  line-height: 1.4rem !important;
}
.v-list--dense {
  padding-top: 0px !important;
}
.v-list-item__icon:first-child {
  margin-right: 15px !important;
}
.v-list-group--no-action > .v-list-group__items > .v-list-item {
  padding-left: 50px !important;
}
</style>

<script>
import { mapMutations } from "vuex";
import paths from "@/router/paths";

export default {
  data: () => ({
    lists: paths,
  }),

  computed: {
    inputValue: {
      get() {
        return this.$store.state.app.drawer;
      },
      set(val) {
        this.setDrawer(val);
      },
    },
  },

  methods: {
    ...mapMutations("app", ["setDrawer", "toggleDrawer"]),
  },
};
</script>