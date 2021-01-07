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

function setLayer1(){//第一層的佈景
	//rock2
	for(let i=0;i<3;i++) setItem(2, i, 7, 1, 1, Items['rock2']);
	for(let i=2;i<8;i++) setItem(2, i, 8, 1, 1, Items['rock2']);
	setItem(2, 5, 7, 1, 1, Items['rock2']);
	setItem(2, 8, 7, 1, 1, Items['rock2']);
	setItem(2, 9, 7, 1, 1, Items['rock2']);
	setItem(2, 10, 8, 1, 1, Items['rock2']);
	setItem(2, 11, 8, 1, 1, Items['rock2']);
	setItem(2, 14, 8, 1, 1, Items['rock2']);
	
	for(let i=9;i<16;i++) setItem(2, i, 4, 1, 1, Items['rock2']);
	for(let i=15;i<20;i++) setItem(2, i, 3, 1, 1, Items['rock2']);
	
	for(let i=4;i<7;i++) setItem(2, i, 5, 1, 1, Items['rock2']);
	setItem(2, 5, 4, 1, 1, Items['rock2']);
	setItem(2, 6, 4, 1, 1, Items['rock2']);
	
	//rock1
	for(let i=3;i<9;i++) setItem(2, i, 0, 1, 1, Items['rock1']);
	for(let i=9;i<15;i++) setItem(2, i, 3, 1, 1, Items['rock1']);
	for(let i=14;i<20;i++) setItem(2, i, 2, 1, 1, Items['rock1']);
	
	setItem(2, 0, 5, 1, 2, Items['rock5']);
	//brick
	for(let i=16;i<20;i++) setItem(2, i, 7, 1, 1, Items['brick']);
	setItem(2, 16, 8, 1, 1, Items['brick']);
	
	//platform
	setItem(2, 0, 0, 2, 2, Items['platform2']);
	setItem(2, 3, 3, 2, 2, Items['platform2']);
	setItem(2, 7, 4, 2, 2, Items['platform2']);
	setItem(2, 10, 6, 2, 2, Items['platform1']);
	setItem(2, 12, 7, 2, 2, Items['platform1']);
	
	//bamboo
	setItem(2, 9, 0, 2, 1, Items['bamboo2']);
	setItem(2, 11, 0, 2, 2, Items['bamboo1']);
	setItem(2, 13, 0, 2, 1, Items['bamboo2']);
	
	
	//建築
	setItem(2, 0, 8, 2, 2, Items['ncyu']);
	setItem(2, 17, 8, 3, 2, Items['township']);
	setItem(2, 0, 2, 2, 2, Items['pavilion']);
	for(let i=5;i<9;i++) setItem(2, i, 3, 1, 1, Items['house']);
	
	//其它
	setItem(2, 18, 5, 1, 1, Items['coat']);
	setItem(2, 3, 5, 1, 1, Items['chicken']);
	
	//告示牌
	setItem(2, 9, 8, 1, 1, Items['sign1']);
	setItem(2, 16, 6, 1, 1, Items['sign2']);
	setItem(2, 2, 0, 1, 1, Items['sign3']);
	setItem(2, 10, 1, 1, 1, Items['sign4']);
	setItem(2, 17, 0, 1, 1, Items['sign5']);
	
	setItem(2, 18, 0, 2, 2, Items['ladder2']);
}

function setLayer2(){
	
	//rock1
	for(let i=14;i<18;i++) setItem(1, i, 9, 1, 1, Items['rock1']);
	for(let i=12;i<14;i++) setItem(1, i, 7, 1, 1, Items['rock1']);
	setItem(1, 13, 3, 1, 1, Items['rock1']);
	setItem(1, 15, 4, 1, 1, Items['rock1']);
	setItem(1, 11, 5, 1, 1, Items['rock1']);
	setItem(1, 14, 0, 2, 2, Items['rock1']);
	setItem(1, 14, 2, 2, 2, Items['rock1']);
	setItem(1, 18, 0, 2, 2, Items['rock1']);
	setItem(1, 18, 2, 2, 2, Items['rock1']);
	for(let i=7;i<10;i++) setItem(1, 8, i, 1, 1, Items['rock1']);
	for(let i=8;i<10;i++) setItem(1, 7, i, 1, 1, Items['rock1']);
	setItem(1, 6, 9, 1, 1, Items['rock1']);
	for(let i=0;i<3;i++) setItem(1, i, 8, 1, 1, Items['rock1']);
	for(let i=5;i<9;i++)setItem(1, 3, i, 1, 1, Items['rock1']);
	setItem(1, 5, 6, 1, 1, Items['rock1']);
	setItem(1, 4, 7, 1, 1, Items['rock1']);
	setItem(1, 6, 5, 1, 1, Items['rock1']);
	setItem(1, 4, 4, 1, 1, Items['rock1']);
	setItem(1, 5, 3, 1, 1, Items['rock1']);
	setItem(1, 1, 5, 1, 1, Items['rock1']);
	setItem(1, 1, 4, 1, 1, Items['rock1']);
	setItem(1, 2, 3, 1, 1, Items['rock1']);
	setItem(1, 3, 2, 1, 1, Items['rock1']);
	setItem(1, 7, 2, 2, 2, Items['rock1']);
	setItem(1, 16, 0, 1, 1, Items['rock1']);
	setItem(1, 17, 0, 1, 1, Items['rock1']);
	
	//water
	for(let i=4;i<10;i++) setItem(1, 18, i, 2, 1, Items['water']);
	for(let i=4;i<9;i++) setItem(1, 16, i, 2, 1, Items['water']);
	for(let i=5;i<9;i++) setItem(1, 14, i, 2, 1, Items['water']);
	for(let i=5;i<7;i++) setItem(1, 12, i, 2, 1, Items['water']);
	setItem(1, 13, 4, 2, 1, Items['water']);
	for(let i=1;i<4;i++) setItem(1, 16, i, 2, 1, Items['water']);
	setItem(1, 16, 0, 2, 4, Items['waterfall']);
	
	//bamboo
	for(let i=2;i<14;i+=2)setItem(1, i, 0, 2, 2, Items['bamboo1']);
	
	//互動物件
	setItem(1, 11, 3, 2, 2, Items['climbrock']);
	setItem(1, 11, 6, 1, 1, Items['throwrock']);
	setItem(1, 8, 5, 2, 1, Items['tree']);
	setItem(1, 4, 6, 1, 1, Items['pant']);
	setItem(1, 9, 8, 2, 2, Items['lake']);
	setItem(1, 13, 2, 1, 1, Items['rope']);
	setItem(1, 0, 0, 2, 2, Items['ladder1']);
	
	//告式牌
	setItem(1, 5, 7, 1, 1, Items['sign6']);
	setItem(1, 13, 8, 1, 1, Items['sign7']);
	setItem(1, 1, 6, 1, 1, Items['sign8']);
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
	setRole(2, 9);
	setLayer1();
	setLayer2();
}



