<template>
  <v-container>
    <v-form v-if="!error" ref="form" v-model="valid" :lazy-validation="lazy">
      <template v-if="checkNew()">
        <ControlHeader
          class="mb-10"
          :valid="valid"
          title="お知らせ編集"
          :update="update"
          :abort="abort"
          saveStr="発信"
        />
      </template>
      <v-card>
        <LangTabs />
        <v-container>
          <v-text-field
            v-model="doc.title.ja"
            :rules="checkNew() ? requireRules:[]"
            :label="labelTitle"
            :readonly="!checkNew()"
          ></v-text-field>
          <v-textarea
            v-model="doc.content.ja"
            outlined
            :label="label"
            :rules="checkNew() ? requireRules:[]"
            auto-grow
            :readonly="!checkNew()"
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
    labelTitle: "お知らせタイトル※",
    label: "お知らせ内容※",
    valid: true,
    requireRules: [v => !!v || "必須項目です"],
    lazy: false,
    error: false,

    doc: {
      title: {
        ja: "",
        en: ""
      },
      content: {
        ja: "",
        en: ""
      },
      isDisp: true,
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
      return this.checkNew();
    }
  },

  methods: {
    update: function() {
      //更新
      this.abort();
    },
    abort: function() {
      this.$router.push("/notice");
    },
    remove: function() {
      //削除
      this.abort();
    },
    checkNew: function() {
      if (this.$route.params.id == "new") {
        return true;
      }
      return false;
    }
  }
};
</script>
