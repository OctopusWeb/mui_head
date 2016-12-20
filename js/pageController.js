var pageName = ["index","aboutUs","askPage","classRoom","consult","doctor","doctorInfo","navigation","vip"];
if(mui(".foot div")[0]){
	mui(".foot div")[0].addEventListener("tap",function(){
		var webview = mui.openWindow({
			url:pageName[0]+".html",
			id :pageName[0],
			extras:{
			}
		});
	});
}
if(mui(".foot div")[2]){	
	mui(".foot div")[2].addEventListener("tap",function(){
		var webview = mui.openWindow({
			url:pageName[3]+".html",
			id :pageName[3],
			extras:{
			}
		});
	})
}
if(mui(".care")[0]){	
	mui(".care")[0].addEventListener("tap",function(){
		var webview = mui.openWindow({
			url:pageName[3]+".html",
			id :pageName[3],
			extras:{
			}
		});
	})
}

if(mui(".about")[0]){	
	mui(".about")[0].addEventListener("tap",function(){
		var webview = mui.openWindow({
			url:pageName[1]+".html",
			id :pageName[1],
			extras:{
			}
		});
	})
}	
if(mui(".teach")[0]){		
	mui(".teach")[0].addEventListener("tap",function(){
		var webview = mui.openWindow({
			url:pageName[5]+".html",
			id :pageName[5],
			extras:{
			}
		});
	})
}	
if(mui(".detect")[0]){	
	mui(".detect")[0].addEventListener("tap",function(){
		var webview = mui.openWindow({
			url:pageName[7]+".html",
			id :pageName[7],
			extras:{
			}
		});
	})
}	
if(mui(".consult")[0]){	
	mui(".consult")[0].addEventListener("tap",function(){
		var webview = mui.openWindow({
			url:pageName[4]+".html",
			id :pageName[4],
			extras:{
			}
		});
	})
}	
if(mui(".consult")[1]){
	mui(".consult")[1].addEventListener("tap",function(){
		var webview = mui.openWindow({
			url:pageName[8]+".html",
			id :pageName[8],
			extras:{
			}
		});
	})
}
	
if(mui(".askBtn")[0]){
	mui(".askBtn")[0].addEventListener("tap",function(){
		var webview = mui.openWindow({
			url:pageName[2]+".html",
			id :pageName[2],
			extras:{
			}
		});
	})
}

