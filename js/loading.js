;(function(){
	let zhuce = document.getElementById("zhuce")
	let denglu = document.getElementById("denglu")
	//注册加载页面
	function test1(){
		ajaxLoading('注册中，请稍后...');
		setTimeout(function(){
			ajaxLoadEnd()
		},2000);
	}
	//登录加载页面
	function test2(){
		ajaxLoading('登录中，请稍后...');
		setTimeout(function(){
			ajaxLoadEnd()
			window.location.href = 'view.html';
		},2000);
	}
	zhuce.addEventListener("click",test1);
	denglu.addEventListener("click",test2);
	//使用loading效果
	function ajaxLoading(msg){   
		addPanelMask();
	    $("<div id='loading'></div>").html(msg ? msg : "正在处理,请稍候...").appendTo("body");	 
	}
	 
	//遮罩整个界面
	function addPanelMask(){
		$("<div id=loading-mask></div>").appendTo("body")
		$("<div id='loading-indicator'></div>").appendTo("#loading-mask");
		$("<img class=img-responsive src=img/loading2.gif width=32 height=32/>").appendTo("#loading-indicator")    		
	}
	 
	//移除界面遮罩层
	function ajaxLoadEnd(){
		$("#loading-mask").remove();   
		$("#loading").remove();  
	}
})();