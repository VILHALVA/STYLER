class Button {
    constructor(x, y, label, scene, callback) {
      const button = scene.add
        .text(x, y, label)
        .setOrigin(0.5)
        .setPadding(10)
        .setStyle({
          backgroundColor: "#000",
          fontSize: "50px",
          fill: "#FFF",
          fontFamily: "TimesNewRoman",
        })
        .setInteractive({ useHandCursor: true })
        .on("pointerdown", () => callback())
        .on("pointerover", () => button.setStyle({ fill: "#0000ff" }))
        .on("pointerout", () => button.setStyle({ fill: "#FFF" }));
    }
  }
  
  export default Button;
  