<template>
  <v-container>
    <v-btn :disabled="!selected.length > 0" color="success">表示</v-btn>
    <v-btn :disabled="!selected.length > 0" color="warning" class="ml-5">非表示</v-btn>
    <br />
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="items"
      :options.sync="options"
      show-select
      hide-default-footer
      class="mt-5"
      item-key="id"
    >
      <template v-slot:top>
        <v-toolbar dark flat color="#008080">
          <v-toolbar-title>お知らせ一覧</v-toolbar-title>
          <v-spacer />
          <v-btn text icon @click="$router.push('/notice/new')">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-toolbar>
      </template>
      <template v-slot:item.disp="{ item }">
        <template v-if="item.disp">表示</template>
        <template v-else>非表示</template>
      </template>
      <template v-slot:item.action="{ item }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn text icon @click="$router.push('/notice/' + item.id)" v-on="on">
              <v-icon>mdi-text-box-outline</v-icon>
            </v-btn>
          </template>
          <span>詳細</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <span v-on="on">
              <ConfirmDaialog title="お知らせ削除" message="お知らせを削除しますか？" :ok="abort" />
            </span>
          </template>
          <span>削除</span>
        </v-tooltip>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  components: {
    ConfirmDaialog: () => import("@/components/ConfirmDaialog")
  },
  data() {
    return {
      selected: [],
      valid: false,
      headers: [
        {
          text: "発信日",
          value: "date"
        },
        {
          text: "アプリ表示",
          value: "disp"
        },
        {
          text: "タイトル",
          value: "title.ja"
        },
        {
          text: "操作",
          value: "action",
          sortable: false
        }
      ],
      items: [
        {
          id: "5",
          disp: true,
          title: { ja: "サンプル5" },
          date: "2020/10/06 14:00:00"
        },
        {
          id: "4",
          disp: false,
          title: { ja: "サンプル4" },
          date: "2020/10/06 13:00:00"
        },
        {
          id: "3",
          disp: true,
          title: { ja: "サンプル3" },
          date: "2020/10/06 12:00:00"
        },
        {
          id: "2",
          disp: true,
          title: { ja: "サンプル2" },
          date: "2020/10/06 11:00:00"
        },
        {
          id: "1",
          disp: true,
          title: { ja: "サンプル1" },
          date: "2020/10/06 10:00:00"
        }
      ],
      options: {
        page: 1,
        itemsPerPage: -1
      }
    };
  },
  methods: {
    abort: function() {
      this.$router.push("/notice");
    }
  }
};
</script>