let  enemy, enemy2, enemy3, spaceSound, bg;

import Phaser from "phaser";
export default class HelloWorldScene extends Phaser.Scene {
  constructor() {
       super("hello-world");
  }

preload() {

     this.load.image("bg", "./assets/big-bg.png");  
     this.load.audio("space", "./assets/space.mp3");
     this.load.spritesheet('invader1', './assets/python.png', { frameWidth: 32, frameHeight: 32 });
     this.load.spritesheet('invader2', './assets/python.png', { frameWidth: 44, frameHeight: 32 });
     this.load.spritesheet('invader3', './assets/python.png', { frameWidth: 48, frameHeight: 32 });
    



   }

  create() {
    
     this.add.image(400, 300, "bg");
    //  spaceSound = this.sound.add('space', { volume: 0.2 });

     this.physics.world.setBoundsCollision ()
         enemy = this.physics.add.group(); 

         for (var i = 0; i < 13; i++)
    {
        var pineapple =enemy.create(200 + i * 48,50, 'invader1');
        //This allows your sprite to collide with the world bounds like they were rigid objects
        pineapple.body.collideWorldBounds= true;
        pineapple.body.bounce.setTo(1, 1);
        pineapple.body.onWorldBounds = true;
        pineapple.setImmovable(true);

        console.log(pineapple);

    }
  

    
    this.physics.world.on('worldbounds', function(body, top, bottom, left, right
      ){
        console.log('left', left, 'right', right, 'top',top, 'bottom', bottom)
        if (left){
          enemy.setVelocityX (100);
         
        }else {
          enemy.setVelocityX (-100);
        }
     
      
     
  },this);
          enemy.setVelocityX(100)        
         enemy.setOrigin(0.5, 0.5);
    
              
         
      

        enemy2 = this.physics.add.group([{ key: 'invader2', frame: 0, repeat: 10, setXY: {  x: 32, y: 135+40, stepX: 52 } }]);
        enemy2.setVelocityX(100)
        enemy2.setOrigin(0.5, 0.5);
        enemy3 = this.physics.add.group([{ key: 'invader3', frame: 0, repeat: 9, setXY: { x: 32, y: 120+96+40, stepX: 58 }}]);
        enemy3.setVelocityX(100)
        enemy3.setOrigin(0.5, 0.5);
     Phaser.Actions.IncX(enemy.getChildren(), 100);
     Phaser.Actions.IncX(enemy2.getChildren(), 100);
     Phaser.Actions.IncX(enemy3.getChildren(), 100);

     


    //  var tween = this.add.tween(invader1).to( { x: 200 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);

    //  //  When the tween loops it calls descend
    //  tween.onLoop.add(descend, this);

  

     
  };

update (){
 if (enemy.x > this.physics.world.bounds.width){
   enemy.setVelocityX (-100);   
 }
 
}
// checks for object collision,input from user.
   }

   
  
