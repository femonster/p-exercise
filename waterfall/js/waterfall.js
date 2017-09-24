

var waterPage={
    // 瀑布流布局
    waterfall:function(parent,item){
        var oWrap = document.querySelector(parent);
        var aItem = oWrap.querySelectorAll(item);

        for (var i = 0; i < aItem.length; i++) {
            aItem[i].style.position = "static";
        }
        var itemW = aItem[0].offsetWidth;
        var num = Math.floor(document.documentElement.clientWidth / itemW);
        oWrap.style.cssText = "width:" + itemW * num + "px;margin:0 auto;opacity:1;";

        var cloumnArr = []; //记录每一列的高度
        for (var i = 0; i < aItem.length; i++) {
            var itemH = aItem[i].offsetHeight;
            if (i < num) {
                cloumnArr[i] = itemH;
            } else {
                var minH = Math.min.apply(null, cloumnArr);
                var minHindex = cloumnArr.indexOf(minH);
                aItem[i].style.position = "absolute";
                aItem[i].style.top = minH + "px";
                aItem[i].style.left = aItem[minHindex].offsetLeft + "px";
                cloumnArr[minHindex] += aItem[i].offsetHeight;
            }
        }
    },
    // 渲染DOM
    render:function(datajson,w){
        var oMain = document.getElementById('main');
        var data = datajson.img;
        var str = "";
        var imageflag=0;
        var self=this;
        for (var i = 0; i < data.length; i++) {
            str += '<div class="item">\
                    <div class="box">\
                        <p class="desc">'+data[i].desc+'</p>\
                        <img src="' + data[i].url + '" class="box-img" style="width:"'+w+'px"">\
                    </div>\
                  </div>';
        }
        oMain.innerHTML=str;

        // 预加载图片，使其撑起item的高度，后续可以获取到item的高
        for(var i = 0; i < data.length; i++){
            var img1 = new Image();
            img1.src=data[i].url;
            img1.onload=function() {
                imageflag++;
                if (imageflag==data.length) {
                    self.waterfall("#main",".item");
                }
            }
        }
    },
    ////ajax getJson promise(借鉴 阮一峰 es6入门)
    getJSON:function(url){
        var promise = new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onreadystatechange = handler;
        xhr.responseType = "json";
        xhr.setRequestHeader("Accept", "application/json");
        xhr.send();

        function handler() {
          if (this.readyState !== 4) {
            return;
          }
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error(this.statusText));
          }
        };
      });
      return promise;
    },
    // 触底判断
    checkscrollside:function(){
        var oParent = document.getElementById("main");
        var aItem =oParent.querySelectorAll(".item");
        var lastItemH=aItem[aItem.length-1].offsetTop+Math.floor(aItem[aItem.length-1].offsetHeight/2);
        var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
        var documentH=document.documentElement.clientHeight;
        return (lastItemH<scrollTop+documentH)?true:false;
    },
    // 触底加载
    getWhenDown:function(){
        var self=this;
        if(self.checkscrollside()){
            var oParent = document.getElementById('main');
            // 此处可以加载第二页
            self.getJSON("js/images.json").then(function(json){
                for(var i=0;i<json.img.length;i++){                
                    
                    var oPin=document.createElement('div');                    
                    oPin.className='item';                      
                    oParent.appendChild(oPin);                          
                    
                    var oBox=document.createElement('div');           
                    oBox.className='box';               
                    oPin.appendChild(oBox);             
                    
                    var oImg=document.createElement('img');  
                    var oDesc=document.createElement("p");         
                    oImg.src=json.img[i].url; 
                    oImg.className="box-img";
                    oDesc.className="desc"; 
                    oDesc.innerHTML=json.img[i].desc;
                    oBox.appendChild(oDesc);
                    oBox.appendChild(oImg);
                }
                self.waterfall("#main", ".item");
            });
            
        }
    },
    init:function(){
        var self=this;
        self.getJSON("js/images.json").then(function(json){
            self.render(json,170);
        })
    }
}

window.onload = function() {
    // 渲染数据
    waterPage.init();

    // resize时重新计算排版
    window.onresize = function() {
        waterPage.waterfall("#main", ".item");
    }

    // 触底加载
    window.onscroll=function(){
        waterPage.getWhenDown();
    }



}