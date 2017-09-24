	(function(){
		
		'use strict';
		
		var $form_add_task = $('.add-task'),
			task_list=[],
			$task_detail = $('.task-detail'),
			$task_detail_mask = $('.task-detail-mask'),
			current_index
		;
		
		init();
		
		$form_add_task.on('submit',function(e){
			
			var new_task={};
			
			e.preventDefault();
			
			var staskInput =  $(this).find('.add-task-input').val();
			
			if(!staskInput.trim()){
				alert('请输入task！');
				return;
			}
			
			new_task.content = staskInput;
					
			if(add_task(new_task)){			
				$(this).find('.add-task-input').val('');			
			}
			
			
		});
		
		//事件委托监听删除事件
		$('.task-list').on('click','.action.delete',function(){
		
		var tmp = confirm("确定删除？");
		
		var item_index = $(this).parent().parent().data('index');
		
		tmp?delete_task(item_index):null;
		
		console.log(item_index);

		});
		
		//事件委托监听详情事件
		$('.task-list').on('click','.action.detail',function(){
			
			var item_index = $(this).parent().parent().data('index');
			
			show_task_detail(item_index);
			
			render_task_detail(item_index);
			
			render_task_detail(item_index);
			
			console.log(item_index);
		});
		
		//事件委托监听双击task-item打开详情面板
		$('.task-list').on('dblclick','.task-item',function(){
			
			var item_index = $(this).data('index');
			
			show_task_detail(item_index);
			
			render_task_detail(item_index);
			
			render_task_detail(item_index);
			
			
		});
		
		//事件委托监听checkbox是否被选中
		$('.task-list').on('click','.task-complete',function(){
			
			var is_completed = $(this).is(':checked');
			
			var item_index = $(this).parent().parent().data('index');
			
			update_task(item_index,{complete:is_completed});
			
			
			
		});
		
		$task_detail_mask.on('click',function(){
			hide_task_detail();
		});
		
		$('.msg .msg-confirm').on('click',function(){
			hide_msg();
		});
		//添加任务
		function add_task(new_task){
				
				var all_task = store.get('task_list') || [];
				
				if(all_task.length==0){
//					alert('zoudao ');
					task_list.push(new_task);
				
					refresh_task_list();
					
					
					
				}else{
					
					for (var i=0;i<all_task.length;i++) {
					
						if(all_task[i].content == new_task.content){
							
							alert('task已存在');
							
							return false;
						}
					}
					
					task_list.push(new_task);
				
					refresh_task_list();
					
				}
				
				return true;
		}
		
		
		//初始化list清单
		function init(){
			task_list = store.get('task_list') ||　[];
			
			console.log(task_list);
			
			render_task_list();
			
			task_remind_check();
			
			//store.clear();
			
		}
		
		//循环所有task
		function render_task_list(){
			
			var $task_list = $('.task-list');
			
			var temp_arr = [];
		
			$task_list.html('');
			
			var temp_index=[];
			
			for (var i=0;i<task_list.length;i++) {
				
				var task_item = task_list[i];
				
				(function(i){
					
					if(task_item.complete){
					
						temp_arr.push(task_item);	
					
						temp_index.push(i);

					}else{
						var list_tpr_item = render_task_item(task_item,i);
						
						$task_list.prepend(list_tpr_item);
					
					}
					
				})(i);
				
			}
			
			for(var j=0;j<temp_arr.length;j++){
					
					var list_tpr_item = render_task_item(temp_arr[j],temp_index[j]);
					
					if(!list_tpr_item){
						continue;
					}else{
						list_tpr_item.addClass('completed');
						$task_list.append(list_tpr_item);
						
					}		
					
			}
			
			
									
		}
		
		//初始化单个task
		function render_task_item(data,index){
			
			if(data==null||index==null){return;}
			
			
			
			var list_item_tpr=
				'<div class="task-item" data-index="'+index+'"><span>'+
				'<input type="checkbox" class="task-complete" '+(data.complete?'checked':'')+'/></span>'+
				'<span class="task-content">'+data.content+'</span>'+
				'<span class="fr">'+
				' <span class="action delete"> 删除  </span> '+
				' <span class="action detail"> 详情   </span> </span></div>';

			return $(list_item_tpr); //返回一个jquery对象
		}
		
		//刷新localStorage并更新task-list
		function refresh_task_list(){
			
			store.set('task_list',task_list);
			
			render_task_list();
			render_task_detail();
		}
		
		
		//删除task
		function delete_task(index){
			//如果不存在则返回,当判断为!index时,数组最后一项就删除不了,0也为false
			if(index==null|| !task_list[index]){return;}
			
			task_list.splice(index,1);
			
			refresh_task_list();
			
		}
		
		//显示详情清单
		function show_task_detail(index){
			current_index=index;
			$task_detail.show();
			$task_detail_mask.show();
		}
		
		//隐藏详情清单
		function hide_task_detail(){
			$task_detail.hide();
			$task_detail_mask.hide();
		}
		
		//渲染指定详情清单
		function render_task_detail(index){
			
			var item = task_list[index];
			
			if(!task_list[index]||index==null){
				return;
			}
				console.log(item);
			
			var tpl = '<form class="task-detail-wrap">'
					 +'<div class="content">'+item.content+'</div>'
					 +'<div><div class="desc"><textarea name="desc">'+(item.desc || '')
					 +'</textarea></div></div>'
					 +'<div class="remind"><label>提醒时间</label>'
					 +'<input type="text" class="remind-input" name="remind-date" value="'+(item.remind_date || '')+'"/></div>'
					 +'<button class="task-detail-submit">更新</button></form>';
			
			$task_detail.html(null);
			
			$task_detail.html(tpl);
			
			//双击修改task
			$('.content').on('dblclick',function(){
				$(this).html("<input type='text' name='content' value='"+item.content+"'/>");
			});
			
			$('.task-detail-wrap').on('submit',function(e){
				e.preventDefault();
				var temp_data = {};
				temp_data.content = $(this).find('[name=content]').val() || $('.content').text();	
				temp_data.desc = $(this).find('[name=desc]').val();
				temp_data.remind_date = $(this).find('[name=remind-date]').val();
				
				update_task(current_index,temp_data);
				hide_task_detail();
			});
			
			$('.remind-input').datetimepicker();
			

		}
		
		//更新清单
		function update_task(index,data){
			
			var now_date,remind_date,remind_date_str;
				
			now_date = (new Date()).getTime();

			remind_date = (new Date(data.remind_date)).getTime();
				
				if (now_date > remind_date) {
					
					alert('时光一去不复回,往事只能回味');
					
					return;
				}
			
			
			//将新数据填到原数据中
			task_list[index] = $.extend({},task_list[index],data);
			
			refresh_task_list();
		}
		
		
		//监控task时间的变化
		function task_remind_check(){
			
			var now_date,remind_date;
			
			
			var timer = setInterval(function(){
	
				for (var i=0;i<task_list.length;i++) {
					
					var item= task_list[i];
					
					if (!item.remind_date || item.informed) {
						continue;
					}
					
					now_date = (new Date()).getTime();
					remind_date = (new Date(item.remind_date)).getTime();
					
					if (now_date - remind_date >=1) {
						update_task(i,{informed:true});
						show_msg(item.content);
					}
				
				}
				
			},300);
			
			
		}
		
		function show_msg(content){
			if(!content){return;}
			$('.msg .msg-content').html(content);
			$('.msg').slideDown();
		}
		
		function hide_msg(){
			$('.msg').slideUp();
		}
	
	})();
