var adventureDivs=document.getElementsByClassName('adventure-div'); //adventureDive的寛是500高是1000
var adventureDivsInterval=(window.screen.availHeight-(window.outerHeight-window.innerHeight)-500)/2;//每個 div 間的間隔
var adventureTds=document.getElementsByTagName('td');
var html=document.getElementsByTagName('html')[0]; //設定 scroll behavior 要用到的
var roleImage=document.createElement('img');
var currentLayer=2;

var BasicW, BasicH;
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
	adventureDivs[currentLayer].addEventListener('click', adventureDivEvent);
}
		
window.onload=function(){//初始化的部份

	for(let i=0;i<3;i++){ //Map初始化
		roadMap[i]=new Array();
		for(let j=0;j<10;j++){
			roleMap[j]=new Array();//這個順便一起
			roadMap[i][j]=new Array();
			for(let k=0;k<20;k++){
				roadMap[i][j][k]=0;
				roleMap[j][k]=0;
			}
		}
	}
	for(let div of adventureDivs){
		//每個 adventureDiv 要留空白的部分
		div.style.marginTop=adventureDivsInterval+'px';
		div.style.marginBottom=adventureDivsInterval+'px';
		let marginLeftRight=(window.screen.availWidth-900)/2
		div.style.marginLeft=marginLeftRight+'px';
		div.style.marginRight='auto';//marginLeftRight+'px';
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

	setItem(2, 0, 8, 1, 1, Items['house']);
}



