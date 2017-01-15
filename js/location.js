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
		
		// 百度地图API功能
		var map = new BMap.Map("container"); // 创建Map实例
		var point = new BMap.Point(116.4135540000,39.9110130000);
		map.centerAndZoom(point, 15); // 初始化地图,设置中心点坐标和地图级别
		map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
		var marker = new BMap.Marker(point);  // 创建标注
		map.addOverlay(marker);               // 将标注添加到地图中
		marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
//			map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
		map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
		
//		addMap(json.x,json.y,json.name)
//		addMap(34,116,"北京")
//		window.localStorage.locations = JSON.stringify(data);
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