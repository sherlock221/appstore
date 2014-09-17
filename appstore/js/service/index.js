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
	mui.openWindow({
		id: 'category',
		show: {
			aniShow: "slide-in-bottom", //页面显示动画，默认为”slide-in-right“；
		}
	});
});


//弹出预购清单新窗口
UI.preorder.addEventListener("tap", function() {
	mui.openWindow({
		id: 'pay',
		show: {
			aniShow: "slide-in-bottom", //页面显示动画，默认为”slide-in-right“；
		}
	});
});