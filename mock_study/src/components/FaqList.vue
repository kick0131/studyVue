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
        <v-toolbar-title>ヘルプ・FAQ一覧</v-toolbar-title>
        <v-spacer />
        <v-btn text icon @click="$router.push('/faq/new')">
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
          <v-btn text icon @click="$router.push('/faq/' + item.id)" v-on="on">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </template>
        <span>編集</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <span v-on="on">
            <ConfirmDaialog title="ヘルプ・FAQ削除" message="ヘルプ・FAQを削除しますか？" :ok="abort" />
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
  data() {
    return {
      headers: [
        {
          text: "ソートキー",
          value: "sortKey"
        },
        {
          text: "カテゴリ",
          value: "category"
        },
        {
          text: "タイトル",
          value: "title.ja"
        },
        {
          text: "登録日",
          value: "date"
        },
        {
          text: "更新日",
          value: "update"
        },
        {
          text: "操作",
          value: "action",
          sortable: false
        }
      ],
      items: [
        {
          sortKey: "001",
          id: "2",
          category: "ヘルプ",
          title: { ja: "ヘルプ 1" },
          date: "2020/10/06 12:00:00",
          update: "2020/10/11 14:00:00"
        },
        {
          sortKey: "002",
          id: "1",
          category: "ヘルプ",
          title: { ja: "ヘルプ 2" },
          date: "2020/10/08 10:00:00",
          update: "2020/10/12 10:00:00"
        },
        {
          sortKey: "001",
          id: "5",
          category: "FAQ",
          title: { ja: "FAQ 1" },
          date: "2020/10/06 10:00:00",
          update: "2020/10/12 13:00:00"
        },
        {
          sortKey: "003",
          id: "4",
          category: "FAQ",
          title: { ja: "FAQ 2" },
          date: "2020/10/06 10:30:00",
          update: "2020/10/13 11:00:00"
        },
        {
          sortKey: "100",
          id: "3",
          category: "FAQ",
          title: { ja: "FAQ 3" },
          date: "2020/10/07 10:00:00",
          update: "2020/10/12 12:00:00"
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
      this.$router.push("/questionnaire");
    }
  }
};
</script>