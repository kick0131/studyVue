let now = new Date();
let year = now.getFullYear();
let month = now.getMonth();
let day = now.getDate();
console.log('now   : ' + now);
console.log('year  : ' + year);
console.log('month : ' + month);
console.log('day   : ' + day);

// ゼロプレフィックス付与＋2桁に抑える
let month2 = ("0" + (now.getMonth() + 2)).slice(-2);
month2 = ("0" + (now.getMonth() + 2));
console.log('month : ' + month2);
