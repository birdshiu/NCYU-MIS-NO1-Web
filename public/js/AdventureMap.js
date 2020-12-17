var roadMap=new Array(); //Map 是個三維陣列，在Main裡初始化

var Items={
	'rock1':{id: 1, img:'./Image/Map/rock1.png', funct:normalItemEvent},
};

function normalItemEvent(event){
	event.stopPropagation();
}

function printMap(layer){
	for(let i=0;i<10;i++){
		let printed='';
		for(let j=0;j<20;j++){
			printed+=roadMap[layer][i][j];
		}
		console.log(printed);
	}
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
	
	for(let i=x; i < x+w; i++){
		for(let j=y; j < y+h; j++){
			roadMap[layer][i][j]=item.id;
		}
	}
	
	adventureDivs[layer].appendChild(tmpImg);
	tmpImg.addEventListener('click', item.funct);
	
	printMap(2); //test
}