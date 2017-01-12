mui.init();
window.onload = function(){
	function plusReady(){
		window.localStorage.apk = "100000000";
		plus.geolocation.getCurrentPosition( function ( p ) {
			window.localStorage.latitude = p.coords.latitude;
			window.localStorage.longitude = p.coords.longitude;
		}, function ( e ) {
			mui.toast( "请打开定位功能" );
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
			setTimeout(function(){statusFun(false)},1000);
		}else{
			var data = "?apk="+localStorage["apk"]
			getJsonAccess.getJson('nzf2/s/info_banners',data,drawHtml);
		}
	}
	
	function drawHtml(data){
		if(typeof(data) == "string"){data = JSON.parse(data)}
		var json = data.datas.banners;
		var index = '<div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img src="'+json[json.length-1].href+'" /></a></div>'
		for(var i=0;i<json.length;i++){
			index+='<div class="mui-slider-item"><a href="#"><img src="'+json[i].href+'" /></a></div>'
		}
		index+='<div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img src="'+json[0].href+'" /></a></div>';
		jsonDom.innerHTML = index;
		window.localStorage.banner = JSON.stringify(data);
	}
}

