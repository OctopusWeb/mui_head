mui.init();
window.onload = function(){
	var slider = mui("#slider");
	slider.slider({
	  interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
	});
	
	var bol=0;
	var bannerDom = mui(".room-list")[0];
	cacheData(localStorage["classRoom"]);
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
		var datas = jsons.datas.rds;
		window.localStorage.classRoom = JSON.stringify(datas);
		return drawHtml(datas);
	}

	function drawHtml(datas){
		bol++;
		var index=""
		for(var i=0;i<datas.length;i++){
			index+='<div class="room">'
			index+='<img src="'+pubUrl+datas[i].image+'"/>'
			index+='<h1>'+datas[i].title+'</h1>'
			index+='<h2>'+datas[i].desc+'</h2>'
			index+='<span class="mui-icon mui-icon-arrowright"></span></div>'
		}
		return index
	}
}