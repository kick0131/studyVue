<script>
import { firestoreDb } from '@/common/FirestoreDb';

export default {

  // 動作未検証
  methods: {
    /**
     * DB登録処理
     * @param {String} collection 登録先コレクション名
     * @param {Object} doc 登録するドキュメント
     * @return {Object} Promiseオブジェクト
     */
    registDb: function (collection, doc) {
      var result = {
        collection: collection,
        doc: null,
        error: null
      };
      var promise = new Promise(resolve => {
        firestoreDb
          .collection(collection)
          .add(doc)
          .then(function (response) {
            // result.docに登録後のデータを設定
            result.doc = response;
            resolve(result);
          })
          .catch(function (error) {
            // エラーが発生した場合はresult.errorにエラーを設定
            result.error = error;
            resolve(result);
          });
      });
      return promise;
    },
    /**
     * DB更新処理
     * @param {String} collection 更新先コレクション名
     * @param {Object} doc 更新するドキュメント
     * @param {String} docId 更新するドキュメントID
     * @return {Object} Promiseオブジェクト
     */
    updateDb: function (collection, doc, docId) {
      var result = {
        collection: collection,
        doc: null,
        error: null
      };
      if (docId && docId != '') {
        var promise = new Promise(resolve => {
          firestoreDb
            .collection(collection)
            .doc(docId)
            .set(doc)
            .then(function () {
              // result.docに更新後のデータを設定
              // IDログ出力するため返却値に追加
              doc.id = docId;
              result.doc = doc;
              resolve(result);
            })
            .catch(function (error) {
              result.error = error;
              resolve(result);
            });
        });
        return promise;
      } else {
        // エラーが発生した場合はresult.errorにエラーを設定
        return this.registDb(collection, doc);
      }
    },
    /**
     * DB読込処理
     * @param {String} collection 取得するコレクション名
     * @param {String} id 取得するドキュメント
     * @return {Object} Promiseオブジェクト
     */
    readDb: function (collection, id) {
      var result = {
        collection: collection,
        doc: null,
        error: null
      };
      var promise = new Promise(resolve => {
        firestoreDb
          .collection(collection)
          .doc(id)
          .get()
          .then(snapshot => {
            if (snapshot.exists) {
              // データが取得できた場合はresult.docに取得データを設定
              result.doc = snapshot.data();
              resolve(result);
            } else {
              resolve(result);
            }
          })
          .catch(function (error) {
            // エラーが発生した場合はresult.errorにエラーを設定
            result.error = error;
            resolve(result);
          });
      });
      return promise;
    },
    /**
     * サブコレクション読込処理
     * @param {String} collection 取得するコレクション名
     * @return {Object} Promiseオブジェクト
     */
    readSubCollection: function (collection) {
      var result = {
        collection: collection,
        doc: null,
        error: null
      };
      var promise = new Promise(resolve => {
        firestoreDb
          .collection(collection)
          .get()
          .then(function (querySnapshot) {
            // サブコレクションのデータを返却
            // 仕様上、2件以上取得できることはない
            querySnapshot.forEach(function (doc) {
              // データが取得できた場合はresult.docに取得データを設定
              result.doc = doc;
            });
            resolve(result);
          })
          .catch(function (error) {
            // エラーが発生した場合はresult.errorにエラーを設定
            result.error = error;
            resolve(result);
          });
      });
      return promise;
    },
    /**
     * 削除フラグ更新処理
     * @param {String} collection 更新先コレクション名
     * @param {Object} id 更新するドキュメントID
     * @return {Object} Promiseオブジェクト
     */
    deleteDb: function (collection, id) {
      var result = {
        collection: collection,
        doc: null,
        error: null
      };
      var promise = new Promise(resolve => {
        // deleteflagをtrueで更新
        firestoreDb
          .collection(collection)
          .doc(id)
          .update({ deleteflag: true })
          .then(function (response) {
            // result.docに更新後のデータを設定
            // IDログ出力するため返却値に追加
            response.id = id;
            result.doc = response;
            resolve(result);
          })
          .catch(function (error) {
            // エラーが発生した場合はresult.errorにエラーを設定
            result.error = error;
            resolve(result);
          });
      });
      return promise;
    }
	},
	created: function(){
		// 2回呼ばれるが何故？
		console.log('FirestoreDb.vue created!')
	},
	mounted: function(){
		console.log('FirestoreDb.vue mounted!')
		this.$store.dispatch('bindClients')
		console.log('dispached')
	},
	unmounted: function(){
		console.log('FirestoreDb.vue unmounted!')
		this.$store.dispatch('unbindClients')
		console.log('dispached')
	}
};
</script>
