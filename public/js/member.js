let popWindow=document.getElementById('popWindow');
let popWindowDetail=document.getElementById('popWindowDetail');
let popWindowImg=document.getElementById('popWindowImg');
let memberDiv=document.getElementsByClassName('profile-picture');

function centerHandler(){/*設定置中的函式*/
	var scrollDist=$(window).scrollTop();/*取得捲動長度*/
	var myTop=($(window).height()-$("#popWindow").height())/2+scrollDist;
	/*取得垂直中央位置*/
	var myLeft=($(window).width()-$("#popWindow").width())/2;
	/*取得水平中央位置*/
	$("#popWindow").offset({top:myTop,left:myLeft});
	/*設定區塊於水平與垂直置中*/
}

centerHandler (); /*呼叫置中函式，使廣告區塊置中*/
$(window).scroll(centerHandler); /*當網頁捲動時呼叫置中函式*/
$(window).resize(centerHandler); /*當視窗縮放時呼叫置中函式*/

popWindowImg.addEventListener('click', ()=>{
	popWindow.style.display='none';
});

memberDiv[0].addEventListener('click', ()=>{ 
	popWindow.style.display='initial';
	popWindowDetail.innerHTML="<h2><br>洪晨瑋(小洪)<br><br>出生:1999-11-09<br><br>興趣:逛COSTCO、拉桿、出拐子<br><br>專長:網頁前後端、全方位家教</h2>";
	centerHandler();
});

memberDiv[1].addEventListener('click', ()=>{ 
	popWindow.style.display='initial';
	popWindowDetail.innerHTML="<h2><br>李權恒(權桓)<br><br>出生:2000-07-25<br><br>興趣:約跑、裝忙、網路當酸民<br><br>專長:VB、資料庫";
	centerHandler();
});

memberDiv[2].addEventListener('click', ()=>{ 
	popWindow.style.display='initial';
	popWindowDetail.innerHTML="<h2><br>陳贊旭(鳥旭)<br><br>出生:2000-02-18<br><br>興趣:寫程式、魔物獵人、太鼓達人<br><br>專長:JS、C語言</h2>";
	centerHandler();
});

memberDiv[3].addEventListener('click', ()=>{ 
	popWindow.style.display='initial';
	popWindowDetail.innerHTML="<h2><br>林忠廷(渣男)<br><br>出生:2000-01-07<br><br>興趣:打籃球、和球經聊天<br><br>專長:網頁前端、資料庫";
	centerHandler();
});

memberDiv[4].addEventListener('click', ()=>{ 
	popWindow.style.display='initial';
	popWindowDetail.innerHTML="<h2><br>游凱傑(童顏)<br><br>出生:2000-08-22<br><br>興趣:夾娃娃、拉桿、唬爛<br><br>專長:VB、網頁前端</h2>";
	centerHandler();
});

memberDiv[5].addEventListener('click', ()=>{ 
	popWindow.style.display='initial';
	popWindowDetail.innerHTML="<h2><br>李彥賢(帥哥)<br><br>出生:未知(看起來像28歲)<br><br>興趣:逛COSTCO、教課<br><br>專長:機器學習、文字探勘、大數據分析......等";
	centerHandler();
});