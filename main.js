var canvas=new fabric.Canvas("myCanvas")
 blockY=1;
 blockX=1;

blockImageWidth = 300;
blockImageHeight = 400;

var blockImageObject= "";

function get_Image(_get_Image)
{
	fabric.Image.fromURL(_get_Image, function(Img) {
	blockImageObject = Img;

	blockImageObject.scaleToWidth(blockImageWidth);
	blockImageObject.scaleToHeight(blockImageHeight);
	blockImageObject.set({
		top: blockY,
		left: blockX,
	});
	canvas.add(blockImageObject);

	});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed=="69")
	{
		blockX = 400;
		console.log('vermelho');
		get_Image('rr1.png');

	}
	if(keyPressed=="86")
	{
		blockX = 0;
		console.log('verde');
		get_Image('gr.png');
	}
	
	if(keyPressed=="65")
	{
		blockX =150;
		console.log('amarelo');
		get_Image('yr.png');
	}
	if(keyPressed=="82")
	{
		blockX = 630;
		console.log('rosa');
		get_Image('pr.png');

	}
	if(keyPressed=="73")
	{
		blockX = 700;
		console.log('azul');
		get_Image('br.png');
	}
	
}

