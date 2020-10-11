<template>
  <v-data-table
    :headers="headers"
    :items="items"
    hide-default-footer
    :options.sync="options"
    class="mt-5"
  >
    <template v-slot:top>
      <v-toolbar dark flat color="#008080">
        <v-toolbar-title>{{listName}}</v-toolbar-title>
        <v-spacer />
        <v-btn text icon @click="$router.push(path+'new')">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-toolbar>
    </template>
    <template v-slot:item.disp="{ item }">
      <v-checkbox v-model="item.disp"></v-checkbox>
    </template>
    <template v-slot:item.action="{ item }">
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn text icon @click="$router.push(path + item.id)" v-on="on">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </template>
        <span>編集</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <span v-on="on">
            <ConfirmDaialog :title="title" :message="message" :ok="abort" />
          </span>
        </template>
        <span>削除</span>
      </v-tooltip>
    </template>
  </v-data-table>
</template>

<script>
export default {
  components: {
    ConfirmDaialog: () => import("@/components/ConfirmDaialog")
  },
  props: {
    name: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    },
    headers: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      options: {
        page: 1,
        itemsPerPage: -1
      },
      listName: this.name + "一覧",
      title: this.name + "削除",
      message: this.name + "を削除しますか？"
    };
  },

  methods: {
    abort: function() {
      this.$router.push("/office");
    }
  }
};
</script>