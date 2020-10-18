export default Object.freeze({
  // firestoreで取得したドキュメントの内容表示
  viewdocs : (docs)=>{
    console.log("size     : " + docs.size);
    console.log("empty     : " + docs.empty);
    console.log("map.ids : " + docs.docs.map((doc) => doc.id));
    docs.forEach((doc) => {
      console.log(doc.id + " : " + JSON.stringify(doc.data()));
    });
}
});