var canvas=new fabric.Canvas("myCanvas")
 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function get_Image(_get_Image)
{
	fabric.Image.fromURL._get_Image, function(Img) {
	blockImageObject = Img;

	blockImageObject.scaleToWidth(block_image_width);
	blockImageObject.scaleToHeight(block_image_height);
	blockImageObject.set({
	top: blockY,
	left: blockX,
	})
	Canvas.add(blockImageObject);
	
	}
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed=="69")
	{
		blockX = 450
		console.log('vermelho')
		get_Image('rr1.png')

	}
	if(keyPressed=="86")
	{
		blockX = 200;
		console.log('verde')
		get_Image('gr.png')
	}
	
	if(keyPressed=="65")
	{
		blockX =350;
		console.log('amarelo')
		get_Image('yr.png')
	}
	if(keyPressed=="82")
	{
		blockX = 600;
		console.log('rosa')
		get_Image('pr.png')

	}
	if(keyPressed=="73")
	{
		blockX = 700;
		console.log('azul')
		get_Image('br.png')
	}
	
}

