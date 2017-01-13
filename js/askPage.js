mui.init();
window.onload = function(){
	mui(".selected")[0].addEventListener("tap",function(){
		galleryImg(mui(".askPic ul")[0]);
	})
	
	
	mui(".bottomBtn")[0].addEventListener("tap",function(){
		var content = mui(".content")[0].value;
		var img = mui(".askPic ul li");
		if(content=="" || content == null || content == undefined || content == "undefined"){
			mui.toast('内容不能为空',{ duration:'long', type:'div' }) 
			return
		}else {
			statusFun(type,content,img)
		}
		
	})
	var jsonDom = mui(".room-list")[0];
	function statusFun(type,content,img){
		var data = '?apk='+localStorage["apk"]+'&uid=1'+"&ucd=1"+"&content="+content;
		for (var i=1;i<img.length;i++) {
			var img64 = getBase64Image(img[i].getElementsByTagName("img")[0]);
			data+="&img"+img64;
		}
		getJsonAccess.getJson('nzf2/s/question_submit',data,drawHtml);
	}

	function drawHtml(data){
		if(typeof(data) == "string"){data = JSON.parse(data)}
		var json = data.msg;
		mui.toast(json,{ duration:'long', type:'div' }) 
	}
	
	function getBase64Image(img) {
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, img.width, img.height);

      var dataURL = canvas.toDataURL("image/png");
      return dataURL.replace("data:image/png;base64,", "");
    }

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