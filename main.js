
var canvas=new fabric.Canvas('myCanvas');

ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h1.png", function(IMG) {
		hole_onj=Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});

		canvas.add(hole_obj);
	});
	new_image();
	
	

function new_image()
{
	fabric.Image.fromURL("ball.png", function(IMG){
		ball_obj=Img;
		ball_obj.scaletoWidth(50);
		ball_obj.scaletoHeight(50);
		hole_obj.set({
			top:ball_y,
			left:ball_x
		});
			
		canvas.add(ball_obj);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	document.getElementById("hd3").innerHtml="you have hit the goal!!!";
	document.getElementById("myCanvas").style.borderColor="red"
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_x <=450)
	}

	function down()
	{
		if(ball_x <=450)
	}

	function left()
	{
		if(ball_x >5)
		{
			
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			
		}
	}
	
}

