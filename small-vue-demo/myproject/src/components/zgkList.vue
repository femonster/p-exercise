<template>
	<div class="list">
        <h3>{{listTitle}}</h3>
        <ul class="list-wrap">
            <li class="list-item" v-for="(item,index) in listData">
            <router-link :to="{name:'desc',params:{type:item.type,id:item.oindex}}"><img :src="item.fenimg" alt=""></router-link>
            </li>
        </ul>
    </div>
</template>

<script type="text/javascript">
	export default{
		props:["listData","listTitle"],
		data:function() {
			return {
			
			}
		}

	}
</script>

<style type="text/css" scoped>
.list{
  width: 100%;

}
.list h3{
  padding:0.28rem 0 0.2rem 0.28rem;
  font-size: 0.533333rem;
  border-bottom: 2px solid green;
  width: 30%;
  margin-left: 0.2rem;
}
.list .list-wrap{
  width: 90%;
  margin: 0.2rem auto 1.4rem;
  font-size: 0;
}
.list .list-wrap .list-item{
  width: 48%;
  display: inline-block;
  height: 4rem;
  margin-right: 0.09rem;
  margin-left: 0.09rem;
  margin-bottom: 0.28rem;
  vertical-align: top;
  overflow: hidden;
  border-radius: 4px;
  font-size: 0.4rem;
  box-shadow: 2px 2px 7px rgba(0,0,0,.5);
}
.list .list-wrap .list-item img{
  width: 100%;
  height: 100%;
}

</style>