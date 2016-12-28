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
	
	var bol=0;
	var bannerDom = mui("#banner")[0];
	cacheData(localStorage["aboutUs"]);
	function cacheData(jsonName){
		if(bol==0){
			if(!jsonName || jsonName == "undefined"){
				bol++
				bannerDom.innerHTML = addBanner('/s/info_banners',"",jsonName);
			}else{
				bannerDom.innerHTML = drawHtml(JSON.parse(jsonName));
				cacheData(jsonName)
			}
		}else if(bol == 1){
			bannerDom.innerHTML = addBanner('/s/info_banners',"",jsonName);
		}else{
			return
		}
	}
	function addBanner(url,data,jsonName){
		var jsons = getJson(url,data);
		var banner = jsons.datas.about.image;
		window.localStorage.aboutUs = JSON.stringify(banner);
		return drawHtml(banner);
	}

	function drawHtml(banner){
		bol++;
		var index = '<div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img src="'+pubUrl+banner[banner.length-1].src+'" /></a></div>'
		for(var i=0;i<banner.length;i++){
			index+='<div class="mui-slider-item"><a href="#"><img src="'+pubUrl+banner[i].src+'" /></a></div>'
		}
		index+='<div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img src="'+pubUrl+banner[0].src+'" /></a></div>';
		return index
	}
}