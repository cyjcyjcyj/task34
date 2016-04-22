// JavaScript Document
var Arb={
	"direction":1,//1上，2右，3下，0左
	"x":5,
	"y":5,
	"deg":0
}
function run(text){
	//alert(Arb.direction);
	if(text=="turn left")
	{
	Arb.deg-=90;
	//alert(Arb.deg);
	document.getElementById('red').style.WebkitTransform = 'rotate('+Arb.deg+'deg)';
	Arb.direction=(Arb.direction-1+4)%4;
	//alert(Arb.direction);
	}
	else if(text=="turn right")
	{	
	Arb.deg+=90;
	document.getElementById('red').style.WebkitTransform = 'rotate('+Arb.deg+'deg)';
	Arb.direction=(Arb.direction+1)%4;
	}
	else if(text=="turn back")
	{
	Arb.deg+=180;
	document.getElementById('red').style.WebkitTransform = 'rotate('+Arb.deg+'deg)';
	Arb.direction=(Arb.direction+2)%4;
	}
	else if(text=="go")
	{
		switch(Arb.direction)
		{
			
			case 1:
		if(Arb.y>1){
	var top=document.getElementById('red').style.top.replace('px','')-26;
	document.getElementById('red').style.top=top+'px';
	Arb.y--;
         }
	  else{alert("哎哟妈呀好痛啊！！！");}
	
	        break;
			
			case 2:
		if(Arb.x<10){
	var left=document.getElementById('red').style.left.replace('px','')-(-26);
	document.getElementById('red').style.left=left+'px';
	Arb.x++;
         }
	  else{alert("哎哟妈呀好痛啊！！！");}
	  
	        break;
			
			case 3:
		if(Arb.y<10){
	var top=document.getElementById('red').style.top.replace('px','')-(-26);
	document.getElementById('red').style.top=top+'px';
	Arb.y++;
         }
	  else{alert("哎哟妈呀好痛啊！！！");}
	 
	        break;
			
			case 0:
		if(Arb.x>1){
	var left=document.getElementById('red').style.left.replace('px','')-26;
	document.getElementById('red').style.left=left+'px';
	Arb.x--;
         }
	  else{alert("哎哟妈呀好痛啊！！！");}
	 
	        break;
			
			
	     }
    }
	
	else
	{
	alert("你到底想要干嘛啦~");
	}
}
function Tra(t){
	if(t=="left") {
	if(Arb.x>1){
	var left=document.getElementById('red').style.left.replace('px','')-26;
	document.getElementById('red').style.left=left+'px';
	Arb.x--;  }
	  else{alert("哎哟妈呀好痛啊！！！");}
	}
	
	if(t=="right") {
	if(Arb.x<10){
	var left=document.getElementById('red').style.left.replace('px','')-(-26);
	document.getElementById('red').style.left=left+'px';
	Arb.x++;  }
	  else{alert("哎哟妈呀好痛啊！！！");}
	}
	
	if(t=="top") {
	if(Arb.y>1){
	var top=document.getElementById('red').style.top.replace('px','')-26;
	document.getElementById('red').style.top=top+'px';
	Arb.y--;  }
	  else{alert("哎哟妈呀好痛啊！！！");}
	}
	
	if(t=="bottom") {
	if(Arb.y<10){
	var top=document.getElementById('red').style.top.replace('px','')-(-26);
	document.getElementById('red').style.top=top+'px';
	Arb.y++;  }
	  else{alert("哎哟妈呀好痛啊！！！");}
	}
}
	 
	
window.onload=function(){
	
	//document.getElementById('button').onclick=function(){
//    var text=document.getElementsByTagName('input')[0].value;
//	run(text);	
//    }
	document.getElementById('buttonGo').onclick=function(){
    var text="go";
	run(text);	
    }
	document.getElementById('buttonLeft').onclick=function(){
    var text="turn left";
	run(text);	
    }
	document.getElementById('buttonRight').onclick=function(){
    var text="turn right";
	run(text);	
    }
	document.getElementById('buttonBack').onclick=function(){
    var text="turn back";
	run(text);	
    }
	document.getElementById('TraLeft').onclick=function(){  
	Tra("left");	
    }
	document.getElementById('TraRight').onclick=function(){   
	Tra("right");	
    }
	document.getElementById('TraTop').onclick=function(){   
	Tra("top");	
    }
	document.getElementById('TraBottom').onclick=function(){   
	Tra("bottom");	
    }
	document.getElementById('MovLeft').onclick=function(){   
	if(Arb.direction==1) {text="turn left";run(text);}
	else if(Arb.direction==2) {text="turn back";run(text);}
	else if(Arb.direction==3) {text="turn right";run(text);}
	
	Tra("left");
    }
	document.getElementById('MovRight').onclick=function(){   
	if(Arb.direction==1) {text="turn right";run(text);}
	else if(Arb.direction==0) {text="turn back";run(text);}
	else if(Arb.direction==3) {text="turn left";run(text);}
	
	Tra("right");
    }
	document.getElementById('MovTop').onclick=function(){   
	if(Arb.direction==0) {text="turn right";run(text);}
	else if(Arb.direction==3) {text="turn back";run(text);}
	else if(Arb.direction==2) {text="turn left"; run(text);}
	
	Tra("top");
    }
	document.getElementById('MovBot').onclick=function(){   
	if(Arb.direction==2) {text="turn right"; run(text); }
	else if(Arb.direction==1) {text="turn back"; run(text);}
	else if(Arb.direction==0) {text="turn left"; run(text);}
	Tra("bottom");
    }
	
	
	
}
