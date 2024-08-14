var player;
var paja;
var manzana;
var bombs;
var cursors;
var score;
var gameOver;
var scoreText;
var scoreTimeText; 
var scoreTime; 
var timedEvent; 

export class nivel_3 extends Phaser.Scene {
  constructor() {
    super("nivel_3");
 }

  preload() {
   this.load.tilemapTiledJSON("map3", "public/assets/tilemaps/nivel_3.json");
   this.load.image("fondo", "public/assets/images/atlas_sky.png");
   this.load.image("platform", "public/assets/images/atlas_plataforma.png")
  }

  onSecond() {
    if (! gameOver){        
      scoreTime = scoreTime - 1; 
      scoreTimeText.setText('Tiempo: ' + scoreTime);
      if (scoreTime == 0) {
        timedEvent.paused = true;
        this.scene.start(
          "retry",
          { score: score }        
        );
     }            
    }
  }


  create() {

    timedEvent = this.time.addEvent({ 
      delay: 1000, 
      callback: this.onSecond, 
      callbackScope: this, 
      loop: true 
    });

    const map = this.make.tilemap({ key: "map3" });
    const tilesetBelow = map.addTilesetImage("atlas_sky", "fondo");
    const tilesetPlatform = map.addTilesetImage("atlas_plataforma", "platform");
    
    const belowLayer = map.createLayer("fondo", tilesetBelow, 0, 0);
    const worldLayer = map.createLayer("plataforma", tilesetPlatform, 0, 0); 
    const objectsLayer = map.getObjectLayer("objetos");
    
    worldLayer.setCollisionByProperty({ collides: true });
    
    const spawnPoint = map.findObject("objetos", (obj) => obj.name === "dude");

    player = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "dude");

    player.setBounce(0);
    player.setCollideWorldBounds(true);

    if ((cursors = !undefined)) {
      cursors = this.input.keyboard.createCursorKeys();
    }


      
    paja = this.physics.add.group();
    objectsLayer.objects.forEach((objData) => {
     const { x = 0, y = 0, name, type } = objData;
      switch (type) {
       case "paja": {
         var star = paja.create(x, y, "paja");
         star.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
         break;

        }
      }
    });


    manzana = this.physics.add.group();
    objectsLayer.objects.forEach((objData) => {
      const { x = 0, y = 0, name, type } = objData;
      switch (type) {
          case "manzana": {
            var star = manzana.create(x, y, "manzana");
            star.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            break;
          }
        }
    });


    bombs = this.physics.add.group(); 
    objectsLayer.objects.forEach((objData) => {
      const { x = 0, y = 0, name, type } = objData;
      switch (type) {
        case "abeja": {
          var bomb = bombs.create(x, 16, 'abeja');
          bomb.setBounce(1);
          bomb.setCollideWorldBounds(true);
          bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
          bomb.allowGravity = false;
        }
      }
    })

    score = 0;
    scoreText = this.add.text(30, 6, "Score:" +score, {
     fontSize: "32px",
     fill: "#FFFFFF",
    });

    scoreTime = 120;
    scoreTimeText = this.add.text(550, 6, "Tiempo:" +scoreTime, {
      fontSize: "32px",
      fill: "#FFFFFF",
    });

    this.physics.add.collider(player, worldLayer);

    this.physics.add.collider(paja, worldLayer);
    this.physics.add.collider(manzana, worldLayer);
    
    this.physics.add.collider(bombs, worldLayer);
    
    this.physics.add.overlap(player, paja, this.collectpaja, null, this);
    this.physics.add.overlap(player, manzana, this.collectmanzana, null, this);
    
    this.physics.add.collider(player, bombs, this.hitBomb, null, this); 
    
    gameOver = false;


  }

  update() {
    if (paja.countActive(true) === 0 && manzana.countActive(true) === 0) { 
      this.scene.start("victory", { score: score });    
    }
     

    if (gameOver) {
      return;
    }
      
    if (cursors.left.isDown) {
     player.setVelocityX(-160);
      
     player.anims.play("left", true);
    } else if (cursors.right.isDown) {
      player.setVelocityX(160);
      
      player.anims.play("right", true);
    } else {

      player.setVelocityX(0);
      
      player.anims.play("turn");
        
    }
      
   if (cursors.up.isDown && player.body.blocked.down) {
     player.setVelocityY(-330);
      
    }
  }

  collectpaja(player, paja)
   {
    paja.disableBody(true, true);
        
      score += 10;
      scoreText.setText("Score: " + score);
        
    }

    collectmanzana(player, manzana) 
    {
      manzana.disableBody(true, true);
        
      score += 15;
      scoreText.setText("Score: " + score);
    }

  hitBomb(player, bomb)
  { 
    this.physics.pause();

    player.setTint(0xff0000);

    player.anims.play("turn");

    gameOver = true;

    setTimeout(() => {
      this.scene.start("retry", { score: score });
    }, 1000);

  }

}


