mui.init()
window.onload = function(){
	var jsonDom = mui(".content")[0];
	statusFun(true);
	function statusFun(bol){
		if(bol){
			getJsonAccess.cacheData(localStorage["locations"],drawHtml,jsonDom);
			setTimeout(function(){statusFun(false)},1000);
		}else{
			var data = "?apk="+localStorage["apk"]+'&id='+localStorage["hosId"];
			getJsonAccess.getJson('nzf2/s/jcd_info',data,drawHtml); 
		}
	}
	function drawHtml(data){
		if(typeof(data) == "string"){data = JSON.parse(data)}
		var json = data.datas;
		var index="";
		index+='<h1>'+json.name+'</h1>'
		index+='<span>'+json.honor+'</span><span>'+json.type+'</span>'
		index+='<p>地址：'+json.addr+'</p>'
		index+='<div id="container" style="width:100%; height:400px"></div>'
		index+='<div class="btn"><h2>查看地图</h2><h2>我要预约</h2></div>'
		jsonDom.innerHTML = index;
		addMap(json.x,json.y,json.name)
		window.localStorage.locations = JSON.stringify(data);
	}
	
	function addMap(x,y,name){
		var map = new AMap.Map('container', {
		    resizeEnable: true,
		    zoom:17,
		    center: [x, y]       
		});
		marker = new AMap.Marker({
		    position: [x, y],
		    title: name,
		    map: map
		});
	}
	
}