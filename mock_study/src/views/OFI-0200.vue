<template>
  <v-container>
    <v-form v-if="!error" ref="form" v-model="valid" :lazy-validation="lazy">
      <ControlHeader
        class="mb-10"
        :valid="valid"
        title="事務所編集"
        :update="update"
        :abort="abort"
        saveStr="保存"
      />
      <v-card>
        <LangTabs />
        <OfficeForm
          :label="labelSort"
          :data="doc.sortKey"
          :label1="labelName"
          :data1="doc.name.ja"
          :label2="labelAddress"
          :data2="doc.address.ja"
          :label3="labelCode"
          :data3="doc.code"
        />
      </v-card>
    </v-form>
    <DataNotFound v-else></DataNotFound>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    langTab: "ja",
    labelSort: "ソートキ※",
    labelName: "事務署名※",
    labelAddress: "住所※",
    labelCode: "事務所コード",
    valid: true,
    lazy: false,
    error: false,

    doc: {
      name: {
        ja: "",
        en: ""
      },
      address: {
        ja: "",
        en: ""
      },
      code: null,
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
    LangTabs: () => import("@/components/LangTabs"),
    OfficeForm: () => import("@/components/OfficeForm")
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
      this.$router.push("/office");
    },
    remove: function() {
      //削除
      this.abort();
    }
  }
};
</script>
