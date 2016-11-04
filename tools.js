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
			tips:function(text,seconds){
				// tips 消息提示
				$("<p class='tips'>").html(text)
				$('body').append($("<p class='tips'>").html(text));
				setTimeout("$('.tips').fadeOut()",seconds);
 			},
 			alert:function(message){
 				//调用系统弹窗
 				window.alert(message);
 			},
 			tab:function(nav,target,ele,className){
 				// tab切换 nav 为点击按钮 target 为要切换的div元素 ele 为事件 className 为切换样式
 				$(nav).on(ele,function(){
 					var index = $(this).index();
 					$(this).addClass(className).siblings().removeClass(className);
 					$(target).eq(index).show().siblings().hide();
 				});
 			}

	};
	_ling = window._ling = new _ling();


})(window)
