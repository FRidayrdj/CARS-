class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('GameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
    GameState: state
    });
  }

  async start(){
    if(gameState === 0){
      
      background(startbg);
      player = new Player();
      var data=await database.ref('PlayerCount').once('value')
     if( data.exists())
     {
       playerCount=data.val();
       player.getCount();
     }
     
      form = new Form()
      form.display();
    }
    car1 = createSprite (300,200,100,100);
    car1.addImage(carsimg1);
    car2 = createSprite (500,200,100,100);
    car2.addImage(carsimg2);
    car3 = createSprite (700,200,100,100);
    car3.addImage(carsimg3);
    car4 = createSprite (900,200,100,100);
    car4.addImage(carsimg4);
    cars=[car1,car2,car3,car4]
  }

  play()
  {
    
    
      form.hide();
      form.reset.hide();
     
      player.getCars();
      Player.getpInfo();
      if(allPlayers != undefined )
      {
        background(ground);
        image(track,0,-height*4,width,height*5);
       var index = 0;
       var x = 175;
       var y = 0;
      for(var i in allPlayers)
      {
        index += 1;
        x+=225;
        y = height-allPlayers[i].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;
        if(i === "player"+player.index){
        fill('red')
        ellipse(x,y,60,60);
        cars[index-1].shapeColor=('red');
        camera.position.x=width/2;
        camera.position.y = cars[index-1].y;
        }
        else
        {
          cars[index-1].shapeColor=('black');

        }
        
        
      }
      }
      if (keyIsDown(UP_ARROW)&&player.index != null)
      {
        player.distance += 50;
        player.update();
      }
      if (player.distance >= 3900)
      {
        gameState = 2;
        player.rank+=1;
        Player.updateCars(player.rank);
      }
      
    
    drawSprites();
  }
  end()
  {
    form.title.html('GAME OVER')
    
    fill("skyblue")
    rectMode(CENTER)
    rect(width/2,cars[player.index-1].y-300,500,500);
    imageMode(CENTER)
    image(trophy,width/2,cars[player.index-1].y-250,300,300)
    textSize(30)
    fill("red")
    text(player.name + "'s rank is: "+ player.rank,width/2-100,cars[player.index-1].y-100)
    
    if (player.rank === 4){
      form.reset.show();
      }
  }

}
