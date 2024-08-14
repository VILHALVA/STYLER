import Button from "../js/button.js";

var score;

export class retry extends Phaser.Scene {
    
    
    constructor() {
      super("retry");
    }
    init(data) { //llama data de otra escena
      score = data.score;
    }


create() {
    this.add
     .image(this.cameras.main.centerX, this.cameras.main.centerY, "mainmenufondo") 
     .setScale(1.1);
    
    this.add.image(
      this.cameras.main.centerX,
      this.cameras.main.centerY / 1.5,
      "logo_retry" 
    )
    .setScale(1.1);
    
    this.add
      .text(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        `Puntaje de nivel alcanzado: ${score}`
      )
      .setOrigin(0.5)
      .setScale(1.2);
  
      const boton = new Button(
      this.cameras.main.centerX,
      this.cameras.main.centerY + this.cameras.main.centerY / 3,
      "Reintentar",
      this,

      () => {
       this.scene.start("mainmenu"); // te manda al menu principal
      }
    );
  }
}