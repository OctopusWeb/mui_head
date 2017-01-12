mui.init({
	pullRefresh: {
		container: '#pullrefresh',
		down: {
			callback: pulldownRefresh
		},
		up: {
			contentrefresh: '正在加载...',
			callback: pullupRefresh
		}
	}
});
var page = 1;
window.onload = function(){
	var slider = mui("#slider");
	slider.slider({
	  interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
	});
}
function pulldownRefresh() {
	setTimeout(function() {
			type = true;
			statusFun1(2,5);
			page = 0;
			mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //refresh completed
		}, 1500);
	}
	/**
	 * 上拉加载具体业务实现
	 */
	function pullupRefresh() {
		setTimeout(function() {
			type = false;
			statusFun1(page++,5);
			mui('#pullrefresh').pullRefresh().endPullupToRefresh(false);
		}, 1500);
	}
	if (mui.os.plus) {
		mui.plusReady(function() {
			setTimeout(function() {
				mui('#pullrefresh').pullRefresh().pullupLoading();
			}, 1000);

		});
	} else {
		mui.ready(function() {
			mui('#pullrefresh').pullRefresh().pullupLoading();
		});
	}
	
	var jsonDom = mui(".room-list")[0];
	var jsonDom1 = mui("#banner")[0];
	statusFun(true);
	function statusFun(bol){
		if(bol){
			getJsonAccess.cacheData(localStorage["infoArticle"],drawHtml,jsonDom);
			getJsonAccess.cacheData(localStorage["banner"],drawHtml1,jsonDom1);
			setTimeout(function(){statusFun(false)},1000);
		}else{
			var data = '?apk='+localStorage["apk"]+'&type=bjkt'+"&pgSize="+1+"&pgCur="+5
			getJsonAccess.getJson('nzf2/s/info_articles',data,drawHtml);
			var data1 = "?apk="+localStorage["apk"]
			getJsonAccess.getJson('nzf2/s/info_banners',data1,drawHtml1);
		}
	}
	function statusFun1(pgSize,pgCur){
		var data = '?apk='+localStorage["apk"]+'&type=bjkt'+"&pgSize="+pgSize+"&pgCur="+pgCur
		getJsonAccess.getJson('nzf2/s/info_articles',data,drawHtml);
	}

	function drawHtml(data){
		if(typeof(data) == "string"){data = JSON.parse(data)}
		var json = data.datas.rds;
		if(type){
			var index=""
		}else{
			var index = jsonDom.innerHTML;
		}
		
		for(var i=0;i<json.length;i++){
			index+='<div class="room" id="'+json[i].tid+'">'
			index+='<img src="'+pubUrl+json[i].image+'"/>'
			index+='<h1>'+json[i].title+'</h1>'
			index+='<h2>'+json[i].desc+'</h2>'
			index+='<span class="mui-icon mui-icon-arrowright"></span></div>'
		}
		jsonDom.innerHTML = index;
		for(var i=0;i<mui(".room").length;i++){
			addEventR(i);
		}
		window.localStorage.infoArticle = JSON.stringify(data);
	}
	function drawHtml1(data){
		if(typeof(data) == "string"){data = JSON.parse(data)}
		var json = data.datas.banners;
		var index = '<div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img src="'+json[json.length-1].href+'" /></a></div>'
		for(var i=0;i<json.length;i++){
			index+='<div class="mui-slider-item"><a href="#"><img src="'+json[i].href+'" /></a></div>'
		}
		index+='<div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img src="'+json[0].href+'" /></a></div>';
		jsonDom1.innerHTML = index;
		window.localStorage.banner = JSON.stringify(data);
	}