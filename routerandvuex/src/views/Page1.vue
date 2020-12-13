<template>
  <div class="page1">
    <h1>Page1</h1>
    {{checkId(id)}}
  </div>
</template>

<script>
export default {
  methods:{
    // vue-routerで受け取ったパスパラメータの存在チェック
    checkId:(arg)=>{
        if(arg===undefined){
          return 'undefined path parameter.'
        }else{
          return arg;
        }
    }
  },
  // router側で定義した同名のパラメータを引数の受け口として用意
  props:['id'],
}
</script>