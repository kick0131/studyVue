// Basic認証用アカウント作成メソッド
function createBasicAuthAccont(_id, _pw) {
  return Buffer.from((_id + ':' + _pw).toString(), 'binary').toString('base64');
}
console.log(createBasicAuthAccont('admin', 'password'));
