function normalItemEvent(event){
	event.stopPropagation();
}

function chickenItemEvent(event){
	event.stopPropagation();
	clickedItemId=4;
	if(isRoleAround()){
		alert('我們在騎車的路上有看到一堆雞');
		tmpWindow=window.open('https://drive.google.com/file/d/1sRRZMIzqvLb2tuWo9gX0aEgMlB_c4MrR/view?usp=sharing', '雞', 100, 100);
		
		let intervalId=setInterval(()=>{
			if(tmpWindow.window === null){
				clearInterval(intervalId);
				alert('更多雞跟一隻狗狗');
				window.open('https://drive.google.com/file/d/1JmLwa1unRoPRpopR7n-kuKZxdGrCk_7n/view?usp=sharing', '還有火雞跟狗', 100, 100);
			}
		}, 1000);
	}
}

function townshipItemEvent(){
	event.stopPropagation();
	clickedItemId=3;
	if(isRoleAround()){
		alert('我們的第一站，番路鄉公所');
		tmpWindow=window.open('https://drive.google.com/file/d/13zR4xJTRSfsSUE20jxXHWRIf0L82r7vh/view?usp=sharing', '鄉公所', 100, 100);

		let intervalId=setInterval(()=>{
			if(tmpWindow.window === null){
				clearInterval(intervalId);
				alert('還有一張圖');
				window.open('https://drive.google.com/file/d/1-SiBfGjCOTvLj7X1SllNMgFUYTbUD42-/view?usp=sharing', '鄉公所', 100, 100);
			}
		}, 1000);
	}
}

function ncyuItemEvent(event){
	event.stopPropagation();
	clickedItemId=5;
	if(isRoleAround()){
		alert('嘉大，我們的出發點');
	}
}

function coatItemEvent(){
	event.stopPropagation();
	clickedItemId=9;
	alert('良心建議，去山上真的要記得帶外套，不然會冷爆');
}

function pavilionItemEvent(){
	event.stopPropagation();
	clickedItemId=10;
	if(isRoleAround()){
		alert('半天岩觀景台，我們在山路騎到一半時有在這裡看一下，回程時也有在這裡休息');
		tmpWindow=window.open('https://drive.google.com/file/d/1WVRk4fzpupK6PC6ZR5dY1kIwFfJBIK-K/view?usp=sharing', '我們的照片', 100, 100);
		
		let intervalId=setInterval(()=>{
			if(tmpWindow.window === null){
				clearInterval(intervalId);
				alert('這是眺望的影片');
				window.open('https://drive.google.com/file/d/1a-ch5Cc7PZoxc-Ix96MsY4QTNjGbw3ru/view?usp=sharing', '眺望', 100, 100);
			}
		}, 1000);
	}
}

function waterfallItemEvent(){
	event.stopPropagation();
	clickedItemId=11;
	if(isRoleAround()){
		alert('之後就在鳳凰瀑布探索啦~~~');
		scrollToNextLayer();
	}
	
}

function house1ItemEvent(){
	event.stopPropagation();
	clickedItemId=12;
	if(isRoleAround()){
		alert('Google 的導航好像有點問題，我們卡在一個地方，不確定要往哪走，還有去問住附近的人。來回亂晃');
		window.open('https://drive.google.com/file/d/1biDZ7dGfQMXOAZei_m0ADyNY-feWf0Ss/view?usp=sharing', '找路', 100, 100);
	}
}

function sign1ItemEvent(){
	event.stopPropagation();
	clickedItemId=13;
	if(isRoleAround()){
		alert('還不知要打什麼');
	}
}

function sign2ItemEvent(){
	event.stopPropagation();
	clickedItemId=14;
	if(isRoleAround()){
		alert('離開鄉公所後，我們就直接往鳳凰瀑布跑去了');
	}
}

function sign3ItemEvent(){
	event.stopPropagation();
	clickedItemId=15;
	if(isRoleAround()){
		alert('經過半天岩觀景台後，再騎一段路，我們就快到鳳凰瀑布了');
	}
}

function sign4ItemEvent(){
	event.stopPropagation();
	clickedItemId=16;
	if(isRoleAround()){
		alert('到鳳凰瀑布前，有好長一段步道要走，要有心裡準備。(PS:我們網頁遊戲上的步道完全無法展現出那步道的險惡)');
	}
}

function sign5ItemEvent(){
	event.stopPropagation();
	clickedItemId=17;
	if(isRoleAround()){
		alert('獻上走步道的剪片');
	}
}

function rock5ItemEvent(){
	event.stopPropagation();
	clickedItemId=18;
	if(isRoleAround()){
		alert('ㄟ...抱歉，這個看起來不太一樣的石頭不是彩蛋，我只是想在這邊擺著它而已');
	}
}

function ladder1ItemEvent(){
	event.stopPropagation();
	clickedItemId=21;
	if(isRoleAround()){
		alert('我們探索完瀑布後，又必需走那步道回去...，走到快往生');
		scrollToNextLayer();
	}
}

function ladder2ItemEvent(){
	event.stopPropagation();
	clickedItemId=22;
	if(isRoleAround()){
		alert('走完步道後，就在鳳凰瀑布探索啦~~~');
		scrollToNextLayer();
	}
}

function throwrockItemEvent(){
	event.stopPropagation();
	clickedItemId=23;
	if(isRoleAround()){
		alert('無聊打水漂');
		window.open('https://drive.google.com/file/d/1htr0P1vt82g84WoAKftz3WaviW4pQQJk/view?usp=sharing', '水漂', 100, 100);
	}
}

function climbrockItemEvent(){
	event.stopPropagation();
	clickedItemId=24;
	if(isRoleAround()){
		alert('爬石頭');
		window.open('https://drive.google.com/file/d/1xslu7nDAbyWF28Eka_Nh04eEzwGjmQai/view?usp=sharing', '爬石頭', 100, 100);
	}
}

function lakeItemEvent(){
	event.stopPropagation();
	clickedItemId=25;
	if(isRoleAround()){
		alert('瀑布的清水');
		window.open('https://drive.google.com/file/d/1Axc7Tu9A2LrF-S3bUchSMbOBO0CSHnH-/view?usp=sharing', '瀑布的清水', 100, 100);
	}
}

function treeItemEvent(){
	event.stopPropagation();
	clickedItemId=26;
	if(isRoleAround()){
		alert('我們有看到一根木頭，本來想拿它來當紀念品，不過後來想想還是算了');
		window.open('https://drive.google.com/file/d/1UZ8a_pnBkaKQlqHzQggJaOY4Rksq673v/view?usp=sharing', '木頭', 100, 100);
	}
}

function ropeItemEvent(){
	event.stopPropagation();
	clickedItemId=27;
	if(isRoleAround()){
		alert('不知為啥，在玩繩子');
		window.open('https://drive.google.com/file/d/1xxUhX2qaNts0DG6lClSqnTD1gID1KRG_/view?usp=sharing', '繩子', 100, 100);
	}
}

function pantItemEvent(){
	event.stopPropagation();
	clickedItemId=28;
	if(isRoleAround()){
		alert('要玩水的話記得要多帶些衣物，尤其是褲子，不然跌下水裡就麻煩了');
		alert('像這樣(PS:傷眼注意)');
		window.open('https://drive.google.com/file/d/1BusZuCIrAE6qsB57Z-XKGBbTvUcGtfun/view?usp=sharing', '跌下水', 100, 100);
	}
}

function sign6ItemEvent(){
	event.stopPropagation();
	clickedItemId=30;
	if(isRoleAround()){
		alert('到達瀑布後，我們有拍個合照');
		window.open('https://drive.google.com/file/d/1Mp7DRqGCiNvgx2Cqu-VoUoU51Mq3xjbD/view?usp=sharing', '合照', 100, 100);
	}
}

function sign7ItemEvent(){
	event.stopPropagation();
	clickedItemId=31;
	if(isRoleAround()){
		alert('瀑布的景觀');
		window.open('https://drive.google.com/file/d/14scFBJ7N5RtZ0Y-Y3iKLKmeikN3EcneK/view?usp=sharing', '鳳凰瀑布景觀', 100, 100);
	}
}

function sign8ItemEvent(){
	event.stopPropagation();
	clickedItemId=32;
	if(isRoleAround()){
		alert('我們在那個瀑布晃滿久的，第一次看到那樣的景觀真的很興奮。(PS:有些石頭是可以點的哦，可以回去檢查看看)');
	}
}

function slideItemEvent(){
	event.stopPropagation();
	clickedItemId=33;
	if(isRoleAround()){
		alert('這裡有全台最長的溜滑梯');
		tmpWindow=window.open('https://drive.google.com/file/d/14EIwptBQ_k3_ZeYEdSDU18oIXpKT4ixu/view?usp=sharing', '溜滑梯', 100, 100);
		
		let intervalId=setInterval(()=>{
			if(tmpWindow.window === null){
				clearInterval(intervalId);
				alert('這是溜滑梯的影片');
				window.open('https://drive.google.com/file/d/1WndALWLkq1HiB5UmPxMgjhnAY-d32aTC/view?usp=sharing', '溜滑梯影片', 100, 100);
			}
		}, 1000);
		
	}
}

function statueItemEvent(){
	event.stopPropagation();
	clickedItemId=34;
	if(isRoleAround()){
		alert('一個大大的觀音像');
		window.open('https://drive.google.com/file/d/1VfcZ2We0iB3tP8RA1J-AyRynAsoSzf1m/view?usp=sharing', '觀音像', 100, 100);
	}
}

function templeItemEvent(){
	event.stopPropagation();
	clickedItemId=35;
	if(isRoleAround()){
		alert('紫雲寺');
		window.open('https://drive.google.com/file/d/1aJz9kHARhhN7NFnyP1Zs8G7zdMkBakuA/view?usp=sharing', '紫雲寺', 100, 100);
	}
}

function house2ItemEvent(){
	event.stopPropagation();
	clickedItemId=36;
	if(isRoleAround()){
		alert('要到情人瀑布前，要經過某戶人的家');
	}
}

function dogItemEvent(){
	event.stopPropagation();
	clickedItemId=37;
	if(isRoleAround()){
		alert('死狗，我們經過時會一直吠，還兩隻。(PS:我們忘了拍死狗，等等的影片會有)');
	}
}

function excavatorItemEvent(){
	event.stopPropagation();
	clickedItemId=38;
	if(isRoleAround()){
		alert('路上有個挖土機擋住');
		tmpWindow=window.open('https://drive.google.com/file/d/1Jw7jnNDYY6IkD1xUf_fJ-LJuHe8f7mCJ/view?usp=sharing', '挖土機', 100, 100);
		
		let intervalId=setInterval(()=>{
			if(tmpWindow.window === null){
				clearInterval(intervalId);
				alert('挖土機上還有個猴子');
				window.open('https://drive.google.com/file/d/1eCSOtEaMV36K0MvzstOfRziJtdwhE9zW/view?usp=sharing', '挖土機猴子', 100, 100);
			}
		}, 1000);
		
	}
}

function loverItemEvent(){
	event.stopPropagation();
	clickedItemId=39;
	if(isRoleAround()){
		alert('情人瀑布，有點無聊');
		tmpWindow=window.open('https://drive.google.com/file/d/1qYQd9K-7fhc6Z6Itm1B_NIPhxj_C-MAV/view?usp=sharing', '情人瀑布', 100, 100);
		
		let intervalId=setInterval(()=>{
			if(tmpWindow.window === null){
				clearInterval(intervalId);
				alert('情人瀑布的回程影片(PS:有死狗)');
				window.open('https://drive.google.com/file/d/1ZQ0YcGxES7kvuUSgahTbUJxjRvUT74Ll/view?usp=sharing', '情人瀑布回程', 100, 100);
			}
		}, 1000);
		
	}
}

function bush1ItemEvent(){
	event.stopPropagation();
	clickedItemId=40;
	if(isRoleAround()){
		alert('草叢沒東西');
	}
}

function bridgeItemEvent(){
	event.stopPropagation();
	clickedItemId=41;
	if(isRoleAround()){
		alert('走上情人橋');
		tmpWindow=window.open('https://drive.google.com/file/d/1En9TU_oa2wwSWShKjSucp4kOJGtRFnW5/view?usp=sharing', '走上情人橋', 100, 100);
	}
}

function eateryItemEvent(){
	event.stopPropagation();
	clickedItemId=42;
	if(isRoleAround()){
		alert('回學校前有找了一間雞肉飯店，吃晚餐，超讚');
		tmpWindow=window.open('https://drive.google.com/file/d/15EfECRKTWNxXWPNPNWpHJphEoaSnwfN9/view?usp=sharing', '雞肉飯店', 100, 100);
	}
}

function sign9ItemEvent(){
	event.stopPropagation();
	clickedItemId=43;
	if(isRoleAround()){
		alert('我們活著走出了步道');
		window.open('https://drive.google.com/file/d/1ZEUUyUVj0g16jDdGy-3lWSFDBmU1QPST/view?usp=sharing', '走出了步道', 100, 100);
	}
}

function sign10ItemEvent(){
	event.stopPropagation();
	clickedItemId=44;
	if(isRoleAround()){
		alert('因為我們想玩看看溜滑梯，所以就跑到了半天岩那裡');
	}
}

function sign11ItemEvent(){
	event.stopPropagation();
	clickedItemId=45;
	if(isRoleAround()){
		alert('我們想再逛個瀑布，情人瀑布，不過這個行程很短，還是鳳凰瀑布比較讚');
	}
}

function sign12ItemEvent(){
	event.stopPropagation();
	clickedItemId=46;
	if(isRoleAround()){
		alert('這算是我們的最後一站，情人吊橋');
		window.open('https://drive.google.com/file/d/1Emzh1LRAIHC4KdxJQJcIFFMv8Bj7OLUb/view?usp=sharing', '情人吊橋', 100, 100);
	}
}

function sign13ItemEvent(){
	event.stopPropagation();
	clickedItemId=47;
	if(isRoleAround()){
		alert('我們旅途的回程部份');
	}
}

function backncyuItemEvent(){
	event.stopPropagation();
	clickedItemId=48;
	if(isRoleAround()){
		alert('感謝你耐心體驗完我們的完整旅途');
		window.location='/';
	}
}