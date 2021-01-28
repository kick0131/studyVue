<template>
  <v-container>
    <PropertyControlHeader
      v-model="editable"
      :valid="true"
      title="PDFデータ"
      :update="update"
      :abort="abort"
    />
    <v-form ref="form" v-model="valid" :lazy-validation="lazy">
      <v-card>
        <v-container>
          <v-row dense>
            <v-col cols="12" md="2" class="lang-label">
              <b>日本語</b>
            </v-col>
            <v-col cols="12" md="5">
              <FileInput placeholder="XXX_日本語_表紙.pdf" />
            </v-col>
            <v-col cols="12" md="5">
              <FileInput placeholder="XXX_日本語_本文.pdf" />
            </v-col>
          </v-row>
          <v-row dense>
            <v-col cols="12" md="2" class="lang-label">
              <b>英語</b>
            </v-col>
            <v-col cols="12" md="5">
              <FileInput placeholder="XXX_英語_表紙.pdf" />
            </v-col>
            <v-col cols="12" md="5">
              <FileInput placeholder="XXX_英語_本文.pdf" />
            </v-col>
          </v-row>
          <v-row dense>
            <v-col cols="12" md="2" class="lang-label">
              <b>ベトナム語</b>
            </v-col>
            <v-col cols="12" md="5">
              <FileInput placeholder="XXX_ベトナム語_表紙.pdf" />
            </v-col>
            <v-col cols="12" md="5">
              <FileInput placeholder="XXX_ベトナム語_本文.pdf" />
            </v-col>
          </v-row>
          <v-row dense>
            <v-col cols="12" md="2" class="lang-label">
              <b>中国語</b>
            </v-col>
            <v-col cols="12" md="5">
              <FileInput placeholder="XXX_中国語_表紙.pdf" />
            </v-col>
            <v-col cols="12" md="5">
              <FileInput placeholder="XXX_中国語_本文.pdf" />
            </v-col>
          </v-row>
          <v-row dense>
            <v-col cols="12" md="2" class="lang-label">
              <b>フィリピン語</b>
            </v-col>
            <v-col cols="12" md="5">
              <FileInput placeholder="XXX_フィリピン語_表紙.pdf" />
            </v-col>
            <v-col cols="12" md="5">
              <FileInput placeholder="XXX_フィリピン語_本文.pdf" />
            </v-col>
          </v-row>
          <v-row dense>
            <v-col cols="12" md="2" class="lang-label">
              <b>インドネシア語</b>
            </v-col>
            <v-col cols="12" md="5">
              <FileInput placeholder="XXX_インドネシア語_表紙.pdf" />
            </v-col>
            <v-col cols="12" md="5">
              <FileInput placeholder="XXX_インドネシア語_本文.pdf" />
            </v-col>
          </v-row>
          <v-row dense>
            <v-col cols="12" md="2" class="lang-label">
              <b>タイ語</b>
            </v-col>
            <v-col cols="12" md="5">
              <FileInput placeholder="XXX_タイ語_表紙.pdf" />
            </v-col>
            <v-col cols="12" md="5">
              <FileInput placeholder="XXX_タイ語_本文.pdf" />
            </v-col>
          </v-row>
          <v-row dense>
            <v-col cols="12" md="2" class="lang-label">
              <b>カンボジア語</b>
            </v-col>
            <v-col cols="12" md="5">
              <FileInput placeholder="XXX_カンボジア語_表紙.pdf" />
            </v-col>
            <v-col cols="12" md="5">
              <FileInput placeholder="XXX_カンボジア語_本文.pdf" />
            </v-col>
          </v-row>
          <v-row dense>
            <v-col cols="12" md="2" class="lang-label">
              <b>ミャンマー語</b>
            </v-col>
            <v-col cols="12" md="5">
              <FileInput placeholder="XXX_ミャンマー語_表紙.pdf" />
            </v-col>
            <v-col cols="12" md="5">
              <FileInput placeholder="XXX_ミャンマー語_本文.pdf" />
            </v-col>
          </v-row>
          <v-row dense>
            <v-col cols="12" md="2" class="lang-label">
              <b>モンゴル語</b>
            </v-col>
            <v-col cols="12" md="5">
              <FileInput placeholder="XXX_モンゴル語_表紙.pdf" />
            </v-col>
            <v-col cols="12" md="5">
              <FileInput placeholder="XXX_モンゴル語_本文.pdf" />
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-form>
  </v-container>
</template>
<style scoped>
.lang-label {
  text-align: center;
  margin: auto;
  border-bottom: solid 2px #46aa08;
}
.border {
  border-bottom: solid 2px #46aa08;
}
</style>

<script>
export default {
  data: () => ({
    editable: false
  }),

  components: {
    PropertyControlHeader: () => import("@/components/PropertyControlHeader"),
    FileInput: () => import("@/components/FileInput")
  },

  methods: {
    update: function() {}
  }
};
</script>