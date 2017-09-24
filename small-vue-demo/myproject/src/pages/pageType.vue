<template>
<div class="type-wrap">
    <zgk-header :searchData="typeData" v-on:filterData="showChildFilter"></zgk-header>
    <router-link to="/" class="goback">返回主页面</router-link>
    <zgk-list :listData="renderData()" :list-title="typetext"></zgk-list>
</div>
</template>
<script type="text/javascript">
    import zgkHeader from '../components/zgkHeader.vue'
    import zgkList from "../components/zgkList.vue"

    export default{
      data:function() {
        return{
          listTitle:this.$route.params.uid,
          filtered:{},
          typejson:{}
        }
      },
      computed:{
        typetext:function() {
           switch(this.listTitle){
             case "zsq":
                return "张世奇系列"
                break;
             case "lqh":
                return "李奇鸿系列"
                break;
             case "lrh":
                return "罗荣辉系列"
                break;
             case "scp":
                return "石茶盘系列"
           }
        },
        typeData:function(){
            switch(this.listTitle){
             case "zsq":
                return this.typejson.zsData
                break;
             case "lqh":
                return this.typejson.lqData
                break;
             case "lrh":
                return this.typejson.lrData
                break;
             case "scp":
                return this.typejson.scData
           }
        }
      },
      components:{
        "zgk-header":zgkHeader,
        "zgk-list":zgkList
      },
      created:function(){
        this.getAjax();
        console.log(this.typejson);
      },
      methods:{
        getAjax:function(){
          var successCallback=function(response) {
            this.typejson = response.data;
          }
          var errorCallback = function(response) {
              console.log(response)
          }
          this.$http.get("http://localhost:8080/mock/db.json").then(successCallback,errorCallback);
        },
        showChildFilter:function(data) {
          this.filtered = data;
        },
        renderData:function() {
            if (JSON.stringify(this.filtered)=="{}") {
              return this.typeData;
            }else{
              return this.filtered;
            }
        }
      }

    }
</script>
<style scoped>
.goback{
    position: absolute;
    right: 0.6rem;
    top: 1.7rem;
    color: #000;
    font-size: 0.5rem;
}


</style>