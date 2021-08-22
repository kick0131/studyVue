'use strict';

// Basic認証情報の生成
function createBasicAuthAccont(_id, _pw) {
  return Buffer.from((_id + ':' + _pw).toString(), 'binary').toString('base64');
}

// module.exportsでエクスポートし、Lambda参照可能とする
module.exports.handler = (event, context, callback) => {
// function handler(event, context, callback) {
  console.log('== handler start ==');
  console.log('-- event : ' + event);
  console.log('-- context : ' + context);
  console.log('-------------------');
  const request = event.Records[0].cf.request;
  const headers = request.headers;

  const authUser = 'admin'; // Basic認証のユーザー名
  const authPass = 'password'; // Basic認証のパスワード
  const authString = 'Basic ' + createBasicAuthAccont(authUser, authPass);

  // Basic認証ロジック
  console.log('== headers.authorization : ' + headers.authorization);
  if (typeof headers.authorization == 'undefined' || headers.authorization[0].value != authString) {
    // 認証NG
    const body = 'Unauthorized';
    const response = {
      status: '401',
      statusDescription: 'Unauthorized',
      body: body,
      headers: {
        'www-authenticate': [{ key: 'WWW-Authenticate', value: 'Basic' }]
      }
    };
    console.log('BasicAuth error');
    callback(null, response);
  } else {
    // 認証OK
    console.log('BasicAuth success');
    // callback(null, request);
    callback(true, request);
  }
}
