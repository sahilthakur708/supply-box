const Engine = Matter.Engine ;
 const World = Matter.World ;
  const Bodies = Matter.Bodies ; 
  var engine , world ,ground , box,helecopter;
  
   function setup() {
     createCanvas(400,400);
      engine = Engine.create() 
      world = engine.world 
      var additional_Props ={ isStatic: true } 
     ground = Bodies.rectangle(200, 380 , 400, 40 ,additional_Props )
      World.add ( world , ground) 
     // console.log(world) 
     helicopter=createSprite(200,50,100,30)
     box=Bodies.rectangle(200,50,30,30);
     World.add ( world,box) 
     function keyDown(){
      box=Bodies.rectangle(200,50,30,30,{restitution:1});
      
    }
    
    
    } 

      function draw() {
        background(0);
        Engine.update(engine)
        
         rectMode(CENTER) 
         rect(ground.position.x, ground.position.y, 400 , 40)
         rect(box.position.x, box.position.y, 30 , 30)
         drawSprites();
         }