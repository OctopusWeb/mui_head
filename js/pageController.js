var pageName = ["index","aboutUs","askPage","classRoom","consult","doctor","doctorInfo","navigation","vip","classInfo","videoInfo","location"];

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
if(mui(".video")){
	for(var i=0;i<mui(".video").length;i++){
		addEventV(i);
	}
}

function addEventV(num){
	mui(".video")[num].addEventListener("tap",function(){
		window.localStorage.doctorId = mui(".video")[num].id;
		console.log(localStorage["video"])
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


