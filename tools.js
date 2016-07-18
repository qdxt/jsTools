(function(){
 	var _ling = function(){};//声明对象
 		_ling.prototype = {
	 		trim:function(str){
				return str.replace(/(^\s*)|(\s*$)/g, "");
			},
			pad:function(num){
				return num < 10 ? ('0'+num) : num;
			}

 		};
		_ling = window._ling = new _ling();  // 返回到window 全局变量下 以供其他人调用

})();