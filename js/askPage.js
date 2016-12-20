mui.init();
window.onload = function(){
	mui(".selected")[0].addEventListener("tap",function(){
		galleryImg(mui(".askPic ul")[0]);
	})
}
function galleryImg(dom) {
	// 从相册中选择图片
	console.log("从相册中选择图片:");
    plus.gallery.pick( function(path){
    	var index = dom.innerHTML;
    	dom.innerHTML = index+'<li><img src="'+path+'"/></li>';
    	mui(".selected")[0].addEventListener("tap",function(){
			galleryImg(mui(".askPic ul")[0]);
		})
    }, function ( e ) {
    	console.log( "取消选择图片" );
    }, {filter:"image"} );
}