
	$(function() {
		//商品列表
		var mydata = [
	
		{	
			"myid":0,
			"name":"可乐",
			"src":"img/kele.jpg",
			"singleSrc":"img/kele-singer2.png",
			"price":3,
			"num":2
		},
		{	
			"myid":1,
			"name":"雪碧",
			"src":"img/xuebi.jpg",
			"singleSrc":"img/xuebi-singer2.png",
			"price":2,
			"num":20
		},
		{	
			"myid":2,
			"name":"红牛",
			"src":"img/hongniu.jpg",
			"singleSrc":"img/hongniu-singer2.png",
			"price":5,
			"num":2
		},
		{	
			"myid":3,
			"name":"芬达",
			"src":"img/fenda.jpg",
			"singleSrc":"img/fenda-singer2.png",
			"price":4,
			"num":2
		}
	]
	,price = 0
	,allmoney=0
	,leftmoney=0
	,tempPrice=0
	,n=0
	,tempn=0
	,flag=true;

		//商品列表
		function myGoods(){
			var tmpStr = "";
			for (var i = 0; i < mydata.length; i++) {
				var canbuy=mydata[i].num>0?"购买":"已售空";
				var mynum = mydata[i].num<0?0:mydata[i].num;
				tmpStr+="<div class='shop-singer'><img src='"+mydata[i].src+"'>"+
 							  "<p class='text-center'><strong>"+
 							  mydata[i].name+"</strong> 价格："+mydata[i].price+"元<br/>剩余"+mynum+"瓶</p>"+
 							  "<button class='buy'  data-myid='"+i+"'>"+canbuy+"</button></div>";	
			}
				$('.fmj-shopping').html(tmpStr);
		}

		

		//价格计数
		function getPrice(obj){


			if (allmoney==0&&leftmoney==0) {
				alert('您还没有投币');
				return;
				}else{
					if(mydata[obj.dataset.myid].num<=0){
						return;
					}
					if($('.elec b').eq(2).html()!=0){
						tempPrice = price;
						price+=mydata[obj.dataset.myid].price;
						leftmoney = allmoney-price;
						console.log("计算后",leftmoney+","+price);

					}else{

						alert('您的余额已不足');
						return;
					}
						
					if(leftmoney>=0 && mydata[obj.dataset.myid].num>0){
						
						// animateBuy(obj);
						animateDown(obj);

					}

					if(leftmoney<0){

					leftmoney =parseInt($('.elec b').eq(2).html());
					price = tempPrice;
					// alert(leftmoney);
					alert('您的余额已不足');	
					return;
				}

				mydata[obj.dataset.myid].num--;

				
				$('.elec b').eq(1).html(price);
				$('.elec b').eq(2).html(leftmoney);
			
				console.log("leftmoney",leftmoney);
				myGoods();
					
					
				}
			
			
		}

		//投币钱数
		function allprice(obj){
			allmoney+=parseInt(obj.innerHTML);
			leftmoney=leftmoney+parseInt(obj.innerHTML);
			$('.elec b').eq(0).html(allmoney);
			$('.elec b').eq(2).html(leftmoney);
		}

		//退币
		function remainMoney(){
			alert("共退币"+$('.elec b').eq(2).html()+"元");
			price = 0;
			allmoney=0;
			leftmoney=0;
			$('.elec b').eq(0).html(0);
			$('.elec b').eq(1).html(0);
			$('.elec b').eq(2).html(0);
		}

		//判断距离
		function distance(obj) {
			var iT = $(obj).parent().offset().top;
			console.log("it",iT);
			var $exitWrap = $('.exit-wrap');
			var iexT = $exitWrap.offset().top;
			var disY = iexT-iT+$exitWrap.height()/2;
			return disY+"px";
		}

		//购买下坠动画
		function animateDown(obj){
			var singleDiv = $('<img src="'+mydata[obj.dataset.myid].singleSrc+'" class="singleDiv"/>');
			// var singleDiv = $('<div style="background:red;" class="singleDiv">sdfweffsdfasd</div>')
			singleDiv.css({"left":$(obj).parent().offset().left+"px","top":$(obj).parent().offset().top+"px"});
			console.log('原来的it',$(obj).parent().offset().top);
			$(document.body).append(singleDiv);
			// setTimeout(function(){
				// singleDiv.addClass('singleDiv-active');
				// console.log(distance(obj));
				//singleDiv.css("transform","translateY("+distance(obj)+") rotate(720deg) scale(0)");
			// },300);
			 // webkitTransitionEnd监听
			 animateDownStart(singleDiv,obj);
			singleDiv.on('webkitTransitionEnd',function(){
				animateBuy(obj); 
			});
			
		}

		//下坠动画添加transform
		function animateDownStart(newdiv,obj) {
				newdiv.css("transform","translateY("+distance(obj)+") rotate(720deg) scale(0)");
		}

		//购买动画
		function animateBuy(obj){

			$('.exit-wrap').removeClass('exit-close').addClass('exit-active');
			var singleImg = $('<img src="'+mydata[obj.dataset.myid].singleSrc+'" class="img-single"/>');
			n++;
			$(singleImg).css("margin-left",-20*n+"px");
			$('.fmj-exit').append(singleImg);
			
			// console.log("n",n);
			tempn = n;
			$('.img-single').on('click',function(){

				$('.img-single').each(function(index){

					$(this).delay(index*200).animate({"bottom":"-100px","opacity":"0"},500,function(){
						$(this).remove();
					});
				});
				
				// $('.img-single').addClass('img-single-active');
					setTimeout(function(){
						$('.exit-wrap').removeClass('exit-active').addClass('exit-close');
					},tempn*200);
					
					n=0;
				
			});

		}

		//点击事件
		(function(){
			
			myGoods();

			//点击购买
			$('.fmj-shopping').on('click','.buy',function(e){
				console.log("计算前",leftmoney+","+price);
				getPrice(e.target);
				
			});

			//投币显示
			$('.push-money').on('click',function(){
				
				if(flag){
					$('.money-list').fadeIn();
				}else{
					$('.money-list').fadeOut();
				}
				flag=!flag;
			});

			//投币
			$('.money-list li').on('click',function(e){
				allprice(e.target);
			});

			//点击退币
			$('.remain-money').on('click',function(){
				remainMoney();
			});
			
		})();
	});