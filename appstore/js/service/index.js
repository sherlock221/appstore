mui.init({
	swipeBack: false,
	//预加载
	preloadPages: [{
		url: "/page/category.html",
		id: "category"
	}, {
		url: "/page/pay.html",
		id: "pay"
	}],
	subpages: [{
		id: "list",
		url: "list.html",
		styles: {
			top: "48px",
			bottom: 0
		}
	}]
});


var UI = {
	cateGoryBnt: document.querySelector("#categoryBtn"),
	preorder: document.querySelector("#preOrderBtn")
};

//弹出类别新窗口
UI.cateGoryBnt.addEventListener("tap", function() {
	alert("dd");
	mui.openWindow({
		id: 'category',
		show: {
			aniShow: "slide-in-bottom", //页面显示动画，默认为”slide-in-right“；
		}
	});
},false);


//弹出预购清单新窗口
UI.preorder.addEventListener("tap", function() {
	mui.openWindow({
		id: 'pay',
		show: {
			aniShow: "slide-in-bottom", //页面显示动画，默认为”slide-in-right“；
		}
	});
},false);


mui.plusReady(function() {
				//首页返回键处理
				//处理逻辑：1秒内，连续两次按返回键，则退出应用；
				var first = null;
				plus.key.addEventListener('backbutton', function(){
					//首次按键，提示‘再按一次退出应用’
					if(!first){
						first = new Date().getTime();
						mui.toast('再按一次退出应用');
						setTimeout(function(){
							first = null;
						},1000);
					}else{
						if(new Date().getTime()-first<1000){
							plus.runtime.quit();
						}
					}
				}, false);
			});