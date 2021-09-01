// use isIpAddrRange
const isIpAddrRange = require('./cidr_ip.js');

// チェック対象のIP
const targetip = '192.168.0.1';

// ターゲットIPが許可IPリストに含まれているか
var isExist = false;

// CIDR形式の許可IPリスト
whitelist = [
  '10.127.0.0/16',
  '192.168.10.0/24',
  '192.168.0.0/16',
  '192.167.0.0/16',
]

// ターゲットIPが許可IPリストに含まれているかチェック
whitelist.forEach((elem, index) => {
  console.log(`${index}: ${elem}`);
  if( !isExist ){
    isExist = isIpAddrRange(targetip, elem)
  } 
});

console.log('in CIDR range? : ' + isExist);
