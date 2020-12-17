function setItem(layer, x, y, w, h){
	let tmpImg=document.createElement('img');
	
	tmpImg.style.position='absolute';
	tmpImg.src='./Image/Map/rock4.png';
	tmpImg.style.width=BasicW*w+'px';
	tmpImg.style.height=BasicH*h+'px';
	tmpImg.style.top=(adventureTds[layer].offsetTop+adventureDivs[layer].offsetTop+BasicH*y)+'px';
	tmpImg.style.left=(adventureTds[layer].offsetLeft+adventureDivs[layer].offsetLeft+BasicW*x)+'px';
	
	adventureDivs[layer].appendChild(tmpImg);
	
	tmpImg.addEventListener('click', (event)=>{
		adventureDivs[layer].removeChild(tmpImg);
		event.stopPropagation();
	});
}