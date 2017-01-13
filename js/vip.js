mui.init();
window.onload = function(){
	var jsonDom = mui(".videoList")[0];
	statusFun(true);
	function statusFun(bol){
		if(bol){
			getJsonAccess.cacheData(localStorage["infoLinks"],drawHtml,jsonDom);
			setTimeout(function(){statusFun(false)},1000);
		}else{
			var data = "?apk="+localStorage["apk"]
			getJsonAccess.getJson('nzf2/s/info_links',data,drawHtml); 
		}
	}
	
	function drawHtml(data){
		if(typeof(data) == "string"){data = JSON.parse(data)}
		var json = data.datas.rds;
		var index = '<div class="video">'
		for(var i=0;i<json.length;i++){
			index+='<div class="videoBox" id="'+json[i].tid+'">'+'<img src="'+json[i].image+'"/></div><h1>'+json[i].title
			index+='</h1><h2>'+json[i].cdate+'</h2>'
		}
		index+='</div>'
		jsonDom.innerHTML = index;
		if(mui(".videoBox")){
			for(var i=0;i<mui(".videoBox").length;i++){
				addEventV(i);
			}
		}
		window.localStorage.infoLinks = JSON.stringify(data);
	}
}