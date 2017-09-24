<template>
	<swipe class="my-swipe">
	    <swipe-item class="slide1"></swipe-item>
	    <swipe-item class="slide2"></swipe-item>
	    <!-- <swipe-item class="slide3"></swipe-item> -->
	</swipe>
</template>
<script type="text/javascript">
	require('vue-swipe/dist/vue-swipe.css');
    import {Swipe,SwipeItem} from 'vue-swipe'
    export default{
    	components:{
    		'swipe': Swipe,
    		'swipe-item': SwipeItem
    	},
        data:function(){
          return {}
        }
    }
</script>

<style type="text/css" scoped>
.my-swipe {
  height: 5rem;
  color: #fff;
  font-size:0.4rem;
  text-align: center;
}

.slide1 {
  /*background-color: #0089dc;*/
  background-image: url("../../static/img/swipe1.jpg");
  background-repeat: no-repeat;
  background-size: cover;

}

.slide2 {
  /*background-color: #ffd705;*/
  background-image: url("../../static/img/swipe2.jpg");
  background-repeat: no-repeat;
  background-size: cover;

}

/*.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}*/

</style>