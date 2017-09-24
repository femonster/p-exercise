<template>
  <div id="app">
    <transition name="slide-fade" mode="out-in">
        <router-view :key="key"></router-view>
    </transition>
      <footer class="footer">
        <ul>
          <li><router-link :to="{name:'type',params:{uid:'zsq'}}">张世奇系列</router-link></li>
          <li><router-link :to="{name:'type',params:{uid:'lqh'}}">李奇鸿系列</router-link></li>
          <li><router-link :to="{name:'type',params:{uid:'lrh'}}">罗荣辉系列</router-link></li>
          <li><router-link :to="{name:'type',params:{uid:'scp'}}">石茶盘系列</router-link></li>
        </ul>
      </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed:{
    key:function() {
         return this.$route.name !== undefined? this.$route.name + +new Date(): this.$route + +new Date()
    }
  }
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

#app{
  min-height: 100%;
}
.footer{
  width: 100%;
  height: 1.3rem;
  position: fixed;
  bottom: 0;
  border-top:1px solid #ddd;
  box-shadow: 0px -2px 7px rgba(0, 0, 0, 0.5);
  background-color: #fff;
  z-index: 1000;
}

.footer ul{
  width: 100%;
  height: 100%;
  font-size: 0;
}
.footer ul li{
  display: inline-block;
  width: 25%;
  height: 100%;
  line-height: 1.3rem;
  font-size: 0.453333rem;
  text-align: center;
  box-sizing: border-box;
  border-right: 1px solid #ddd;
}
.footer ul li a{
  width: 100%;
  height: 100%;
  display: block;
  color: #000;
  text-decoration: none;
}
.footer ul li:active{
  background-color: rgb(0,132,57);
  color: #fff;
}
.footer ul li:last-child{
  border-right: none;
}
</style>
