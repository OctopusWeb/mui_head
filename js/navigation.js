window.onload = function(){
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
	var jsonDom = mui(".doctor-list")[0];
	
	var search = mui(".search")[0];
	var selected = mui(".selected")[0];
	var page=1;
	var type = false;
	statusFun(true,1);
	search.addEventListener("change",function(){
		var data = '?apk='+localStorage["apk"]+'&x'+localStorage["latitude"]+'&y='+localStorage["longitude"]+'&name='+search.value+'&city='+selected.value;
		getJsonAccess.getJson('nzf2/s/jcd_lists',data,drawHtml);
	})	
	function pulldownRefresh() {
		setTimeout(function() {
			type = true;
			statusFun(true,1);
			page = 1;
			mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //refresh completed
		}, 1500);
	}
	var count = 0;
	/**
	 * 上拉加载具体业务实现
	 */
	function pullupRefresh() {
		setTimeout(function() {
			type = false;
			statusFun(false,page++);
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
	
	function statusFun(bol,pages){
		if(bol){
			getJsonAccess.cacheData(localStorage["navigation"],drawHtml,jsonDom);
			setTimeout(function(){statusFun(false,pages)},1000);
		}else{
			var data = '?apk='+localStorage["apk"]+'&x'+localStorage["latitude"]+'&y='+localStorage["longitude"]+'&pgSize=5&pgCur='+pages
			getJsonAccess.getJson('nzf2/s/jcd_lists',data,drawHtml);
		}
	}

	function drawHtml(data){
		if(typeof(data) == "string"){data = JSON.parse(data)}
		var json = data.datas.rds;
		if(type){
			var index=''
		}else{
			var index=jsonDom.innerHTML
		}
		
		for (var i=0;i<json.length;i++) {
			index+='<div class="hos" id="'+json[i].id+'"><h1>'+json[i].name+'</h1><h2>'+json[i].honor+'</h2><h2>'+json[i].type
			index+='</h2><h2><i class="icon-dingwei iconfont"></i>'+json[i].dist+'</h2></div>'
		}
		jsonDom.innerHTML = index;
		for(var i=0;i<mui(".hos").length;i++){
			addEventH(i);
		}
		window.localStorage.navigation = JSON.stringify(data);
	}
}