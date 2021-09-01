// IPアドレスがCIDR形式のIPアドレス帯に含まれているかのチェック

console.log('---------------------------');
console.log('check ipaddr in CIDR range.');
console.log('---------------------------');

// IPv4(X.X.X.X)形式のIPアドレスをNumber型に変換する
const ip2long = (ip) => parseInt(ip.split(".").map(e => Number(e).toString(2).padStart(8, '0')).join(''), 2)

// IPv4アドレスを32バイト整数とみなし、ネットワークアドレスを比較する
const _inRange = (remoteIp, acceptIp, cidr) => {
    console.log('remoteIp : ' + remoteIp + ' acceptIp : ' + acceptIp + ' cidr : ' + cidr);
    cidr = Number(cidr)
    const remoteIpNetwork = remoteIp >>> (32 - cidr)
    const acceptIpNetwork = acceptIp >>> (32 - cidr)
    return remoteIpNetwork === acceptIpNetwork
}

// _inRange()を文字列を引数に取る形式に書き換え
const isIpAddrRange = (remoteIp, acceptIp, cidr) => {
    return _inRange(ip2long(remoteIp), ip2long(acceptIp), cidr);
}

// _inRange()をCIDR形式の文字列対応に書き換え
// remoteIp     : 文字列のIPv4形式を期待('192.168.0.0')
// acceptCidrIp : CIDR付きのIPv4ネットワークアドレスを期待('192.168.0.0/16')
module.exports = isIpAddrRange2 = (remoteIp, acceptCidrIp) => {
    const ip = acceptCidrIp.split('/');
    const acceptIp = ip[0];
    const cidr = ip[1];
    return isIpAddrRange(remoteIp, acceptIp, cidr);
}

// ファイル単体で動作確認する場合、コメントを有効にする
// const targetip = '192.168.0.1';
// const cidrip = '192.168.0.0/16'
// console.log('in CIDR range? : ' + isIpAddrRange2(targetip, cidrip));
