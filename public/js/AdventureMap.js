var roadMap=new Array(); //Map 是個三維陣列，在Main裡初始化
var roleMap=new Array(); //這個 Map 是個二維陣列，找路徑時用到
var clickedItemId;
var tmpWindow;


var Items={
	'rock1':{id: 1, img:'./Image/Map/rock1.png', funct:normalItemEvent},
	'rock2':{id: 2, img:'./Image/Map/rock2.png', funct:normalItemEvent},
	'house':{id: 3, img:'./Image/Map/house.png', funct:houseItemEvent},
	'chicken':{id:4, img:'./Image/Map/chicken.png', funct:chickenItemEvent}
};

/*
item function
*/
function normalItemEvent(event){
	event.stopPropagation();
}

function chickenItemEvent(event){
	event.stopPropagation();
	clickedItemId=4;
	if(isRoleAround()){
		alert('我們在騎車的路上有看到一堆雞');
		tmpWindow=window.open('https://drive.google.com/file/d/1sRRZMIzqvLb2tuWo9gX0aEgMlB_c4MrR/view?usp=sharing', '雞',100, 100);
		
		let intervalId=setInterval(()=>{
		console.log('yep');
			if(tmpWindow.window === null){
				clearInterval(intervalId);
				alert('更多雞跟一隻狗狗');
				window.open('https://drive.google.com/file/d/1JmLwa1unRoPRpopR7n-kuKZxdGrCk_7n/view?usp=sharing', '更多雞跟狗', 100, 100);
			}
		}, 500);
		removeItem.apply(this, null);
	}
}

function houseItemEvent(event){
	event.stopPropagation();
}
/*
item function
*/

function isRoleAround(){
	if(roleX+1 < 20)
		if(roadMap[currentLayer][roleY][roleX+1] === clickedItemId) return true;
	if(roleX-1 >= 0)
		if(roadMap[currentLayer][roleY][roleX-1] === clickedItemId) return true;
	if(roleY+1 < 10)
		if(roadMap[currentLayer][roleY+1][roleX] === clickedItemId) return true;
	if(roleY-1 >= 0)
		if(roadMap[currentLayer][roleY-1][roleX] === clickedItemId) return true;
	
	return false;
}

function removeItem(){
	for(let i=this.tmpy; i < this.tmpy+this.tmph; i++){
		for(let j=this.tmpx; j < this.tmpx+this.tmpw; j++){
			roadMap[currentLayer][i][j]=0;
		}
	}
	
	adventureDivs[currentLayer].removeChild(this);
}

function setItem(layer, x, y, w, h, item){
	//layer 層, x y 位置, w h 寛高(幾個 BasicW H), 什麼東西(Items)
	let tmpImg=document.createElement('img');
	
	tmpImg.style.position='absolute';
	tmpImg.src=item.img;
	tmpImg.style.userSelect='none';
	tmpImg.style.userDrag='none';
	tmpImg.style.width=BasicW*w+'px';
	tmpImg.style.height=BasicH*h+'px';
	tmpImg.style.top=(adventureTds[layer].offsetTop+adventureDivs[layer].offsetTop+BasicH*y)+'px';
	tmpImg.style.left=(adventureTds[layer].offsetLeft+adventureDivs[layer].offsetLeft+BasicW*x)+'px';
	
	tmpImg.tmpx=x;
	tmpImg.tmpy=y;
	tmpImg.tmpw=w;
	tmpImg.tmph=h;
	
	for(let i=y; i < y+h; i++){
		for(let j=x; j < x+w; j++){
			roadMap[layer][i][j]=item.id;
		}
	}
	
	adventureDivs[layer].appendChild(tmpImg);
	tmpImg.addEventListener('click', item.funct);
}