<template>
  <v-row>
    <v-col cols="12" md="2">
      <b>{{label}}</b>
    </v-col>
    <v-col cols="12" md="3">
      <v-btn @click.stop="getData(collection, subCollection);">
        <v-icon left>mdi-download</v-icon>エクスポート（全件）
      </v-btn>
    </v-col>
    <v-col cols="12" md="5">
      <v-file-input v-model="uploadedFile" label="jsonファイルをアップロードしてください" accept="application/json"></v-file-input>
    </v-col>
    <v-col cols="12" md="2">
      <v-btn :disabled="importBtnDisable" @click.stop="jsonImport(collection);">
        <v-icon left dark>mdi-upload</v-icon>インポート
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
const FILETYPE = "text/plain";
const FILEEXPAND = ".json";
const CREATEDAT = "createdAt";
const DELETEDAT = "deletedAt";
const UPDATEDAT = "updatedAt";
const SECONDS = "seconds";
const PARENTID = "parentID";
export default {
  props: {
    label: {
      type: String,
      default: ""
    },
    collection: {
      type: String,
      default: ""
    },
    subCollection: {
      type: String,
      default: ""
    }
  },
  data: () => ({
    importBtnDisable: true,
    exportData: {},
    uploadedFile: null
  }),
  watch: {
    uploadedFile: function() {
      if (typeof this.uploadedFile === "undefined") {
        this.importBtnDisable = true;
      } else if (this.uploadedFile !== null) {
        // ファイルが選択されていた場合、インポートボタン活性化
        this.importBtnDisable = false;
      } else {
        this.importBtnDisable = true;
      }
    }
  },

  methods: {
    /**
     * データ取得
     * @param {String} collectionName コレクション名
     * @param {String} subCollectionName サブコレクション名
     */
    getData: async function(collectionName, subCollectionName) {
      var vm = this;
      var idList = [];
      this.$store.commit("showLoadingDialog", true);
      // 親ドキュメントのIDを全て取得
      await this.$db
        .collection(collectionName)
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            idList.push(doc.id);
          });
        });

      // ID分ループ
      for (var i = 0; i < idList.length; i++) {
        vm.exportData[idList[i]] = [];
        // サブコレクションデータ取得
        var promise = vm.getSubCollectionData(
          collectionName,
          subCollectionName,
          idList[i]
        );
        await promise;
      }
      // データエクスポート
      this.jsonExport(collectionName);
    },
    /**
     * サブコレクションデータ取得
     * @param {String} collectionName コレクション名
     * @param {String} subCollectionName サブコレクション名
     * @param {String} parentId 親ドキュメントID
     */
    getSubCollectionData: function(
      collectionName,
      subCollectionName,
      parentId
    ) {
      var vm = this;
      var subPromiseList = [];
      var promise = new Promise(resolve => {
        // 言語分ループ
        for (var j = 0; j < vm.$define.LANGKEY.length; j++) {
          var path =
            collectionName +
            "/" +
            parentId +
            "/" +
            subCollectionName +
            vm.$define.LANGKEY[j];
          // 言語別ドキュメント取得
          var promise = vm.readSubCollection(path);
          subPromiseList.push(promise);
        }
        // 取得処理が終わったらエラーチェック
        Promise.all(subPromiseList).then(function(resultArray) {
          for (var i = 0; i < resultArray.length; i++) {
            var result = resultArray[i];
            // エラーチェック
            if (result.error) {
              // エラーログ出力
              console.log(result.error);
            } else if (result.doc) {
              var doc = result.doc.data();
              // サブコレクション名とドキュメントIDを追加
              doc.id = result.doc.id;
              doc.path = result.doc.ref.parent.id;
              vm.exportData[parentId].push(doc);
            }
          }
          resolve();
        });
      });
      return promise;
    },
    /**
     * データエクスポート
     * @param {String} collectionName コレクション名
     */
    jsonExport: function(collectionName) {
      try {
        // 取得したデータをファイルに出力 ファイル名：コレクション名.json
        const exportData = JSON.stringify(this.exportData);
        const blob = new Blob([exportData], { type: FILETYPE });
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = collectionName + FILEEXPAND;
        link.click();
        console.log("Export : " + collectionName);
      } catch (error) {
        console.log(error);
      }
      this.$store.commit("showLoadingDialog", false);
    },
    /**
     * データインポート
     * @param {String} collectionName コレクション名
     */
    jsonImport: function(collectionName) {
      this.$store.commit("showLoadingDialog", true);
      const vm = this;
      const db = this.$db;

      // ファイル読み込み
      const reader = new FileReader();
      reader.readAsText(this.uploadedFile);
      reader.onload = async function() {
        const jsonFile = JSON.parse(reader.result);
        for (let parentId in jsonFile) {
          var jsonObj = jsonFile[parentId];
          // 親ドキュメント登録
          try {
            await db
              .collection(collectionName)
              .doc(parentId)
              .set({});
          } catch {
            // エラーの場合終了
            console.log("ImportError : " + collectionName);
            vm.$store.commit("showLoadingDialog", false);
            return;
          }
          var subPromiseList = [];
          // 言語別データ分ループ
          for (var i = 0; i < jsonObj.length; i++) {
            // サブコレクション名とドキュメントIDを読み取って登録するオブジェクトから削除
            var subCollectionName = jsonObj[i].path;
            var docId = jsonObj[i].id;
            delete jsonObj[i].path;
            delete jsonObj[i].id;

            // タイムスタンプ変換
            if (jsonObj[i][CREATEDAT]) {
              jsonObj[i][CREATEDAT] = new Date(
                jsonObj[i][CREATEDAT][SECONDS] * 1000
              );
            }
            if (jsonObj[i][DELETEDAT]) {
              jsonObj[i][DELETEDAT] = new Date(
                jsonObj[i][DELETEDAT][SECONDS] * 1000
              );
            }
            if (jsonObj[i][UPDATEDAT]) {
              jsonObj[i][UPDATEDAT] = new Date(
                jsonObj[i][UPDATEDAT][SECONDS] * 1000
              );
            }

            var path =
              collectionName +
              "/" +
              jsonObj[i][PARENTID] +
              "/" +
              subCollectionName;

            // 言語別ドキュメント登録
            var promise = db
              .collection(path)
              .doc(docId)
              .set(jsonObj[i]);
            subPromiseList.push(promise);
          }
          // 言語別ドキュメントの登録処理が終わったらエラーチェック
          Promise.all(subPromiseList).catch(function() {
            // エラーの場合終了
            console.log("ImportError : " + collectionName);
            vm.$store.commit("showLoadingDialog", false);
            return;
          });
        }
        console.log("Import : " + collectionName);
        vm.$store.commit("showLoadingDialog", false);
      };
      vm.uploadedFile = null;
    }
  }
};
</script>
<style scoped>
.v-input {
  padding-top: 0;
}
</style>
