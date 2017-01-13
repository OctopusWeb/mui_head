(function($) {
mui.init();
$.ready(function() {
	var jsonDom1 = mui(".mui-table-view")[0];
	var jsonDom2 = mui(".mui-table-view")[1];
	var page=1;
	var type=false;
	statusFun(true,1);
	function statusFun(bol,pages){
		if(bol){
			getJsonAccess.cacheData(localStorage["consult1"],drawHtml1,jsonDom1);
			getJsonAccess.cacheData(localStorage["consult2"],drawHtml2,jsonDom2);
			setTimeout(function(){statusFun(false,pages)},1000);
		}else{
			var data1 = '?apk='+localStorage["apk"]+'&pgSize=5&pgCur='+pages;
			var data2 = '?apk='+localStorage["apk"]+'&pgSize=5&pgCur='+pages;
			getJsonAccess.getJson('nzf2/s/question_lists',data1,drawHtml1);
			getJsonAccess.getJson('nzf2/s/question_lists',data2,drawHtml2);
		}
	}

	function drawHtml1(data){
		if(typeof(data) == "string"){data = JSON.parse(data)}
		var json = data.datas.rds;
		if(type){
			var index=jsonDom2.innerHTML
		}else{
			var index=""
		}
		for(var i=0;i<json.length;i++){
			index+='<li class="mui-table-view-cell"><div class="news"><div class="newsTitle">'
			index+='<img src="'+json[i].uface+'"/><p>'+json[i].uname+'</p><span>'+json[i].qtime		
			index+='</span></div><div class="newsContent"><p>'+json[i].desc+'</p></div>'		
			index+='<div class="newsInfo"><p><i class="iconfont icon-bookmarks"></i>'+json[i].type					
			index+='</p><span><i class="iconfont icon-dialogue"></i>评论('+json[i].comment+')</span>'							
			index+='</div></div></li>'
		}
		jsonDom1.innerHTML = index;
		window.localStorage.consult1 = JSON.stringify(data);
	}
	function drawHtml2(data){
		if(typeof(data) == "string"){data = JSON.parse(data)}
		console.log(JSON.stringify(data))
		var json = data.datas.rds;
		if(type){
			var index=jsonDom2.innerHTML
		}else{
			var index=""
		}
		
		for(var i=0;i<json.length;i++){
			index+='<li class="mui-table-view-cell"><div class="news"><div class="newsTitle">'
			index+='<img src="'+json[i].uface+'"/><p>'+json[i].uname+'</p><span>'+json[i].qtime		
			index+='</span></div><div class="newsContent"><p>'+json[i].desc+'</p></div>'		
			index+='<div class="newsInfo"><p><i class="iconfont icon-bookmarks"></i>'+json[i].type					
			index+='</p><span><i class="iconfont icon-dialogue"></i>评论('+json[i].comment+')</span>'							
			index+='</div></div></li>'
		}
		jsonDom2.innerHTML = index;
		window.localStorage.consult2 = JSON.stringify(data);
	}

var deceleration = mui.os.ios?0.003:0.0009;
$('.mui-scroll-wrapper').scroll({
	bounce: false,
	indicators: true, //是否显示滚动条
	deceleration:deceleration
});

	//循环初始化所有下拉刷新，上拉加载。
	$.each(document.querySelectorAll('.mui-slider-group .mui-scroll'), function(index, pullRefreshEl) {
		$(pullRefreshEl).pullToRefresh({
			down: {
				callback: function() {
					var self = this;
					setTimeout(function() {
						type = false;
						statusFun(false,1);
						page=1;
						self.endPullDownToRefresh();
					}, 1000);
				}
			},
			up: {
				callback: function() {
					var self = this;
					setTimeout(function() {
						type = true;
						statusFun(false,page++);
						self.endPullUpToRefresh();
					}, 1000);
				}
			}
		});
	});
	var createFragment = function(ul, index, count, reverse) {
		var length = ul.querySelectorAll('li').length;
		var fragment = document.createDocumentFragment();
		var li;
		for (var i = 0; i < count; i++) {
			li = document.createElement('li');
			li.className = 'mui-table-view-cell';
			li.innerHTML = '第' + (index + 1) + '个选项卡子项-' + (length + (reverse ? (count - i) : (i + 1)));
			fragment.appendChild(li);
		}
		return fragment;
	};
});
})(mui);