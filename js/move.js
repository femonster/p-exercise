	
	function getStyle(obj,attr) {
		if (obj.currentStyle) {
			return obj.currentStyle[attr];
		} else {
			return getComputedStyle(obj,false)[attr];
		}
	}

    function getByClass(oParent,sclass) {
      var aAll = oParent.getElementsByTagName('*');
      var arr=[];
      var aStr=[];
      for (var i = 0; i < aAll.length; i++) {
        aStr=aAll[i].className.split(" ");
        for (var j = 0; j < aStr.length; j++) {
          if (aStr[j]==sclass) {
            arr.push(aAll[i]);
          }
        }
      }
      return arr;
    }
    //缓冲运动
	function startmove(obj,json,fn){  //(对象，json{目标属性，目标值}，链式运动函数)

	if(obj.timer){clearInterval(obj.timer);}

	obj.timer=setInterval(function(){
		var bStop=true; //检测所有运动是否都到达目标点
		// 循环开始
		for(attr in json){
		if (attr=='opacity') {
			var iCur=parseInt(parseFloat(getStyle(obj,attr))*100);
		} else {
			var iCur=parseInt(getStyle(obj,attr));
		}
		var iSpeed=(json[attr]- iCur)/8;
		iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
        //检测是否有运动还未到达目标点
		if (iCur!=json[attr]) {
			bStop=false;
		} 
		if (attr=='opacity') {
				obj.style[attr]=(iCur+iSpeed)/100;
		} else {
				obj.style[attr]=iCur+iSpeed+'px';
		}	
	}
	// 循环结束

     //检测循环完后，如果所有运动都到目标点后，则结束定时器，检验是否有链式运动
     if(bStop){
     	clearInterval(obj.timer);
			if (fn) {
				fn();
			}
     }

	},30);
}
//抖~动效
function shake(obj,attr,ilen,fn) {
	if( obj.shaked ) { return; }  //判断是否摇晃完毕
	obj.shaked = true;

	var istart = parseInt(getStyle(obj,attr));
	var adnum = [];
	var num=0;
	for (var i = ilen; i >0; i-=2) {
		adnum.push(i,-i);
	}	
	adnum.push(0);
	console.log(adnum);
	if (obj.shakeTimer) {clearInterval(obj.shakeTimer);}
		obj.shakeTimer=setInterval(function(){
			obj.style[attr]=istart+adnum[num]+'px';
			num++;
			if (num==adnum.length) {
				clearInterval(obj.shakeTimer);
				num=0;
				
				obj.shaked=false;
				fn&&fn();
			}
		},30);

}

//匀速运动

function doMove ( obj, attr, dir, target, endFn ) {
	
	dir = parseInt(getStyle( obj, attr )) < target ? dir : -dir;
	
	clearInterval( obj.timer2 );
	
	obj.timer2 = setInterval(function () {
		
		var speed = parseInt(getStyle( obj, attr )) + dir;
		
		if ( speed > target && dir > 0 ||  speed < target && dir < 0  ) {
			speed = target;
		}
		
		obj.style[attr] = speed + 'px';
		
		if ( speed == target ) {
			clearInterval( obj.timer2 );
			endFn && endFn();
		}
		
	}, 30);
}