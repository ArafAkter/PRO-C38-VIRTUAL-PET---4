class Foodate{
    constructor(){
this.button = createButton("feed");
this.button2 = createButton("add food");
    }
    display(){
    //  var title = createElement("h2");
      //title.html("Car racing game");
       //title.position(550,150);

     //  var imput = createInput("name");
       //var 
       
    //   imput.position(580,200);
    this.button.position(600,75);

    this.button.mousePressed(function(){
         //  imput.hide();
         //  button.hide();
         foodStock  = foodStock - 1
         ball.y = hypnoticBall.y
         ball.x = hypnoticBall.x
         eat = "eat"
          milk2.velocityX = -25
          database.ref("/").update({
            feedtime:hour()   
          })
          feedHour()
          //feedtime : hour 
         // feedHour()
       //    var name = imput.value();
          // var greeting = createElement("h2");
         //  greeting.html("hello " + name);
          // greeting.position(600,200);
       })

     //  var 
     this.button2.position(850,75);

     this.button2.mousePressed(function(){
        //  imput.hide();
        //  button.hide();
//if(foodStock < 20){
        foodStock  = foodStock + 1
       
//}
     //   ball.y = hypnoticBall.y
       // ball.x = hypnoticBall.x
        eat = "no"
      //    var name = imput.value();
         // var greeting = createElement("h2");
        //  greeting.html("hello " + name);
         // greeting.position(600,200);
      })


    }
    hide(){
      // imput.hide();
      this.button.hide();
      this.button2.hide();
    }
}