<template>
	<div class="shop-desc">
        <header class="desc_header">
            <!-- <router-link to="/" class="back"><span> < 返回 </span></router-link> -->
            <span onclick="window.history.go(-1)" class="back"> < 返回 </span>
            <p class="desc_title">详情介绍</p>
        </header>
        <div class="article">
            <h1 v-text="typeitems.title"></h1>
            <img :src="item" alt="" v-for="item in typeitems.imgurl">
            <p v-cloak>价格：￥{{typeitems.price}}</p>
            <p v-cloak>简介：{{typeitems.desc}}</p>
        </div>
    </div>
</template>
<script>

	export default{
      data:function() {
        return {
           oid:this.$route.params.id,
           type:this.$route.params.type,
           typesjson:{}
        }
      },
      computed:{
        typeitems:function(){
            switch(this.type){
             case "zsq":
                return this.findIndex("zsData",this.oid)[0]
                break;
             case "lqh":
                return this.findIndex("lqData",this.oid)[0]
                break;
             case "lrh":
                return this.findIndex("lrData",this.oid)[0]
                break;
             case "scp":
                return this.findIndex("scData",this.oid)[0]
                break;
             case "jx":
                return this.findIndex("aData",this.oid)[0]
                break;
           }
        }
      },
      created:function(){
        this.getAjax();
      },
      methods:{
        getAjax:function(){
           var successCallback=function(response) {
             this.typesjson= response.data;
             console.log(this.typesjson["scData"]);
          }
          var errorCallback = function(response) {
              console.log(response)
          }
          this.$http.get("http://localhost:8080/mock/db.json")
          .then(successCallback,errorCallback);
        },
        findIndex:function(obj,num) {
            var typeObj = this.typesjson[obj];
            console.log(typeObj);
            return typeObj.filter(function (item) {
            return item.oindex==num;

          })
        }
        
      }
	}
</script>

<style scoped>
/* desc */
body{
    background-color: #ddd;
}
.shop-desc{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-bottom: 2rem;
}

.shop-desc .desc_header{
  width: 100%;
  height: 1.3rem;
  background-color: rgb(0,140,0);
}

.shop-desc .desc_header > .back{
  display: inline-block;
  width: 24%;
  font-size: 0.533333rem;
  text-align: center;
  line-height: 1.3rem;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
}
.shop-desc .desc_header>p{
  display: inline-block;
  height: 1.3rem;
  line-height: 1.3rem;
  color: #fff;
  text-align: center;
  font-size: 0.533333rem;
  width: 100%;

}

.shop-desc .article{
  box-sizing: border-box;
  width: 100%;
  padding: 0.213333rem;

}
.shop-desc .article h1{
  padding-top: 0.013333rem;
  padding-bottom: 0.266667rem;
  text-align: center;
}
.shop-desc .article img{
  width: 100%;
}

.shop-desc .article p{
  /* text-indent:0.8rem; */
  font-size: 0.4rem;
  line-height: 1.5;
}
</style>