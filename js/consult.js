mui.init();
window.onload = function(){
	var jsonDom1 = mui(".mui-table-view")[0];
	var jsonDom2 = mui(".mui-table-view")[1];
	statusFun(true);
	function statusFun(bol){
		if(bol){
			getJsonAccess.cacheData(localStorage["consult1"],drawHtml1,jsonDom1);
			getJsonAccess.cacheData(localStorage["consult2"],drawHtml2,jsonDom2);
			setTimeout(function(){statusFun(false)},10);
		}else{
			var data1 = '?apk='+localStorage["apk"]
			var data2 = '?apk='+localStorage["apk"]+'&uid=f987daf32af145308deb4ac4db777119'
			getJsonAccess.getJson('s/question_lists',data1,drawHtml1);
			getJsonAccess.getJson('s/question_lists',data2,drawHtml2);
		}
	}

	function drawHtml1(data){
		if(typeof(data) == "string"){data = JSON.parse(data)}
		var json = data.datas.rds;
		var index=""
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
		var index=""
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
}