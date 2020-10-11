<template>
  <v-container>
    <v-form v-if="!error" ref="form" v-model="valid" :lazy-validation="lazy">
      <ControlHeader
        class="mb-10"
        :valid="valid"
        title="ヘルプ・FAQ編集"
        :update="update"
        :abort="abort"
        saveStr="保存"
      />
      <v-card>
        <LangTabs />
        <v-container>
          <v-text-field :v-model="doc.sortKey" :rules="requireRules" :label="labelSort"></v-text-field>
          <v-radio-group v-model="doc.category" row>
            <v-radio :label="labelHelp" value="HELP" />
            <v-radio :label="labelFaq" value="FAQ" />
          </v-radio-group>
          <v-text-field v-model="doc.title.ja" :rules="requireRules" :label="labelTitle"></v-text-field>
          <v-text-field v-model="doc.url.ja" :rules="requireRules" :label="labelUrl"></v-text-field>
          <v-textarea
            v-model="doc.content.ja"
            outlined
            :label="label"
            :rules="requireRules"
            auto-grow
          ></v-textarea>
        </v-container>
      </v-card>
    </v-form>
    <DataNotFound v-else></DataNotFound>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    langTab: "ja",
    labelSort: "ソートキー※",
    labelHelp: "ヘルプ",
    labelFaq: "FAQ",
    labelTitle: "タイトル※",
    labelUrl: "URL※",
    label: "内容※",
    valid: true,
    requireRules: [v => !!v || "必須項目です"],
    lazy: false,
    error: false,

    doc: {
      category: "FAQ",
      title: {
        ja: "",
        en: ""
      },
      url: {
        ja: "",
        en: ""
      },
      content: {
        ja: "",
        en: ""
      },
      sortKey: null,
      isDelete: false
    }
  }),

  watch: {
    $route: {
      immediate: true,
      handler(route) {
        if (route.params.id != "new") {
          //新規
        }
      }
    }
  },

  components: {
    ControlHeader: () => import("@/components/ControlHeader"),
    LangTabs: () => import("@/components/LangTabs")
  },

  computed: {
    isNew: function() {
      if (this.$route.params.id == "new") {
        return true;
      }
      return false;
    }
  },

  methods: {
    update: function() {
      //更新
      this.abort();
    },
    abort: function() {
      this.$router.push("/faq");
    },
    remove: function() {
      //削除
      this.abort();
    }
  }
};
</script>
