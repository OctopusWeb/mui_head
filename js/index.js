mui.init();
window.onload = function(){
	var slider = mui("#slider");
	slider.slider({
	  interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
	});
	
	var jsonDom = mui("#banner")[0];
	statusFun(true);
	function statusFun(bol){
		if(bol){
			getJsonAccess.cacheData(localStorage["banner"],drawHtml,jsonDom);
			statusFun(false)
		}else{
			getJsonAccess.getJson('/s/info_banners',"",drawHtml);
		}
	}
	
	function drawHtml(data){
		window.localStorage.banner = JSON.stringify(data);
		var json = data.datas.banners;
		var index = '<div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img src="'+pubUrl+json[json.length-1].ba1+'" /></a></div>'
		for(var i=0;i<json.length;i++){
			index+='<div class="mui-slider-item"><a href="#"><img src="'+pubUrl+json[i].ba1+'" /></a></div>'
		}
		index+='<div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img src="'+pubUrl+json[0].ba1+'" /></a></div>';
		jsonDom.innerHTML = index;
	}
}

