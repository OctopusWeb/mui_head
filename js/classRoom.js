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
			page = 1; 
			statusFun1(5,page);
			mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //refresh completed
		}, 1500);
	}
	/**
	 * 上拉加载具体业务实现
	 */
	function pullupRefresh() {
		setTimeout(function() {
			statusFun1(5,++page);
			mui('#pullrefresh').pullRefresh().endPullupToRefresh(false);
		}, 1500);
	}
	
	var jsonDom = mui(".room-list")[0];
	var jsonDom1 = mui("#banner")[0];
	statusFun(true,page);
	function statusFun(bol,page){
		if(bol){
			getJsonAccess.cacheData(localStorage["infoArticle"],drawHtml,jsonDom);
			getJsonAccess.cacheData(localStorage["banner"],drawHtml1,jsonDom1);
			setTimeout(function(){statusFun(false,page)},1000);
		}else{
			var data = '?apk='+localStorage["apk"]+'&type=bjkt'+"&pgSize="+5+"&pgCur="+page
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
		if(page == 1){
			var index=""
		}else{
			var index = jsonDom.innerHTML;
		}
		
		for(var i=0;i<json.length;i++){
			index+='<div class="room" id="'+json[i].tid+'">'
			index+='<img src="'+json[i].image+'"/>'
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