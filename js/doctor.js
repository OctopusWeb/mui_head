
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
	var page=1;
	var type = false;
	var jsonDom = mui(".doctor-list")[0];
	var search = mui(".search")[0];
	search.addEventListener("change",function(){
		var data = '?apk='+localStorage["apk"]+"&dname="+search.value+'&pgSize=5&pgCur='+1;
		getJsonAccess.getJson('nzf2/s/dr_lists',data,drawHtml);
	})
	function pulldownRefresh() {
		setTimeout(function() {
				type = true;
				statusFun(true,5);
				page = 1;
				mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //refresh completed
		}, 1500);
	}
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
			getJsonAccess.cacheData(localStorage["doctor"],drawHtml,jsonDom);
			setTimeout(function(){statusFun(false,1)},1000);
		}else{
			var data = '?apk='+localStorage["apk"]+'&pgSize=5&pgCur='+pages;
			getJsonAccess.getJson('nzf2/s/dr_lists',data,drawHtml);
		}
	}

	function drawHtml(data){
		if(typeof(data) == "string"){data = JSON.parse(data)}
		var json = data.datas.rds;
		if(type){
			var index=""
		}else{
			var index=jsonDom.innerHTML;
		}
		
		for(var i=0;i<json.length;i++){
			index+='<div class="doctor" id="'+json[i].id+'"><img src="'+json[i].photo+'" alt="" />'
			index+='<h1>'+json[i].name+'</h1><h2>'+json[i].honor+'</h2><h3>'+json[i].hospital+'</h3></div>'				
		}
		jsonDom.innerHTML = index;
		for(var i=0;i<mui(".doctor").length;i++){
			addEventD(i);
		}
		window.localStorage.doctor = JSON.stringify(data);
	}
}
