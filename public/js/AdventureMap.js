var roadMap=new Array(); //Map 是個三維陣列，在Main裡初始化
var roleMap=new Array(); //這個 Map 是個二維陣列，找路徑時用到
var clickedItemId;
var tmpWindow;

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