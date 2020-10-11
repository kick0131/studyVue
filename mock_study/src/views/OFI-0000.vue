<template>
  <v-container>
    <OfficeList name="事務所情報" :headers="headers" :items="items" path="/office/" />
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
          text: "事務所コード",
          value: "code"
        },
        {
          text: "ソートキー",
          value: "sortKey"
        },
        {
          text: "事務所名",
          value: "name.ja"
        },
        {
          text: "住所",
          value: "address"
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
          code: "001",
          id: "1",
          name: { ja: "事務所 1" },
          address: "東京都 XX区 XXX XX-XX"
        },
        {
          sortKey: "002",
          code: "001",
          id: "2",
          name: { ja: "事務所 2" },
          address: "東京都 XX区 XXX XX-XX"
        },
        {
          sortKey: "100",
          code: "010",
          id: "3",
          name: { ja: "事務所 3" },
          address: "東京都 XX区 XXX XX-XX"
        },
        {
          sortKey: "100",
          code: "011",
          id: "4",
          name: { ja: "事務所 4" },
          address: "東京都 XX区 XXX XX-XX"
        },
        {
          sortKey: "001",
          code: "-",
          id: "5",
          name: { ja: "事務所 5" },
          address: "東京都 XX区 XXX XX-XX"
        },
        {
          sortKey: "100",
          code: "-",
          id: "6",
          name: { ja: "事務所 6" },
          address: "東京都 XX区 XXX XX-XX"
        }
      ]
    };
  },

  methods: {}
};
</script>