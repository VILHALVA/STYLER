import Button from "../js/button.js";

export class mainmenu extends Phaser.Scene {
  constructor() {
    super("mainmenu");
  }

  create() {
    this.add
     .image(this.cameras.main.centerX, this.cameras.main.centerY, "mainmenufondo") 
      .setScale(1.1);
    this.add
   .image(
     this.cameras.main.centerX,
     this.cameras.main.centerY / 1.5,
      "logo" //solo key (nombre sin el .png)
    )
    .setScale(1.1);
    const boton = new Button(
     this.cameras.main.centerX,
     this.cameras.main.centerY + this.cameras.main.centerY / 3,
      "Jugar", //que dice boton
      this,

      () => {
        this.scene.start("nivel_1"); 
      }

    );

  }
    
}
  