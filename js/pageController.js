var pageName = ["index","aboutUs","askPage","classRoom","consult","doctor","doctorInfo","navigation","vip","classInfo","videoInfo","location","order_doc","mineInfo","others","userinfo","strokeContent"];
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
if(mui(".foot div")[1]){
	mui(".foot div")[1].addEventListener("tap",function(){
		localStorage.mineTap=0;
		var webview = mui.openWindow({
			url:pageName[13]+".html",
			id :pageName[13],
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
if(mui(".foot div")[3]){	
	mui(".foot div")[3].addEventListener("tap",function(){
		var webview = mui.openWindow({
			url:pageName[15]+".html",
			id :pageName[15],
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
			url:pageName[8]+".html",
			id :pageName[8],
			extras:{
			}
		});
	})
}
if(mui(".bottomBtn1")[0]){	
	mui(".bottomBtn1")[0].addEventListener("tap",function(){
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
		mui.toast("正在筹备中，请等待")
//		var webview = mui.openWindow({
//			url:pageName[4]+".html",
//			id :pageName[4],
//			extras:{
//			}
//		});
	})
}	
if(mui(".consult")[1]){
	mui(".consult")[1].addEventListener("tap",function(){
		var webview = mui.openWindow({
			url:pageName[4]+".html",
			id :pageName[4],
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
if(mui(".yuyue")[0]){
	mui(".yuyue")[0].addEventListener("tap",function(){
		var webview = mui.openWindow({
			url:pageName[12]+".html",
			id :pageName[12],
			extras:{
			}
		});
	})
}
if(mui(".risk")[0]){
	mui(".risk")[0].addEventListener("tap",function(){
		var webview = mui.openWindow({
			url:pageName[16]+".html",
			id :pageName[16],
			extras:{
			}
		});
	})
}
if(mui(".doctor")[0]){
	for(var i=0;i<mui(".doctor").length;i++){
		addEventD(i);
	}
}

function addEventD(num){
	mui(".doctor")[num].addEventListener("tap",function(){
		window.localStorage.doctorId = mui(".doctor")[num].id;
		console.log(localStorage["doctorId"])
		var webview = mui.openWindow({
			url:pageName[6]+".html",
			id :pageName[6],
			extras:{
			}
		});
	})
}

if(mui(".room")){
	for(var i=0;i<mui(".room").length;i++){
		addEventR(i);
	}
}

function addEventR(num){
	mui(".room")[num].addEventListener("tap",function(){
		window.localStorage.roomId = mui(".room")[num].id;
		console.log(localStorage["room"])
		var webview = mui.openWindow({
			url:pageName[9]+".html",
			id :pageName[9],
			extras:{
			}
		});
	})
}
if(mui(".videoBox")){
	for(var i=0;i<mui(".videoBox").length;i++){
		addEventV(i);
	}
}

function addEventV(num){
	mui(".videoBox")[num].addEventListener("tap",function(){
		window.localStorage.videoId = mui(".videoBox")[num].id;
		console.log(localStorage["videoId"])
		var webview = mui.openWindow({
			url:pageName[10]+".html",
			id :pageName[10],
			extras:{
			}
		});
	})
}

if(mui(".hos")){
	for(var i=0;i<mui(".hos").length;i++){
		addEventH(i);
	}
}


function addEventH(num){
	mui(".hos")[num].addEventListener("tap",function(){
		window.localStorage.hosId = mui(".hos")[num].id;
		console.log(localStorage["hos"])
		var webview = mui.openWindow({
			url:pageName[11]+".html",
			id :pageName[11],
			extras:{
			}
		});
	})
}

var getJsonAccess = {}
var pubUrl="http://114.215.144.251:8888/";
getJsonAccess.getJson = function(url,data,onComplete){
	url = url+data;
	console.log(pubUrl+url)
	var xhr = new plus.net.XMLHttpRequest();
	xhr.onreadystatechange = function () {
		switch ( xhr.readyState ) {
			
			case 4:
				if ( xhr.status == 200 ) { 
					onComplete(xhr.responseText)
				} else {
					mui.toast( "xhr请求失败："+xhr.readyState );
				}
				break;
			default :
				break;
		}
	}
	xhr.open( "GET",pubUrl+url);
	xhr.send();
}
getJsonAccess.postJson = function(url,data,onComplete,value){
	url = url+data;
	console.log(pubUrl+url)
	var xhr = new plus.net.XMLHttpRequest();
	xhr.onreadystatechange = function () {
		switch ( xhr.readyState ) {
			
			case 4:
				if ( xhr.status == 200 ) { 
					onComplete(xhr.responseText)
				} else {
					mui.toast( "xhr请求失败："+xhr.readyState );
				}
				break;
			default :
				break;
		}
	}
	xhr.open( "POST",pubUrl+url);
	var data=value;
	xhr.send();
}

getJsonAccess.cacheData = function(strorageJson,onComplete,dom){
	if(strorageJson && strorageJson!="undefined"){
		onComplete(JSON.parse(strorageJson));
		getJsonAccess.cacheImg(dom);
	}
}
getJsonAccess.cacheImg = function(dom){
	var imgArr = dom.getElementsByTagName("img");
	for (var i=0;i<imgArr.length;i++) {
		imgArr[i].src="img/noneImg.png"
	}
}


