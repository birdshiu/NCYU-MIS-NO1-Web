let Role=(function(){
	let Img=document.getElementById('role-img');
	let Div=Img.parentNode;
	
	Div.addEventListener('click', (event)=>{
		let X=event.clientX-Div.offsetLeft+window.pageXOffset;
		let Y=event.clientY-Div.offsetTop+window.pageYOffset;

		Img.style.left=`${X}`;
		Img.style.top=`${Y}`;
	})

	
})();

