<template>
  <v-container>
    <OfficeList name="大使館情報" :headers="headers" :items="items" path="/embassy/" />
  </v-container>
</template>

<script>
export default {
  components: {
    OfficeList: () => import("@/components/OfficeList")
  },
  data() {
    return {
      headers: [
        {
          text: "ソートキー",
          value: "sortKey"
        },
        {
          text: "大使館名",
          value: "name.ja"
        },
        {
          text: "URL",
          value: "url"
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
          id: "1",
          name: { ja: "大使館 1" },
          url: "http://localhost:8080/embassy/1"
        },
        {
          sortKey: "002",
          id: "2",
          name: { ja: "大使館 2" },
          url: "http://localhost:8080/embassy/2"
        },
        {
          sortKey: "003",
          id: "3",
          name: { ja: "大使館 3" },
          url: "http://localhost:8080/embassy/3"
        },
        {
          sortKey: "004",
          id: "4",
          name: { ja: "大使館 4" },
          url: "http://localhost:8080/embassy/4"
        },
        {
          sortKey: "005",
          id: "5",
          name: { ja: "大使館 5" },
          url: "http://localhost:8080/embassy/5"
        }
      ]
    };
  },

  methods: {}
};
</script>