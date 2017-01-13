mui.init();
window.onload = function(){
	mui(".openBtn")[0].addEventListener("tap",function(){
		mui(".content-info")[0].style.height = "auto";
		mui(".closeBtn")[0].style.display = "block"
		mui(".openBtn")[0].style.display = "none"
	});
	mui(".closeBtn")[0].addEventListener("tap",function(){
		mui(".content-info")[0].style.height = "72px";
		mui(".openBtn")[0].style.display = "block"
		mui(".closeBtn")[0].style.display = "none"
	})
	var jsonDom = mui(".mui-content")[0];
	statusFun(true);
	function statusFun(bol){
		if(bol){
			getJsonAccess.cacheData(localStorage["vidioInfo"],drawHtml,jsonDom);
			setTimeout(function(){statusFun(false)},1000);
		}else{
			var data = "?apk="+localStorage["apk"]+"&tid="+localStorage["videoId"]
			getJsonAccess.getJson('nzf2/s/info_link',data,drawHtml); 
		}
	}
	
	function drawHtml(data){
		if(typeof(data) == "string"){data = JSON.parse(data)}
		var json = data.datas;
		mui(".videoBox")[0].innerHTML = '<img src="'+json.image+'"/>'
		mui(".content h1")[0].innerHTML = json.title;
		mui(".content span")[0].innerHTML = json.cdate;
		mui(".content-info")[0].innerHTML = json.content;
		window.localStorage.vidioInfo = JSON.stringify(data);
	}
}