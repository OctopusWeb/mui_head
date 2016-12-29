mui.init();
window.onload = function(){
	var slider = mui("#slider");
	slider.slider({
	  interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
	});
	
	var bol=0;
	var jsonDom = mui(".room-list")[0];
	statusFun(true);
	function statusFun(bol){
		if(bol){
			getJsonAccess.cacheData(localStorage["infoArticle"],drawHtml,jsonDom);
			statusFun(false)
		}else{
			getJsonAccess.getJson('/s/info_articles?apk=10000000&type=bjkt',"",drawHtml);
		}
	}

	function drawHtml(data){
		window.localStorage.infoArticle = JSON.stringify(data);
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
	}
}