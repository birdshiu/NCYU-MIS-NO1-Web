var adventureDivs=document.getElementsByClassName('adventure-div'); //adventureDive的寛是500高是1000
var adventureDivsInterval=(window.screen.availHeight-(window.outerHeight-window.innerHeight)-500)/2;//每個 div 間的間隔
var html=document.getElementsByTagName('html')[0]; //設定 scroll behavior 要用到的

function noScroll(){
	window.scrollTo(0, 0);
}

function disableScroll() {//讓螢幕不能卷動的function
		let scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
		let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  
		window.onscroll = function() { 
			window.scrollTo(scrollLeft, scrollTop); 
		};
	}

function enableScroll(){//讓螢幕可以卷動的function
	window.onscroll=null;
}
		
function scrollToLayer(layer){
	enableScroll();

	html.style.scrollBehavior='smooth';//設成平滑卷動
	
	window.scroll({
		top:adventureDivs[layer].offsetTop - adventureDivsInterval,
		left:0,
		behavior:'smooth'
	});
	
	setTimeout(()=>{//等它卷完後再disable掉
		html.style.scrollBehavior='initial'; //讓 disableScroll()可以作用
		disableScroll();
	}, 800);
	
}
		
window.onload=function(){
	for(let div of adventureDivs){
		//每個 adventureDiv 要留空白的部分
		div.style.marginTop=adventureDivsInterval+'px';
		div.style.marginBottom=adventureDivsInterval+'px';
				
		//每個 adventureDiv 左右 maring 的部分
		let marginLeftRight=(window.screen.availWidth-1000)/2;
		div.style.marginLeft=marginLeftRight+'px';
		div.style.marginRight=marginLeftRight+'px';
	}
		
	BasicW=document.getElementsByClassName('adventure-div')[0].offsetWidth/XStep;
	BasicH=document.getElementsByClassName('adventure-div')[0].offsetHeight/YStep;
			
	roleImage.height=BasicH;
	roleImage.width=BasicW;
			
	setRole(0, 9);
	
	window.scroll({
		top:adventureDivs[2].offsetTop-adventureDivsInterval,
		left:0,
	});
	
	
}
		
adventureDivs[0].addEventListener('click', (event)=>{
	let targetX=Math.floor(event.offsetX/BasicW);
	let targetY=Math.floor(event.offsetY/BasicH);
			
	basicGoTo(targetX, targetY);
});
		
roleImage.addEventListener('click', (event)=>{
	event.stopPropagation(); //按到圖片會怪怪的
});