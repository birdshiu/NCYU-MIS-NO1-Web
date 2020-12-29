let popWindow=document.getElementById('popWindow');

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


document.getElementById('popWindowImg').addEventListener('click', ()=>{
	popWindow.style.display="none";
});

document.getElementById('context').addEventListener('click', ()=>{
	popWindow.style.display="initial";
});