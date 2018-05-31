function setTransform(element, value, key) {
	key = key || "Transform";
	try {
	    ["moz", "o", "ms", "webkit", ""].forEach(function(prefix) {
	        element.style[prefix + key] = value;
	    });

	} catch (e) {
	    console.log(e);
	}
	return element;
}


function ZsBar(box,conwrap,bar,sw) {
	this.box = box;
	this.conwrap = conwrap;
	this.bar = bar;
	this.scrollWrap = sw;
	this.dis_wrap = 0;
	this.scrollH = 0;
	this.dis_scer = 0;
	this.wheel_rate = 0;
	this.setScrollW().addEvent();
}

ZsBar.prototype.setScrollW = function() {
	this.dis_wrap = this.conwrap.offsetHeight - this.box.offsetHeight;  // 内容的高度 - 容器的高度
	this.scrollH = this.box.offsetHeight * (this.box.offsetHeight/this.conwrap.offsetHeight); //根据比例计算出滚动条的高度
	this.bar.style.height = this.scrollH+"px";
	this.dis_scer = this.box.offsetHeight-this.scrollH; //滑块可移动的距离
	this.wheel_rate = this.dis_scer/this.dis_wrap; //滑动移动比例
	return this;
};

ZsBar.prototype.mouseWheel = function(obj,fn) {
	var me = this;
	if(window.navigator.userAgent.indexOf('Firefox')!=-1){
		obj.addEventListener("DOMMouseScroll",wheelFn,true);
	}else{
		obj.onmousewheel = wheelFn;
	}

	function wheelFn(ev) {
		ev = ev || event;
		var direct = ev.wheelDelta ? ev.wheelDelta<0:ev.detail>0;
		fn && fn(direct);
		if(window.event){
			ev.returnValue = false;
			return false;
		}else{
			ev.preventDefault();
		}
	}
};

ZsBar.prototype.addEvent = function() {
	// 滚动
	this.mouseWheel(this.scrollWrap,function(dir) {

		var t = 0;
		if(dir){
			t = this.conwrap.offsetTop - 30;
			if(t<-this.dis_wrap){
				t = -this.dis_wrap;
			}
		}else{
			t = this.conwrap.offsetTop + 30;
			if(t>0){
				t = 0;
			}
		}
		this.conwrap.style.top = t + "px";
		this.bar.style.top = -t * this.wheel_rate + "px";

	}.bind(this));

	this.bar.onmousedown = function(ev) {
		ev = ev || window.event;
		var mt = ev.clientY - this.bar.offsetTop;
		var _this = this;
		console.log(ev.clientY,this.bar.offsetTop);

		document.onmousemove = function(ev) {
			ev = ev || window.event;
			var t = ev.clientY - mt; //拖动移动的距离
			// 临界值判断
			if(t<=0){t=0;}
			if(t>_this.dis_scer - 2){t=_this.dis_scer;}
			console.log(t);
			// 计算移动比例
			var move_rate = t/_this.dis_scer;
			_this.conwrap.style.top = -_this.dis_wrap * move_rate + "px";
			_this.bar.style.top = t + "px";
		};
		document.onmouseup = function() {
			document.onmousemove = null;
		};
		return false; //阻止选中文字
	}.bind(this);
};