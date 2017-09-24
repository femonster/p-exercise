$(function(){
			//搜索框部分
			(function(){
				var aLi = $('#search li');
				var arrText = ['例如：100度烧烤店','例如：鲍家街11号','例如：打五折','例如：全文请点击','例如：葫芦娃后传'];
				aLi.each(function(index){
					$(this).click(function(){
						aLi.attr('class','graident');
						$('#top_search').attr('placeholder',arrText[index]);
						$(this).attr('class','bar_on');
					});
				});
			})();
			
			//update更新
			(function(){
				var oUl=$('.scroll_news ul');
				var str='';
				var iNow=0;
				var timer=null;
				var arrUpdate= [
					{ 'name':'张张', 'time':4, 'title':'那些灿烂华美的瞬间', 'url':'#' },
					{ 'name':'老杨', 'time':5, 'title':'广东3天抓获涉黄疑犯', 'url':'#' },
					{ 'name':'萱萱', 'time':6, 'title':'国台办回应王郁琦', 'url':'#' },
					{ 'name':'畅畅', 'time':7, 'title':'那些灿烂华美的瞬间', 'url':'#' },
					{ 'name':'老吴', 'time':8, 'title':'那些灿烂华美的瞬间', 'url':'#' },
					{ 'name':'畅畅', 'time':9, 'title':'广东3天抓获涉黄疑犯', 'url':'#' },
					{ 'name':'三娃', 'time':10, 'title':'国台办回应王郁琦', 'url':'#' },
					{ 'name':'马驴', 'time':11, 'title':'那些灿烂华美的瞬间', 'url':'#' }
							];
				for(var i=0;i<arrUpdate.length;i++){
					str+='<li><em>'+arrUpdate[i].name+'</em><span>'+arrUpdate[i].time+'分钟前</span> <a href="'+arrUpdate[i].url+'">写了一篇新文章：'+arrUpdate[i].title+'…</a></li>'
				}
				oUl.html(str);	
				var iH = oUl.find('li').height();
				
				$('#newstop').click(function(){
					upOrdown(-1);
				});
				$('#newsdown').click(function(){
					upOrdown(1);
				});
				function autoplay(){
					timer=setInterval(function(){
						upOrdown(-1);
					},2000);
				}
				autoplay();
				function upOrdown (dire) {
					iNow += dire;
					if(Math.abs(iNow)>arrUpdate.length-1){
						iNow=0;
					}
					if(iNow>0){
						iNow=-(arrUpdate.length-1);
					}
					oUl.stop().animate({'top':iH*iNow},2000,'elasticOut');
				}
				
				$('.scroll_news').mouseover(function(){
					clearInterval(timer);
				}).mouseout(function(){
					autoplay();
				});
				$('.scroll_news_btn').mouseover(function(){
					clearInterval(timer);
				}).mouseout(function(){
					autoplay();
				});
			})();
			
			//store选项卡
			(function(){
				fnTab($('.red_btn'),$('.store_content'));
				fnTab($('.life_btn'),$('.life_content'));
				fnTab($('.main_tab'),$('.tab_three_content'));
				fnTab($('.aside_tab'),$('.aside_tab_content'));	
				
				function fnTab(oNav,oCon){
					oNav.find('button').click(function(){
						oNav.find('button').removeClass('on').addClass('graident');
						oNav.find('i').attr('class','threejiao_down_gray');
						oCon.find('.tab_content').css('display','none');
						
						$(this).removeClass('graident').addClass('on');
						oNav.find('i').eq($(this).index()).attr('class','threejiao_down_red');
						oCon.find('.tab_content').eq($(this).index()).css('display','block');
					});
				}
			})();
		
			//焦点图淡入淡出
			(function(){
				var aBigImg = $('.banner_big').find('img');
				var aSmLi = $('.banner_small').find('ul li');
				var op =$('.banner').find('p');
				var arrT =['爸爸去哪儿了~','这是一个美女~','这又是一个美女~'];
				var iNow=0;
				var timer=null;

				fnfade();
				aSmLi.click(function(){
					iNow = $(this).index();
					fnfade();
				});
				
				autoplay();
				function autoplay () {
					timer=setInterval(function(){
						iNow++;
						if(iNow==aSmLi.length){iNow=0;}
						fnfade();
					},2500);
				}
				
				$('.banner').mouseover(function(){
					clearInterval(timer);
				}).mouseout(function(){
					autoplay();
				});
				
				function fnfade(){
					aSmLi.each(function(index){
						if (index!=iNow) {
							aBigImg.eq(index).stop().fadeOut().css('zIndex',1);
							aSmLi.eq(index).removeClass('li_active');
						} else{
							aBigImg.eq(index).stop().fadeIn().css('zIndex',2);
							aSmLi.eq(index).addClass('li_active');
							op.html(arrT[iNow]);
							
						}
					});
				}
			})();
		
			//日历的活动提醒
			(function(){
				var aWeek = $('.calendar h3 span');
				var aOlli = $('.calendar ol li');
				var aimg  = $('.calendar ol .img');
				var oinfo = $('.calendar .today_info');
				var oinfoImg = oinfo.find('img');
				var oinfoStr = oinfo.find('p');
				var oinfoTime =oinfo.find('strong');
				
				aimg.hover(function(){	
					var iTop = $(this).parent().position().top-30;
					var iLeft = $(this).parent().position().left+50;
					var iTime = ($(this).parent().index())%7;
					
//					console.log(iTime);
//					console.log(aWeek.eq(iTime).text());
					
					oinfo.css({'top':iTop,'left':iLeft});
					oinfoImg.attr('src',$(this).attr('src'));
					oinfoStr.text($(this).attr('info'));
					oinfoTime.text(aWeek.eq(iTime).text());
					oinfo.css('display','block');
				},function(){
					oinfo.css('display','none');
				});
			})();
		
			//红人烧客遮罩层
			(function(){
				var op = $('.img_hotperson p');
				var arr = [
					'',
					'用户1<br />人气1',
					'用户名：性感宝贝<br />区域：朝阳CBD<br />人气：124987',
					'用户3<br />人气3',
					'用户4<br />人气4',
					'用户5<br />人气5',
					'用户6<br />人气6',
					'用户7<br />人气7',
					'用户8<br />人气8',
					'用户9<br />人气9',
					'用户10<br />人气10'
					];
				$('.img_hotperson img').mouseover(function(){
					if ( $(this).index() == 0 ) return;
					var iTop = $(this).offset().top;
					var iLeft=$(this).offset().left;
					var iw = $(this).width();
					op.css({'display':'block','top':iTop,'left':iLeft,'width':iw-12});
					op.html(arr[$(this).index()]);
				});
			})();
		
			//BBS高亮显示
			(function(){
				$('.bbs ol li').mouseover(function(){
					$('.bbs ol li').removeClass('active').eq($(this).index()).addClass('active');
				});
			})();
		});