var canvas;
var music;
 var blueSurface, greenSurface, redSurface, orangeSurface, yellowSurface;
var bouncingBox ;
var edge1, edge2, edge3, edge4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    var options ={
    

    }


 blueSurface = createSprite(80,580,155,10);
 blueSurface.shapeColor = "blue";
 blueSurface.debug = false;
 
 greenSurface = createSprite(240,580,155,10);
 greenSurface.shapeColor = "green";
 greenSurface.debug = false;
  
 redSurface = createSprite(400,580,155,10);
 redSurface.shapeColor = "red";
 redSurface.debug =false;
  
  
 orangeSurface = createSprite(560,580,155,10);
 orangeSurface.shapeColor = "orange";
 orangeSurface.debug = false;

 yellowSurface = createSprite(720,580,155,10);
 yellowSurface.shapeColor = "yellow";
 yellowSurface.debug = false;  
 
 edge1 = createSprite(400,5,1500,15);
 edge1.shapeColor = "white";
 edge1.visible = false;
 edge2 = createSprite(400,595,1500,15);
 edge2.shapeColor = "white";
 edge2.visible = false;
 edge3 = createSprite(795,25,15,1500);
 edge3.shapeColor = "white";
 edge3.visible = false;
 edge4 = createSprite(5,25,15,1500);
 edge4.shapeColor = "white";
 edge4.visible = false;
;
 
 
 
 //creating box sprite and giving velocity
 bouncingBox = createSprite(random(39,769),100,15,15);
 bouncingBox.shapeColor = "white";
 bouncingBox.debug = false;
 console.log(bouncingBox);
 bouncingBox.velocityX = 4;
 bouncingBox.velocityY = 4;

}

function draw() {
    background("purple");
     
    createEdgeSprites();
    /*bouncingBox.bounceOff(edges);*/
    bouncingBox.bounceOff(edge1);
    bouncingBox.bounceOff(edge2);
    bouncingBox.bounceOff(edge3);
    bouncingBox.bounceOff(edge4);
    /*bouncingBox.bounceOff(blueSurface);
    bouncingBox.bounceOff(orangeSurface);
    bouncingBox.bounceOff(redSurface);
    bouncingBox.bounceOff(yellowSurface);
    bouncingBox.bounceOff(greenSurface);*/
    
    if(yellowSurface.isTouching(bouncingBox) && bouncingBox.bounceOff(yellowSurface)){
      bouncingBox.shapeColor = "yellow";
      
    }else if(orangeSurface.isTouching(bouncingBox) && bouncingBox.bounceOff(orangeSurface)){
      bouncingBox.shapeColor = "orange";
      
    } else if(blueSurface.isTouching(bouncingBox) && bouncingBox.bounceOff(blueSurface)){
      bouncingBox.shapeColor = "blue";
      music.play();

    } else if(greenSurface.isTouching(bouncingBox) && bouncingBox.bounceOff(greenSurface)){
      bouncingBox.shapeColor = "green";
      bouncingBox.velocityX = 0; 
      bouncingBox.velocityY = 0;
      music.stop(); 
    } else if(redSurface.isTouching(bouncingBox) && bouncingBox.bounceOff(redSurface)){
      bouncingBox.shapeColor = "red";
      music.play();
    } 
    

    









    drawSprites();

}




  
