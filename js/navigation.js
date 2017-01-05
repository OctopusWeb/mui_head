mui.init();
window.onload = function(){
	var jsonDom = mui(".hosList")[0];
	
	var search = mui(".search")[0];
	var selected = mui(".selected")[0];
	search.addEventListener("change",function(){
		var data = '?apk='+localStorage["apk"]+'&x'+localStorage["latitude"]+'&y='+localStorage["longitude"]+'&name='+search.value+'&city='+selected.value;
		getJsonAccess.getJson('/s/jcd_lists',data,drawHtml);
	})
	statusFun(true);
	function statusFun(bol){
		if(bol){
			getJsonAccess.cacheData(localStorage["navigation"],drawHtml,jsonDom);
			setTimeout(function(){statusFun(false)},10);
		}else{
			var data = '?apk='+localStorage["apk"]+'&x'+localStorage["latitude"]+'&y='+localStorage["longitude"]
			getJsonAccess.getJson('/s/jcd_lists',data,drawHtml);
		}
	}

	function drawHtml(data){
		if(typeof(data) == "string"){data = JSON.parse(data)}
		var json = data.datas.rds;
		var index=''
		for (var i=0;i<json.length;i++) {
			index+='<div class="hos"><h1>'+json[i].name+'</h1><h2>'+json[i].honor+'</h2><h2>'+json[i].type
			index+='</h2><h2><i class="icon-dingwei iconfont"></i>'+json[i].dist+'</h2></div>'
		}
		jsonDom.innerHTML = index;
		window.localStorage.navigation = JSON.stringify(data);
	}
}