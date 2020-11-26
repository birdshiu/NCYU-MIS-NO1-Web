var BasicW, BasicH;
var roleImage=document.getElementsByClassName('role-image')[0];
const XStep=20;
const YStep=10;

var roleAnimation={
	isGoOn:false,
	ImageId:1,
	aniId:1,
	start:function(){
		let self=this;
		console.log('ok');
		if(self.isGoOn === false){
			self.isGoOn=true;
			this.aniId=setInterval(function(){
				self.ImageId=(self.ImageId+1)%5 ? (self.ImageId+1)%5:5;
				roleImage.src=`./Image/Role/frame-${self.ImageId}.png`;
			},100);
		}
	},
	stop:function(){
		let self=this;
		if(self.isGoOn === true){
			self.isGoOn=false;
			clearInterval(self.aniId);
		}
	}
};
		
function setRole(x, y){
	let div=document.getElementsByClassName('adventure-div')[0];
	roleImage.style.top=(div.offsetTop+BasicH*y)+"px";
	roleImage.style.left=(div.offsetLeft+BasicW*x)+"px";
}