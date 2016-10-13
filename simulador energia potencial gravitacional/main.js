var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
var WIDTH = 500;
var	HEIGHT = 200;
var x;
var y;
var dy;
var img;
var action = true;
var peso = new Image();
peso.src = 'imagens/weight-tool.svg';

window.onload = function(){
img = new Image();
img.src = 'imagens/img_inicio.jpg';
img.onload = function(){ctx.drawImage(img, 0, 0,700,600);
}
}
function SomenteNumero(e){
    var tecla=(window.event)?event.keyCode:e.which;   
    if((tecla>=46 && tecla<58)) return true;
    else{
    	if (tecla==8 || tecla==0) return true;
	else  return false;
    }
}

function cargaContextoCanvas(idCanvas){
	var elemento = document.getElementById(idCanvas);
	if(elemento && elemento.getContext){
		var contexto = elemento.getContext('2d');
		if(contexto){
			return contexto;
		}
	}
	return FALSE;
}

document.getElementById('btn_calcular').addEventListener("click",function(){
	var m = document.getElementById('massa').value;
	var h = document.getElementById('altura').value
	document.getElementById('m').innerHTML = m;
	document.getElementById('g').innerHTML = '10';
	document.getElementById('h').innerHTML = h;
	document.getElementById('result_joules').innerHTML = m * 10 * h;
	var calc = m * 10 * h;  
	
	if(calc >= document.getElementById('material').value){
		document.getElementById('result_quebra').innerHTML = "sim";
	}else if(calc <= document.getElementById('material').value){
		document.getElementById('result_quebra').innerHTML = "não";
	}

    dy = 7;

  cargaContextoCanvas("canvas");
	if(ctx){
	
		img = new Image();
		if(h == 828){
           x = 340;
           y = 15;
           dy = 0.8;
		img.src = 'imagens/burjkhalifa.jpg';
          }else if(h == 300){
          	x = 350;
          	y = 30;
          	dy = 1.3;
          	img.src = 'imagens/torreeifel.jpg';
          }else if(h == 58){
          	x = 300;
          	y = 25;
          	dy = 3.3;
          	img.src = 'imagens/guindaste.jpg';
          }else if(h == 30){
          	x = 300;
          	y = 60;
          	dy = 3.8;
          	img.src = 'imagens/predio.jpg';
          }else if(h == 8){
          	x = 300;
          	y = 5;
          	img.src = 'imagens/arvore.jpg';
          }
		img.onload = function(){
			ctx.drawImage(img, 0, 0,700,600);
		}
	}
	inicia_animacao(m,h);

});
function inicia_animacao(m,h){
	if(action){
	 var interval = setInterval(limpa_desenha, 10);
	 return interval;
    }else{
     clearInterval(interval);
    }
}

function limpa_desenha(){
	if(y < 560){
	y += dy;
	Limpartela();
	Desenha();
   }else{
   	action = false;
   }

}

function Limpartela(){
    ctx.fillStyle = "#a800ff";
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.drawImage(img, 0, 0,700,600);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

function Desenha(){
	ctx.beginPath();
    ctx.drawImage(peso, x, y,30,30);
    ctx.fill();
}