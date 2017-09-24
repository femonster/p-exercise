<template>
  <header class="header">
      <img src="../../static/img/logo.jpg" alt="" class="logo">
      <p class="header-title">天福茗茶</p>
      <img src="../../static/img/sousuo.png" alt="" class="sousuo" @click="inputwidth=!inputwidth" >
      <input type="text" class="search-inp" placeholder="键入自动搜索,再次点击缩回" :class="{inp_active:inputwidth}" v-model="searchStr" v-on:input="filterData">
  </header>
</template>

<script type="text/javascript">
    export default{
        props:["searchData"],
        data:function(){
          return {
            inputwidth:false,
            searchStr:""
          }
        },
        methods:{
          filterData:function() {
            var search = this.searchStr.trim();
            var sta;
            if (search) {
                console.log(this.searchData);
                sta = this.searchData.filter(function(product) {
                    return Object.keys(product).some(function(key) {
                        return String(product[key]).toLowerCase().indexOf(search) > -1
                    })
                })
                console.log(sta);
            }else{
                sta = this.searchData;
            }
            this.$emit("filterData",sta);
          }
        }
    }
</script>

<style scoped>
.header{
  width: 100%;
  height: 1.3rem;
  background-color: rgb(0,140,0);
  position: relative;
}
.header .logo{
  position: absolute;
  height: 1.3rem;
  left: 0.2rem;
  top: 0;
}

.header .sousuo{
  position: absolute;
  height: 0.7rem;
  right: 0.4rem;
  top: 0.3rem;
}

.header .search-inp{
    width: 0;
    height: 1rem;
    position: absolute;
    top: 0.15rem;
    right: 1.4rem;
    border: none;
    border-radius: 20px;
    text-indent: 0.533333rem;
    font-size: 0.4rem;
    transition:width 0.7s ease-out;

}
.header .inp_active{
  width: 7rem;
}
.header p{
  height: 1.3rem;
  line-height: 1.3rem;
  width: 100%;
  color: #fff;
  text-align: center;
  font-size: 0.533333rem;
  display: inline-block;
}
</style>