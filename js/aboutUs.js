mui.init();
window.onload = function(){
	var slider = mui("#slider1");
	slider.slider({
	  interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
	});
	var slider = mui("#slider2");
	slider.slider({
	  interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
	});
	
	var jsonDom = mui("#banner")[0];
	statusFun(true);
	function statusFun(bol){
		if(bol){
			getJsonAccess.cacheData(localStorage["aboutUs"],drawHtml,jsonDom);
			setTimeout(function(){statusFun(false)},10);
		}else{
			var data = "?apk="+localStorage["apk"]
			getJsonAccess.getJson('/s/info_about',data,drawHtml); 
		}
	}
	
	function drawHtml(data){
		if(typeof(data) == "string"){data = JSON.parse(data)}
		var json = data.datas.about.image;
		var index = '<div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img src="'+pubUrl+json[json.length-1].image+'" /></a></div>'
		for(var i=0;i<json.length;i++){
			index+='<div class="mui-slider-item"><a href="#"><img src="'+pubUrl+json[i].image+'" /></a></div>'
		}
		index+='<div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img src="'+pubUrl+json[0].image+'" /></a></div>';
		jsonDom.innerHTML = index;
		window.localStorage.aboutUs = JSON.stringify(data);
	}
}