var UI = {
	cateGoryBnt: document.querySelector("#categoryBtn"),
	preorder   : document.querySelector("#preOrderBtn")
};

//弹出类别新窗口
UI.cateGoryBnt.addEventListener("tap", function() {
	console.log("ccc");
	$.createWindow({
      url: "/page/category.html",
      preload: true//必需
    });
    
    
//	mui.openWindow({
//		url: '/page/category.html',
//		id: 'category',
//		show: {
//			autoShow: true, //页面loaded事件发生后自动显示，默认为true
//			aniShow: "slide-in-bottom", //页面显示动画，默认为”slide-in-right“；
//		}
//	});
});


//弹出预购清单新窗口
UI.preorder.addEventListener("tap", function() {
	mui.openWindow({
		url: '/page/category.html',
		id: 'category',
		show: {
			autoShow: true, //页面loaded事件发生后自动显示，默认为true
			aniShow: "slide-in-bottom", //页面显示动画，默认为”slide-in-right“；
		}
	});
});