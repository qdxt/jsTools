(function(window,undefined){
	var _ling = function(){};//声明对象
	_ling.prototype = {
		trim:function(str){
	 			 //去除字符串中的空格
				return str.replace(/(^\s*)|(\s*$)/g, "");
			},
			pad:function(num){
				// 数字补位（数字小于10  则补位0 例如9变成09）
				return num < 10 ? ('0'+num) : num;
			},
			isNull:function(arg){
				//判断空字符串 空对象 空数组 和boolean
				return !arg && arg!==0&&typeof arg!=="boolean"?true:false;
			},
			// tips:function(text,seconds){
			// 	// tips 消息提示
			// 	$("<p class='tips'>").html(text)
			// 	$('body').append($("<p class='tips'>").html(text));
			// 	setTimeout("$('.tips').fadeOut()",seconds);
 			// },
 			alert:function(message){
 				//调用系统弹窗
 				window.alert(message);
 			},
			assert:function(value,msg){
 				//断言函数 测试传递进来的数据是否是真值
 				if(!value){
 					throw(msg||(value+"does not equal true"));
				}
			},
			assertEqual:function(val1,val2,msg){
				//测试传递进来的两个数值是否相等
                if(val1!==val2){
                    throw(msg||(val1+"does not equal "+val2));
                }
			},
			factorial:function(number){
				//阶乘函数
				if(number==1){
					return number;
				}else{
					return number*this.factorial(number-1);
				}

			},
			isArray:function(obj){
					return Array.isArray(obj);
			},
			indexOfArray:function(arr,value){
					if(Array.isArray(arr)){
						if(arr.indexOf(value.toString())){
							return true;
						}else{
							return false;
						}

					}else{
						throw('请注意您传进来的第一个参数不是数组');
					}

			},
			arrayTostring:function(arr){
				return arr.join();
				// 也可以用toString() 方法
			}
 			// tab:function(nav,target,ele,className){
 			// 	// tab切换 nav 为点击按钮 target 为要切换的div元素 ele 为事件 className 为切换样式
 			// 	$(nav).on(ele,function(){
 			// 		var index = $(this).index();
 			// 		$(this).addClass(className).siblings().removeClass(className);
 			// 		$(target).eq(index).show().siblings().hide();
 			// 	});
 			// }

	};
	_ling = window._ling = new _ling();


})(window)
