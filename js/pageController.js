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

if(mui(".doctor")){
	for(var i=0;i<mui(".doctor").length;i++){
		addEvent(i);
	}
}

function addEvent(num){
	mui(".doctor")[num].addEventListener("tap",function(){
		var webview = mui.openWindow({
			url:pageName[6]+".html",
			id :pageName[6],
			extras:{
			}
		});
	})
}
var pubUrl="http://114.215.144.251:8888/nzf2/";
//function getJson(url,data){
//	var xhr = new plus.net.XMLHttpRequest();
//	xhr.onreadystatechange = function () {
//		switch ( xhr.readyState ) {
//			case 0:
//				alert( "xhr请求已初始化" );
//			break;
//			case 1:
//				alert( "xhr请求已打开" );
//			break;
//			case 2:
//				alert( "xhr请求已发送" );
//			break;
//			case 3:
//				alert( "xhr请求已响应");
//				break;
//			case 4:
//				if ( xhr.status == 200 ) {
//					return xhr.responseText
//				} else {
//					alert( "xhr请求失败："+xhr.readyState );
//				}
//				break;
//			default :
//				break;
//		}
//	}
//	xhr.open( "GET", pubUrl+url);
//	xhr.send();
//}
function getJson(){
	return {"result":"true","msg":"","datas":{"rds":[{"image":"image/lb1.png","cdate":"2016-11-03 15:11:27","cuser":"李四","href":"/f/view-L0011-L0011001.html","title":"鼻窦炎长期不愈要小心啦 可能会得鼻咽癌","tid":"","key":"文章关键字","desc":"文章摘要"},{"image":"image/lb1.png","cdate":"2016-11-03 15:11:27","cuser":"张三","href":"/f/view-L0011-L0011001.html","title":"鼻窦炎长期不愈要小心啦 可能会得鼻咽癌","tid":"","key":"文章关键字","desc":"文章摘要"}],"pgRows":0,"pgCur":1,"pgNum":1,"pgSize":-1},"apk":"10000000"}
}
