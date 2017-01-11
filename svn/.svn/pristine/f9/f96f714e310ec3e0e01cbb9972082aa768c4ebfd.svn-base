mui.init();
window.onload = function(){
	var jsonDom = mui(".mui-content")[0];
	statusFun(true);
	function statusFun(bol){
		if(bol){
			getJsonAccess.cacheData(localStorage["doctorInfo"],drawHtml,jsonDom);
			setTimeout(function(){statusFun(false)},1000);
		}else{
			var data = '?apk='+localStorage["apk"]+'&id='+localStorage["doctorId"]
			getJsonAccess.getJson('nzf2/s/dr_info',data,drawHtml);
		}
	}

	function drawHtml(data){
		if(typeof(data) == "string"){data = JSON.parse(data)}
		var json = data.datas;
		localStorage.doctorPic = json.photo;
		localStorage.doctorName = json.name;
		localStorage.doctorHonor = json.honor;
		var index='<div class="doctorHead"><img src="'+json.photo+'"/><h1>'+json.name+
					'</h1><h2>'+json.honor+'</h2> </div><div class="doctorInfo">'+
					'<i class="icon-shoucang iconfont"></i><h1>医生简介</h1><p>'+
					json.intro+'</p></div><div class="bottomBtn"><h1 class="yuyue">'+
					'<span class="mui-icon mui-icon-chat"></span>我要预约</h1></div>'
		jsonDom.innerHTML = index;
		mui(".yuyue")[0].addEventListener("tap",function(){
			var webview = mui.openWindow({
				url:pageName[12]+".html",
				id :pageName[12],
				extras:{
				}
			});
		})
		window.localStorage.doctorInfo = JSON.stringify(data);
	}
}