var canvas = new fabric.Canvas('myCanvas');
// Crie a variável canvas

//Defina as posições iniciais das imagens da bola e do buraco.
ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-b.png", function(img) {
		hole_obj = img; 
		hole_obj.scaleToWidth(50)
		hole_obj.scaleToHeight(50)
		hole_obj.set({
			top:hole_y,
			top:hole_x
	});
	canvas.add(hole_obj);
});
new_image();
}
	// programe o envio da imagem do buraco de golfe ao canvas
	

function new_image()
{
	fabric.Image.fromURL("bola.png", function(img) {
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_y,
			top:ball_x
		});
		canvas.add(ball_obj);
	});
}
	// programe o envio da imagem da bola ao canvas


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Verifique as coordenadas da bola e do buraco para concluir o jogo.
	Identifique as coordenadas, caso forem iguais, remova  a imagem da bola,
	exiba "Você acertou o buraco!!"
	e troque a cor da borda do canvas para vermelho (red). */
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obj);

		document.getElementById("hd3").innerHTML="Você acertou o buraco!!!";
		document.getElementById("myCanvas").style.borderColor="red";


	else{
		if(keyPressed == '38')
		{
			up();
			console.log("cima");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("baixo");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("esquerda");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("direita");
		}
	}
	
	function up()
	{
		if(ball_y >=0)
		{
			ball_x = ball_x + block_image_height;
			console.log("altura do bloco da imagem = " + block_image_height);
			console.log("Quando a seta para baixo é pressionada, X = " + ball_y +" , Y = "+ball_x);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function down()
	{
		if(ball_y <=450)
		{
			ball_y = ball_y + block_image_height;
			console.log("altura do bloco da imagem = " + block_image_height);
			console.log("Quando a seta para baixo é pressionada, X = " + ball_x +" , Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}
	

	function left()
	{
		if(ball_x >5)
		{
			ball_x = ball_x + block_image_height;
			console.log("altura do bloco da imagem = " + block_image_height);
			console.log("Quando a seta para baixo é pressionada, X = " + ball_y +" , Y = "+ball_x);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x = ball_x + block_image_height;
			console.log("altura do bloco da imagem = " + block_image_height);
			console.log("Quando a seta para baixo é pressionada, X = " + ball_y +" , Y = "+ball_x);
			canvas.remove(ball_obj);
			new_image();
		}
		
	}
	


