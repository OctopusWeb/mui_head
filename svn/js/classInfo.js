mui.init();
window.onload = function(){
	var jsonDom = mui(".mui-content")[0];
	statusFun(true);
	function statusFun(bol){
		if(bol){
			getJsonAccess.cacheData(localStorage["classInfo"],drawHtml,jsonDom);
			setTimeout(function(){statusFun(false)},1000);
		}else{
			var data = "?apk="+localStorage["apk"]+"&tid="+localStorage["roomId"]
			getJsonAccess.getJson('nzf2/s/info_article',data,drawHtml); 
		}
	}
	
	function drawHtml(data){
		if(typeof(data) == "string"){data = JSON.parse(data)}
		var json = data.datas;
		console.log(JSON.stringify(json))
		var index="";
		index+='<div class="content">'
		index+='<h1>'+json.title+'</h1>'
	    index+='<span>浏览人数：'+json.count+'次'+json.cdate+'</span>	'
	    index+=	json.content+'</div><div class="contentList"><h1>相关推荐</h1>'
	    for (var i=0;i<json.relate.length;i++) {
	    	index+='<div class="list">'
	    	index+='<h2>'+json.relate[i].title+'</h2>'
	    	index+='<p>浏览人数：'+json.relate[i].count+'次 '+json.relate[i].cdate+'</p><span class="mui-icon mui-icon-forward"></span></div>'
	    }
	    index+='</div>'		
		jsonDom.innerHTML = index;
		window.localStorage.aboutUs = JSON.stringify(data);
	}
}