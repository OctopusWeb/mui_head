mui.init();
window.onload = function(){
	var slider = mui("#slider");
	slider.slider({
	  interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
	});
	
	var jsonDom = mui(".room-list")[0];
	var jsonDom1 = mui("#banner")[0];
	statusFun(true);
	function statusFun(bol){
		if(bol){
			getJsonAccess.cacheData(localStorage["infoArticle"],drawHtml,jsonDom);
			getJsonAccess.cacheData(localStorage["banner"],drawHtml1,jsonDom1);
			setTimeout(function(){statusFun(false)},10);
		}else{
			var data = '?apk='+localStorage["apk"]+'&type=bjkt'
			getJsonAccess.getJson('/s/info_articles',data,drawHtml);
			getJsonAccess.getJson('/s/info_banners',"",drawHtml1);
		}
	}

	function drawHtml(data){
		if(typeof(data) == "string"){data = JSON.parse(data)}
		var json = data.datas.rds;
		var index=""
		for(var i=0;i<json.length;i++){
			index+='<div class="room">'
			index+='<img src="'+pubUrl+json[i].image+'"/>'
			index+='<h1>'+json[i].title+'</h1>'
			index+='<h2>'+json[i].desc+'</h2>'
			index+='<span class="mui-icon mui-icon-arrowright"></span></div>'
		}
		jsonDom.innerHTML = index;
		window.localStorage.infoArticle = JSON.stringify(data);
	}
	function drawHtml1(data){
		if(typeof(data) == "string"){data = JSON.parse(data)}
		var json = data.datas.banners;
		var index = '<div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img src="'+pubUrl+json[json.length-1].ba1+'" /></a></div>'
		for(var i=0;i<json.length;i++){
			index+='<div class="mui-slider-item"><a href="#"><img src="'+pubUrl+json[i].ba1+'" /></a></div>'
		}
		index+='<div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img src="'+pubUrl+json[0].ba1+'" /></a></div>';
		jsonDom1.innerHTML = index;
		window.localStorage.banner = JSON.stringify(data);
	}
}