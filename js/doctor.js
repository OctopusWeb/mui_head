mui.init();
window.onload = function(){
	var jsonDom = mui(".doctor-list")[0];
	var search = mui(".search")[0];
	search.addEventListener("change",function(){
		var data = '?apk='+localStorage["apk"]+"&dname="+search.value;
		getJsonAccess.getJson('/s/dr_lists',data,drawHtml);
	})
	statusFun(true);
	
	function statusFun(bol){
		if(bol){
			getJsonAccess.cacheData(localStorage["doctor"],drawHtml,jsonDom);
			setTimeout(function(){statusFun(false)},10);
		}else{
			var data = '?apk='+localStorage["apk"]
			getJsonAccess.getJson('/s/dr_lists',data,drawHtml);
		}
	}

	function drawHtml(data){
		if(typeof(data) == "string"){data = JSON.parse(data)}
		var json = data.datas.rds;
		var index=""
		for(var i=0;i<json.length;i++){
			index+='<div class="doctor" id="'+json[i].id+'"><img src="'+json[i].photo+'" alt="" />'
			index+='<h1>'+json[i].name+'</h1><h2>'+json[i].honor+'</h2><h3>'+json[i].hospital+'</h3></div>'				
		}
		jsonDom.innerHTML = index;
		for(var i=0;i<mui(".doctor").length;i++){
			addEvent(i);
		}
		window.localStorage.doctor = JSON.stringify(data);
	}
}