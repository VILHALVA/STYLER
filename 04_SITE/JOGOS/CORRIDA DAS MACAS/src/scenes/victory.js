import Button from "../js/button.js";

export class victory extends Phaser.Scene {
    constructor() {
      super("victory");
    }

    create() {
        this.add
          .image(this.cameras.main.centerX, this.cameras.main.centerY, "mainmenufondo")
          .setScale(1.1);
    
        this.add.image(
          this.cameras.main.centerX,
          this.cameras.main.centerY / 1.5,
          "logo_victory"
        )
        .setScale(1.1);

        const boton = new Button(
            this.cameras.main.centerX,
            this.cameras.main.centerY + this.cameras.main.centerY / 3,
            "Rejugar",
            this,
            () => {
              this.scene.start("mainmenu");
            });    
    }
}