<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- 実行メソッドを切り替えて動作確認 -->
    <button @click="callPromise2">実行</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    doSomething: function() {
      alert('hello!');
    },
    // Promiseの動作検証1
    // doPromise   :内部パラメータを設定するPromiseを返す
    // callPromise :同期待ち受けして内部パラメータを取り出す
    doPromise: function() {
      var result = {
        name: 'Adam',
        age: 30
      };
      console.log('== doPromise start');
      var promise = new Promise(resolve => {
        resolve(result);
      });
      console.log('== doPromise end' + result);
      return promise;
    },
    callPromise: async function() {
      var value = {};
      console.log('== callPromise start');
      var result = this.doPromise();
      await result.then(function(resolve) {
        console.log('== resolve');
        value = resolve;
      });
      console.log('name : ' + value.name);
      console.log('age  : ' + value.age);
      console.log('== callPromise end');
    },
    // Promiseの動作検証2
    // doPromise   :resolve,rejectを呼ぶだけのPromiseを返す
    // callPromise :メソッドチェインの動作確認、
    // 本当はrejectのチェインを確認したかった
    doPromise2: function() {
      console.log('== doPromise start');
      var arg = 'P2 arg';
      var promise = new Promise(
        resolve => {
          resolve(arg);
        },
        reject => {
          reject(arg);
        }
      );
      console.log('== doPromise end');
      return promise;
    },
    doReject: function() {
      return Promise.reject(new Error('This is reject promise.'));
    },
    callPromise2: function() {
      console.log('== doPromise2 ==');
      var result = this.doPromise2();
      result
        .then(
          // resolve
          function(value) {
            console.log('== resolve ' + value);
            // 次のthenの引数になる
            return 'abcde';
          },
          // reject
          function(value) {
            console.log('== reject ' + value);
            // 次のthenの引数になる
            return 'EFGHI';
          }
        )
        .then(
          function(value) {
            console.log('== resolve2 ' + value);
          },
          function(value) {
            console.log('== reject2 ' + value);
          }
        );
      console.log('== doReject ==');
      result = this.doReject();
      result
        .then(
          // resolve
          function(value) {
            console.log('== resolve ' + value);
            // 次のthenの引数になる
            return 'abcde';
          },
          // reject
          function(value) {
            console.log('== reject ' + value);
            // 次のthenの引数になる
            // 新しいPromiseを生成するのでここでReject状態のPromiseを
            // 返さない場合次のthenではresolveが実行される
            return 'EFGHI';
          }
        )
        .then(
          function(value) {
            console.log('== resolve2 ' + value);
          },
          function(value) {
            console.log('== reject2 ' + value);
          }
        );

      console.log('== callPromise end');
    }
  }
};
</script>

<style scoped></style>
