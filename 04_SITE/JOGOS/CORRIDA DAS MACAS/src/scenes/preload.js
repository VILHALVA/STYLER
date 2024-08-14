export class preload extends Phaser.Scene {
  constructor() {
    super("preload");

  }

  preload() {
   this.load.image("logo","public/assets/images/logo.png");
   this.load.image("logo_retry","public/assets/images/logo_retry.png");
   this.load.image("logo_victory","public/assets/images/logo_victory.png");
   this.load.image("mainmenufondo","public/assets/images/fondomenu.png"); 
   this.load.image("paja","public/assets/images/paja.png");
   this.load.image("manzana","public/assets/images/manzana.png"); 
   this.load.image("abeja","public/assets/images/abeja.png");
   this.load.spritesheet("dude", "public/assets/images/oveja.png",  
    {frameWidth: 32,
    frameHeight: 48,});

  }


  create() {
    this.anims.create({
     key: "left",
     frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
     frameRate: 10,
     repeat: -1,
    });
  
   this.anims.create({
     key: "turn",
     frames: [{ key: "dude", frame: 4 }],
     frameRate: 20,
    });
    
    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });

    this.scene.start("mainmenu");

  }
}




