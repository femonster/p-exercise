<template>
<div>
    <zgk-header :searchData="aData" v-on:filterData="showChildFilter"></zgk-header>
    <!-- <zgk-header></zgk-header> -->
    <swiper></swiper>
    <zgk-list :listData="filtered" list-title="精选商品"></zgk-list>
</div>
</template>
<script type="text/javascript">
    import zgkHeader from '../components/zgkHeader.vue'
    import swiper from '../components/swiper.vue'
    import zgkList from "../components/zgkList.vue"

    export default{
      data:function() {
        return{
          aData:[],
          filtered:[]
        }
      },
      components:{
        "zgk-header":zgkHeader,
        "swiper":swiper,
        "zgk-list":zgkList
      },
      created:function(){
        this.getAjax();
        console.log(this.aData);  
      },
      methods:{
        showChildFilter:function(data) {
          this.filtered = data;
        },
        getAjax:function() {
          var successCallback=function(response) {
            this.aData = this.filtered = response.data.aData;
          }
          var errorCallback = function(response) {
              console.log(response)
          }
          this.$http.get("http://localhost:8080/mock/db.json")
          .then(successCallback,errorCallback);
        }
      }
    }
</script>
<style scoped>



</style>