var hypnoticBall,database,position;
var foodStock = 20
var eat = "no"
var milk2
var lastFed
var fedTime
var gameState

function preload(){
dog = loadImage("dogImg.png")
happy = loadImage("dogImg1.png")
milk = loadImage("Milk.png")

bedroom = loadImage("Bed Room.png")
garden = loadImage("Garden.png")
washroom = loadImage("Wash Room.png")
livingRoom = loadImage("Living Room.png")
}

function setup(){
    database = firebase.database();
    console.log(database);
    createCanvas(700,500);
    hypnoticBall = createSprite(250,200,10,10);
    hypnoticBall.shapeColor = "red";
    hypnoticBall.addImage("dog1",dog)
    hypnoticBall.scale = 0.1
    ball = createSprite(200,5000,10,10)
    ball.addImage("smile",happy)
    ball.scale = 0.1
milk1 = createSprite(500,200,10,10)
milk1.addImage("food1",milk)
//milk.y = hypnoticBall.y
milk1.scale = 0.07

milk2 = createSprite(500,200,10,10)
milk2.addImage("food1",milk)
milk2.scale = 0.07
 //   var hypnoticBallPosition = database.ref('ball/position');
   // hypnoticBallPosition.on("value",readPosition,showError);
   // console.log(foodStock)
   food1 = new Foodate()
//food = new Food()
}

function draw(){
    background(46, 139, 87);
    fill("white")
    textSize(15)
   
    //if(position !== undefined){
fedTime = database.ref("feedtime")
fedTime.on("value",function(data){
    lastFed = data.val()
})

readState = database.ref('gameState')
readState.on("value",function(data){
    gameState = data.val()
})



//milk1.visible = false
//milk2.visible = false


//food.display()
    //}
if(foodStock < 0){
  foodStock = 0
 
}
if(foodStock === 0){
    milk1.y = 300000
}
else{
    milk1.y = 200
    milk2.y = 200
}

    if(keyDown(LEFT_ARROW)){
      //  writePosition(-1,0);

    }
    else if(keyDown(RIGHT_ARROW)){
        //writePosition(1,0);
    }
    if(keyWentDown(UP_ARROW) && foodStock > 0){
    //    writePosition(0,-1);
      //  foodStock = foodStock - 1
        //hypnoticBall.changeImage(happy)
      //  hypnoticBall.visible = false
       // ball.y = hypnoticBall.y
        //ball.x = hypnoticBall.x
    }
if(eat === "eat"){
    hypnoticBall.visible = false
    ball.y = hypnoticBall.y
    ball.x = hypnoticBall.x
} 
 else{
      hypnoticBall.visible = true
ball.y = 5000

    }
    feed1 = createButton("feed");
    feed1.position(600,75);

    feed1.mousePressed(function(){
       update(1)
       foodStock = foodStock - 1
       milk2.velocityX = -25
      })

      if(gameState===1){
        ball.y = hypnoticBall.y
        ball.x = hypnoticBall.x  
        hypnoticBall.visible = false
      }

      addFood1 = createButton("add food");
      addFood1.position(650,75);
  
      addFood1.mousePressed(function(){
         update(2)
         foodStock = foodStock + 1
         //milk2.velocityX = -25
        })
  
        if(gameState===2){
          ball.y = 5000
          ball.x = hypnoticBall.x  
          hypnoticBall.visible = true
        }

        bath1 = createButton("I want to take a bath");
        bath1.position(750,75);
    
        bath1.mousePressed(function(){
           update(3)
           //foodStock = foodStock + 1
           //milk2.velocityX = -25
          })
    
          if(gameState===3){
         //   ball.y = 5000
           // ball.x = hypnoticBall.x  
           background(washroom)
            hypnoticBall.visible = false
         //
          }

          sleep1 = createButton("I'm sleepy ");
          sleep1.position(600,100);
    
          sleep1.mousePressed(function(){
           update(4)
           //foodStock = foodStock + 1
           //milk2.velocityX = -25
          })
    
          if(gameState===4){
         //   ball.y = 5000
           // ball.x = hypnoticBall.x  
           background(bedroom)
            hypnoticBall.visible = false
         //
          }

          play1 = createButton("Lets Play");
          play1.position(675,100);
    
          play1.mousePressed(function(){
           update(5)
           //foodStock = foodStock + 1
           //milk2.velocityX = -25
          })
    
          if(gameState===5){
         //   ball.y = 5000
           // ball.x = hypnoticBall.x  
           background(livingRoom)
            hypnoticBall.visible = false
         //
          }

          outside1 = createButton("Lets go outside");
          outside1.position(750,100);
    
          outside1.mousePressed(function(){
           update(6)
           //foodStock = foodStock + 1
           //milk2.velocityX = -25
          })
    
          if(gameState===6){
         //   ball.y = 5000
           // ball.x = hypnoticBall.x  
           background(garden)
            hypnoticBall.visible = false
         //
          }
 //   if(ball.y === hypnoticBall.y ){
   //     ball.y = 5000   
     //   hypnoticBall.visible = true
    //}
  //  else if(keyDown(DOWN_ARROW)){
    //    writePosition(0,+1);
    //} 
    //textMode(CENTER)
if(gameState !== "Hungry"){
food1.hide();
//hypnoticBall.visible = false
}
else{
    food1.display()
   // hypnoticBall.visible = true
}

if(foodStock > 20){
    foodStock = 20
}
if(lastFed >= 12){
  //  text("last feed: " + lastFed%12 + "PM",350,30)
}
else if(lastFed===12){
    //text("last feed:  12",350,30)
}
else{
    //text("last feed:  " + lastFed + "AM",350,30)
}

if(milk2.isTouching(hypnoticBall)){
    milk2.x = milk1.x
    milk2.y = milk1.y
    milk2.velocityX = 0
} 

currenttime = hour()
stroke("black")
text(foodStock + "  remaining",525,200)
    drawSprites();
//}
}


//function readPosition(data){
  //  position = data.val();
   // console.log(position.x);
    //hypnoticBall.x = position.x
    //hypnoticBall.y = position.y
//}
//function writePosition(x,y){
  //  database.ref('world/position').set({
    //    'x':position.x + x,
      //  'y':position.y + y
    //})

//}
function showError(){
    console.log("error")
}
function feedHour(){
    database.ref("/").update({
      feedtime : hour()   
    })
    
}
function update(state){
    database.ref('/').update({
        gameState:state
    })
}