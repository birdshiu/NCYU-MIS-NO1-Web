var adventureDivs=document.getElementsByClassName('adventure-div'); //adventureDive的寛是500高是1000
var adventureDivsInterval=(window.screen.availHeight-(window.outerHeight-window.innerHeight)-500)/2;//每個 div 間的間隔
var adventureTds=document.getElementsByTagName('td');
var html=document.getElementsByTagName('html')[0]; //設定 scroll behavior 要用到的
var roleImage=document.createElement('img');
var currentLayer=2;

var BasicW, BasicH;
var roleX, roleY;
var isMoving=false;
var isLeft=true;
const XStep=20;
const YStep=10;

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

function adventureDivEvent(event){
	let targetX=Math.floor(event.offsetX/BasicW);
	let targetY=Math.floor(event.offsetY/BasicH);
			
	basicGoTo(targetX, targetY);
}
		
function scrollToNextLayer(){
	if(currentLayer < 0) return;
	
	currentLayer-=1;
	
	enableScroll();
	
	html.style.scrollBehavior='smooth';//設成平滑卷動
	/*scroll-behavior:smooth;讓 html 卷得平滑*/
	
	window.scroll({
		top:adventureTds[currentLayer].offsetTop,
		left:0,
		behavior:'smooth'
	});
	
	setTimeout(()=>{//等它卷完後再disable掉
		html.style.scrollBehavior='initial'; //讓 disableScroll()可以作用
		disableScroll();
	}, 800);
	
	adventureDivs[currentLayer].appendChild(roleImage);
	setRole(0, 9);
}
		
window.onload=function(){//初始化的部份
	for(let div of adventureDivs){
		//每個 adventureDiv 要留空白的部分
		div.style.marginTop=adventureDivsInterval+'px';
		div.style.marginBottom=adventureDivsInterval+'px';
				
		//每個 adventureDiv 左右 maring 的部分
		let marginLeftRight=(window.screen.availWidth-1000)/2 -10;
		div.style.marginLeft=marginLeftRight+'px';
		div.style.marginRight=marginLeftRight+'px';
	}
		
	BasicW=document.getElementsByClassName('adventure-div')[0].offsetWidth/XStep;
	BasicH=document.getElementsByClassName('adventure-div')[0].offsetHeight/YStep;
			
	roleImage.src='./Image/Role/frame-1.png';
	roleImage.height=BasicH;
	roleImage.width=BasicW;
	roleImage.style.position='relative';
	roleImage.addEventListener('click', (event)=>{
		event.stopPropagation(); //按到圖片會怪怪的
	});
	
	window.scroll({//先卷到最下層
		top:adventureTds[currentLayer].offsetTop,
		left:0,
	});
	
	disableScroll();//固定視窗
	
	adventureDivs[currentLayer].appendChild(roleImage);
	adventureDivs[currentLayer].addEventListener('click', adventureDivEvent);
	setRole(0, 9);
}



