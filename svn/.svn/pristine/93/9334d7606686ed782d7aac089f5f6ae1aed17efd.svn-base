mui.init();
window.onload = function(){
	function plusReady(){
		window.localStorage.apk = plus.device.imei;
		plus.geolocation.getCurrentPosition( function ( p ) {
			window.localStorage.latitude = p.coords.latitude;
			window.localStorage.longitude = p.coords.longitude;
		}, function ( e ) {
			mui.toast( "Geolocation error: " + e.message );
		} );
	}
	if(window.plus){
		plusReady();
	}else{
		document.addEventListener("plusready",plusReady,false);
	}
	var slider = mui("#slider");
	slider.slider({
	  interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
	});
	
	var jsonDom = mui("#banner")[0];
	statusFun(true);
	function statusFun(bol){
		if(bol){
			getJsonAccess.cacheData(localStorage["banner"],drawHtml,jsonDom);
			setTimeout(function(){statusFun(false)},100);
		}else{
			getJsonAccess.getJson('/s/info_banners',"",drawHtml);
		}
	}
	
	function drawHtml(data){
		if(typeof(data) == "string"){data = JSON.parse(data)}
		var json = data.datas.banners;
		var index = '<div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img src="'+pubUrl+json[json.length-1].ba1+'" /></a></div>'
		for(var i=0;i<json.length;i++){
			index+='<div class="mui-slider-item"><a href="#"><img src="'+pubUrl+json[i].ba1+'" /></a></div>'
		}
		index+='<div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img src="'+pubUrl+json[0].ba1+'" /></a></div>';
		jsonDom.innerHTML = index;
		window.localStorage.banner = JSON.stringify(data);
	}
}

