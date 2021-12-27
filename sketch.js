var player, playerIdle1, playerWalk1, playerJump1, playerFall1, playerImg;


var platform101, 
    platform101Img, 
    platform102Img, 
    platform103Img, 
    platform104Img, 
    platform105Img, 
    platform106Img, 
    platform107Img, 
    platform108Img, 
    platform109Img, 
    platform1010Img;

var obstacle101, 
    obstacle101Img, 
    obstacle102Img, 
    obstacle103Img, 
    obstacle104Img, 
    obstacle105Img; 



var platform2, platform2Img;
var platform3, platform3Img;


var groundform, groundform
var background;
var platformGroup;
var isFlipped = false;
var score = 0;
var playB, playImg;
var homePage, homePageImg;
var playState = false;
var buddyOp, buddyOpImg;
/*var SteamGirlOp, SteamGirlOpImg;
var GraveRobberOp, GraveRobberOpImg;*/
var check, checkImg;
var avatarChoose = 1;
var homeButton, homeButtonImg;
var backButton, backButtonImg;
var yTemp;
var yBool = true;
var touch;
var player;


var solarC, solarCanmtn;
var carpoolC, carpoolCanmtn;


var points, pointsImg;





































function preload(){

    playerImg = loadImage("Game_Elements/Characters/bobIdle.png")









    platform101Img = loadImage("Game_Elements/Game_Tiles/Platform1.png");
    platform102Img = loadImage("Game_Elements/Game_Tiles/Platform2.png");
    platform103Img = loadImage("Game_Elements/Game_Tiles/Platform3.png");
    platform104Img = loadImage("Game_Elements/Game_Tiles/Platform4.png");
    platform105Img = loadImage("Game_Elements/Game_Tiles/Platform5.png");
    platform106Img = loadImage("Game_Elements/Game_Tiles/Platform6.png");
    platform107Img = loadImage("Game_Elements/Game_Tiles/Platform7.png");
    platform108Img = loadImage("Game_Elements/Game_Tiles/Platform8.png");
    platform109Img = loadImage("Game_Elements/Game_Tiles/Platform9.png");
    platform1010Img = loadImage("Game_Elements/Game_Tiles/Platform10.png");


    obstacle101Img = loadImage("Game_Elements/Obstacles/rocks2_1.png");
    obstacle102Img = loadImage("Game_Elements/Obstacles/rocks2_2.png");
    obstacle103Img = loadImage("Game_Elements/Obstacles/rocks2_3.png");
    obstacle104Img = loadImage("Game_Elements/Obstacles/rocks2_4.png");
    obstacle105Img = loadImage("Game_Elements/Obstacles/rocks2_5.png");







    platform2Img = loadImage("Platform_1_1.png");

    platform3Img = loadImage("Platform3.png");
   
    playImg = loadImage("Play.png");
    homePageImg = loadImage("homePage.png");

    checkImg = loadImage("Check.png");
    playImg = loadImage("Play.png");
    homeButtonImg = loadImage("HomeButton.png");
    backButtonImg = loadImage("BackButton.png");

    pointsImg = loadImage("Game_Elements/Interface/points.png");

    solarCanmtn = loadAnimation("Game_Elements/Collectables/SOLAR/solar1.png", "Game_Elements/Collectables/SOLAR/solar2.png", "Game_Elements/Collectables/SOLAR/solar3.png", "Game_Elements/Collectables/SOLAR/solar4.png", "Game_Elements/Collectables/SOLAR/solar5.png", "Game_Elements/Collectables/SOLAR/solar6.png");


    //platform2Img = loadImage("Platform2.png");
}















































function setup() {
    createCanvas(windowWidth, windowHeight);

   
    

    player = createSprite(width/2, height/3, 10, 10);    
    player.addImage("BobIdle", playerImg);
    player.scale = 0.5;   
    player.debug = true;
    player.setCollider("rectangle", -20, 0, 100, 200);

    
   
    platform3 = createSprite(width/2+290, height-550, 10, 10 );
    platform3.addImage("Lvl3", platform3Img);
    platform3.scale = 1.5;
    //platform3.debug = true;
    platform3.setCollider("rectangle", 3, 33, 655, 19);

    points = createSprite(width/3.3, height-125, 10, 10);
    points.addImage("Points", pointsImg);
    points.scale = 0.9;

    homePage = createSprite(width/2, height/2 , 10, 10);
    homePage.addImage("homePage", homePageImg);
    homePage.scale = width/1440;

   
   check = createSprite(5, 10, 10, 10);
    check.addImage("check", checkImg);
    check.scale = 0.3;

    playB = createSprite(width/2 * 1.5, height/2 * 1.35, 10, 10);
    playB.addImage("playButton", playImg);
    playB.scale = width/2880;

    homeButton = createSprite(width - 35, 35, 10, 10);
    homeButton.addImage("homeButton", homeButtonImg);
    homeButton.scale = 0.15;
    homeButton.visible = false;
    
    backButton = createSprite(35, 35, 10, 10);
    backButton.addImage("backButton", backButtonImg);
    backButton.scale = 0.15;
    backButton.visible = false;

   
   

    //platform2.debug = true;
   // platform2 = createSprite(width/2, height-20, width, 20 );

    platformGroup = new Group;  
    backGroup = new Group();
    solarGroup = new Group();
    obstacleGroup = new Group();

    edges = createEdgeSprites();

}









































function draw() {
//background("black");



if(player.collide(edges[0])){

    player.y -=200;
   // player.velocityY = -70;
    player.velocityX = 5;

}

if (player.velocityX > 0){

    player.velocityX = player.velocityX + (-0.01);

}

var placements = 400

console.log(avatarChoose);

if (playState === false) {

    homePage.visible = 1;
    check.visible = 1;
    playB.visible = 1;

    platformGroup.setVelocityXEach(0);
    obstacleGroup.setVelocityXEach(0);
  



    if (mousePressedOver(backButton)) {

        playState = true;

    }
    
  /*  if (mousePressedOver(WoodCutterOp)) {

        check.x = WoodCutterOp.x;
        avatarChoose = 1;
        player.setCollider("rectangle", 0, 4, 25, 33);
        

    } else if (mousePressedOver(SteamGirlOp)){

        check.x = SteamGirlOp.x; 
        avatarChoose = 2;
        player.setCollider("rectangle", 0, 4, 20, 37);
        

    } else if (mousePressedOver(GraveRobberOp)){

        check.x = GraveRobberOp.x; 

    }*/

    if (mousePressedOver(playB)) {

        playState = true;

    }

    if (mousePressedOver(backButton)){

        playState = true;
        backButton.visible = false;
        homeButton.visible = true;
        platformGroup.setVelocityXEach(-8);
        obstacleGroup.setVelocityXEach(-8);
        backGroup.setVelocityXEach(-8);
    
    } 

    backButton.depth = homePage.depth+1;
    /*WoodCutterOp.depth = homePage.depth+1;
    SteamGirlOp.depth = homePage.depth+1;
    GraveRobberOp.depth = homePage.depth+1;*/
    check.depth = homePage.depth+1;

}

if (playState === true){

// jump when the space key is pressed

homeButton.visible = true;
homePage.visible = false;
check.visible = false;
//WoodCutterOp.visible = false;
//SteamGirlOp.visible = false;
//GraveRobberOp.visible = false;
playB.visible = false;

if (mousePressedOver(homeButton)){

    playState = false;
    backButton.visible = true;
    homeButton.visible = false;
    platformGroup.setVelocityXEach(0);
    obstacleGroup.setVelocityXEach(0);
    backGroup.setVelocityXEach(0);

} 


console.log(player.y +  ", " + (height-100));


  
if (platform3.x > -500) {
if(keyDown("right")){

    if(isFlipped === true){
        player.mirrorX(-player.mirrorX());
        isFlipped = false;  
    }

   /* if (avatarChoose === 1) {*/
    player.changeAnimation("Walk1", playerWalk1);
    
    /*} else if (avatarChoose === 2) {
        player.changeAnimation("Walk2", playerWalk2);
    }*/

    platform3.x-=8;
   

    platformGroup.setVelocityXEach(-8);
    obstacleGroup.setVelocityXEach(-8);
    backGroup.setVelocityXEach(-8);
    
} else if (keyDown("left")){

    if (isFlipped === false) {
        player.mirrorX(-player.mirrorX());
        isFlipped = true;
    }
    
   //if (avatarChoose === 1) {
    player.changeAnimation("Walk1", playerWalk1);
   /* } else if (avatarChoose === 2) {
        player.changeAnimation("Walk2", playerWalk2);
    }*/

    platformGroup.setVelocityXEach(8);
    obstacleGroup.setVelocityXEach(8);
    backGroup.setVelocityXEach(8);
    platform3.x +=8;
    

    
} else {

   //if (avatarChoose === 1) {

    if ((player.y < (yTemp + 0.801)) && (player.y > (yTemp-0.801))) {
    
        touch = 1;
        
     } else {
    
        touch = 0;
    
     }
    
     if (touch === 0) {
    
        player.changeAnimation("Jump1", playerJump1); 
        player.changeAnimation("Fall1", playerFall1);
    
     } else {

        player.changeAnimation("Idle1", playerIdle1);


     }

    /*} else if (avatarChoose === 2) {
        player.changeAnimation("Idle2", playerIdle2);
    }*/
    platformGroup.setVelocityXEach(0);
    obstacleGroup.setVelocityXEach(0);
    backGroup.setVelocityXEach(0);


}

if ( keyDown("space") && touches.length === 0 && player.y == yTemp) {
    
    
     yBool = false;
    console.log("HEARYSIAUHD");
    player.changeAnimation("Jump1", playerJump1); 
   // ((player.y >= height-150 && player.y <= height-100) || (player.y >= height-250 && player.y <= height-200))
    player.velocityY = -19;
    
    
   // touches = [];
}

if ((player.y < (yTemp + 0.801)) && (player.y > (yTemp-0.801))) {
    
    touch = 1;
    
 } else {

    touch = 0;

 }

 if (touch === 0) {

    player.changeAnimation("Jump1", playerJump1); 
    player.changeAnimation("Fall1", playerFall1);

 }


 console.log("TOUCH: " + touch);

} else {

    platformGroup.setVelocityXEach(0);
    obstacleGroup.setVelocityXEach(0);
    
    if(player.velocityX < 0){
    player.velocityX = 0;
    }
    platformGroup.setVelocityXEach(-8);
    obstacleGroup.setVelocityXEach(-8);
   


   
   if ((player.y < (yTemp + 0.801)) && (player.y > (yTemp-0.801))) {
       
       touch = 1;
       
    } else {
   
       touch = 0;
   
    }

    if ( keyDown("space") && touches.length === 0 && player.y == yTemp) {
    
    
        yBool = false;
        player.velocityY = -19;
       console.log("HEARYSIAUHD");
       //player.changeAnimation("Jump1", playerJump1); 
      // ((player.y >= height-150 && player.y <= height-100) || (player.y >= height-250 && player.y <= height-200))
       
       
       
      // touches = [];
   }
   
    if (touch === 0) {
   
       player.changeAnimation("Jump1", playerJump1); 
       player.changeAnimation("Fall1", playerFall1);
   
    }



    spawnMediSups(placements);
    

}



for (var t = 370; t<placements; t+=150){
spawnObstacles(t);
spawnPlatforms(t);
}


player.velocityY += 0.8;

//player.collide(platform2);

//text( platform3.x, 300, 20);
text("Antibodies: "+score, (width/2)-20, 20);
//points.depth = platform1.depth+1;

}


player.collide(platformGroup);
player.collide(obstacleGroup);
player.collide(platform3);
solarGroup.collide(platformGroup);

if (yBool === true) {

yTemp = player.y;
console.log(yTemp);

}

yBool = true;

solarGroup.setVelocityYEach(8);

text("Energy Points", (width/25)-20, height-210);

drawSprites(); 
}






























function spawnPlatforms(t) {

    var ramdom;
    ramdom = Math.round(random(1, 10));

    platform101 = createSprite(width+200, height-t, 10, 10 );

    if (frameCount%12 === 0) {




        switch (ramdom) {

            case(1):

            platform101.addImage("Lvl1", platform101Img);
            break;
            
            case(2): 

            platform101.addImage("Lvl1", platform102Img);
            break;

            case(3): 

            platform101.addImage("Lvl1", platform103Img);
            break;

            case(4): 

            platform101.addImage("Lvl1", platform104Img);
            break;

            case(5):
            
            platform101.addImage("Lvl1", platform105Img);
            break;

            case(6): 

            platform101.addImage("Lvl1", platform106Img);
            break;

            case(7): 

            platform101.addImage("Lvl1", platform107Img);
            break;

            case(8): 

            platform101.addImage("Lvl1", platform108Img);
            break;

            case(9): 

            platform101.addImage("Lvl1", platform109Img);
            break;

            case(10): 

            platform101.addImage("Lvl1", platform1010Img);
            break;

            default:
            break;
        }
        
        
        
        
      // platform1.debug = true;
        
        platform101.scale = 2;
        platform101.lifetime = 300;
        platform101.setCollider("rectangle", 0, 0, 50, 50)
       // platform1.debug = true;
        homePage.depth = platform101.depth+1;
        points.depth = platform101.depth+1;
        platformGroup.add(platform101);
    }
}
















 function spawnObstacles(t) {

    var ramdom;
    ramdom = Math.round(random(1, 5));

        obstacle101 = createSprite(width+200, height-t-75, 10, 10);
        if (frameCount%144 === 0) {




            switch (ramdom) {
    
                case(1):
    
                obstacle101 .addImage("Lvl1",  obstacle101Img);
                break;
                
                case(2): 
    
                obstacle101 .addImage("Lvl1", obstacle102Img);
                break;
    
                case(3): 
    
                obstacle101 .addImage("Lvl1", obstacle103Img);
                break;
    
                case(4): 
    
                obstacle101 .addImage("Lvl1", obstacle104Img);
                break;
    
                case(5):
                
                obstacle101 .addImage("Lvl1", obstacle105Img);
                break;
    
                default:
                break;
            }




    obstacle101.scale = 2;
    obstacle101.lifetime = width/8;
    obstacle101.setCollider("rectangle", 0, 0, 50, 50)
       // platform1.debug = true;
        homePage.depth = obstacle101.depth+1;
        points.depth = obstacle101.depth+1;
        obstacleGroup.add(obstacle101);


        }

  
}










/*

function spawnSkyRise() {

    if (frameCount%200 === 0) {

        platform2 = createSprite(width+100, height-215, 10, 10 );
        
        //platform2.debug = true;
        platform2.addImage("SkyRise1", platform2Img);
        
        platform2.scale = 0.5;
        platform2.setCollider("rectangle", 0, -10, 400, 100)

     

        homePage.depth = platform2.depth+1;
        platformGroup.add(platform2);
       

    }

}

*/








function spawnMediSups(p){

    if (frameCount%180 === 0) {

        var choose = Math.round(random(1, 10));
        mediSup = createSprite(width+110, height-(p + (p%150)) - 75, 10, 10);
        mediSup.lifetime = 3000/8;
        //mediSup.debug = true;

        switch (choose) {

            case 1:
                mediSup.addAnimation("SOLAR", solarCanmtn);
                mediSup.scale = 0.2;
                mediSup.velocityX = -8;
                solarGroup.add(mediSup);
                break;
            case 2:
                mediSup.addAnimation("SOLAR", solarCanmtn);
                mediSup.scale = 0.2;
                mediSup.velocityX = -8;
                solarGroup.add(mediSup);
                break;
            case 3:
                mediSup.addAnimation("SOLAR", solarCanmtn);
                mediSup.scale = 0.2;
                mediSup.velocityX = -8;
                solarGroup.add(mediSup);
                break;
            case 4:
                mediSup.addAnimation("SOLAR", solarCanmtn);
                mediSup.scale = 0.2;
                mediSup.velocityX = -8;
                solarGroup.add(mediSup);
                break;
            case 5:
                mediSup.addAnimation("SOLAR", solarCanmtn);
                mediSup.scale = 0.2;
                mediSup.velocityX = -8;
                solarGroup.add(mediSup);
                break;
            case 6:
                mediSup.addAnimation("SOLAR", solarCanmtn);
                mediSup.scale = 0.2;
                mediSup.velocityX = -8;
                solarGroup.add(mediSup);
            case 7:
                mediSup.addAnimation("SOLAR", solarCanmtn);
                mediSup.scale = 0.2;
                mediSup.velocityX = -8;
                solarGroup.add(mediSup);
                break;
            case 8:
                mediSup.addAnimation("SOLAR", solarCanmtn);
                mediSup.scale = 0.2;
                mediSup.velocityX = -8;
                solarGroup.add(mediSup);
                break;
            case 9:
                mediSup.addAnimation("SOLAR", solarCanmtn);
                mediSup.scale = 0.2;
                mediSup.velocityX = -8;
                solarGroup.add(mediSup);
                break;
            case 10:
                mediSup.addAnimation("SOLAR", solarCanmtn);
                mediSup.scale = 0.2;
                mediSup.velocityX = -8;
                solarGroup.add(mediSup);
                break;
            default:
                break;

        }

        

    }

}
