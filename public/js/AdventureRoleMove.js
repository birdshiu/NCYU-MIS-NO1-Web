var BasicW, BasicH;
var roleX, roleY;
var isMoving=false;
var isLeft=true;
const XStep=20;
const YStep=10;

const RoleAnimation={//控制 Role 的動畫
	isGoOn:false,
	ImageId:1,
	aniId:1,
	start:function(){
		let self=this;
		if(self.isGoOn === false){
			self.isGoOn=true;
			this.aniId=setInterval(function(){
				self.ImageId=(self.ImageId+1)%5 ? (self.ImageId+1)%5:5;
				roleImage.src=`./Image/Role/frame-${self.ImageId}.png`;
			},50);
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
	roleX=x; roleY=y;
	let div=document.getElementsByClassName('adventure-div')[0];
	roleImage.style.top=(div.offsetTop+BasicH*y)+"px";
	roleImage.style.left=(div.offsetLeft+BasicW*x)+"px";
}

function walk(x, y){
	if(roleX === x && roleY === y){
		RoleAnimation.stop();
		isMoving=false;
		return;
	}
	if(x > roleX){
		setTimeout(()=>{
			setRole(roleX+1, roleY);
			walk(x, y);
		}, 150);
	}
	else if(x < roleX){
		setTimeout(()=>{
			setRole(roleX-1, roleY);
			walk(x, y);
		}, 150);
	}
	else if(y > roleY){
		setTimeout(()=>{
			setRole(roleX, roleY+1);
			walk(x, y);
		}, 150);
	}
	else if(y < roleY){
		setTimeout(()=>{
			setRole(roleX, roleY-1);
			walk(x, y);
		}, 150);
	}
}

function basicGoTo(x, y){ //先走X再走Y好了
	if(isMoving === true) return;
	isMoving=true;
	RoleAnimation.start();
	
	if(x >= roleX){
		isLeft=true;
		roleImage.style.transform="";
	}
	else{
		isLeft=false;
		roleImage.style.transform="scaleX(-1)";
	}
	walk(x, y);
}