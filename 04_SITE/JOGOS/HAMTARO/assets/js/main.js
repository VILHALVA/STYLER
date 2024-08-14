var config = {
	type: Phaser.AUTO,
	width:window.innerWidth,
	height:window.innerHeight,
	scene: {
		preload: preload,
		create: create,
		update: update
	},
	backgroundColor:'#b3e6ff',
	physics:{
		default:'arcade',
		arcade:{
			gravity:{y:300}
		}
	}
};

function preload () {
	this.load.image('sky', 'assets/sprites/sky.png');
	this.load.image('ground', 'assets/sprites/platform.png');
	this.load.image('star', 'assets/sprites/bomb.png');
	this.load.atlas(
		'hamtaro',
		'assets/sprites/hamham.png',
		'assets/sprites/hamtaro.json'
	)
}

function create () {
	ceu=this.add.image(400, 300, 'sky') .setScale(4);
	piso = this.physics.add.staticGroup();
  piso.create(0, 968, 'ground').setScale(3).refreshBody();
  piso.create(700, 400, 'ground');
  piso2 = this.physics.add.staticGroup();
  piso2.create(0, 968, 'ground').setScale(3).refreshBody();
  piso2.create(250, 600, 'ground');
  piso3 = this.physics.add.staticGroup();
  piso3.create(0, 968, 'ground').setScale(3).refreshBody();
  piso3.create(950, 200, 'ground');
  piso4 = this.physics.add.staticGroup();
  piso4.create(0, 968, 'ground').setScale(3).refreshBody();
  piso4.create(150, 300, 'ground');

  personagem = this.physics.add.sprite(400, 400, 'hamtaro')
  personagem.setBounce(0.2);
  personagem.setCollideWorldBounds(true);
  estrelas = this.physics.add.group({
    key: 'star',
    repeat: 20,
    setXY: { x: 30, y: 0, stepX: 75 }
  });
  titulo = this.add.text(100, 50, 'Hamtarooo!', { 
    fontFamily: 'Arial',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  })
  cursors = this.input.keyboard.createCursorKeys();
  this.physics.add.collider(personagem, piso);
  this.physics.add.collider(estrelas, piso);
  this.physics.add.collider(personagem, piso2);
  this.physics.add.collider(estrelas, piso2);
  this.physics.add.collider(personagem, piso3);
  this.physics.add.collider(estrelas, piso3);
  this.physics.add.collider(personagem, piso4);
  this.physics.add.collider(estrelas, piso4);
  this.physics.add.overlap(
    personagem,
    estrelas,
    pegarEstrela,
    null,
    this
  );
  
  this.anims.create({ 
    key: 'esquerda', 
    frames: this.anims.generateFrameNames('hamtaro', { 
        prefix: 'hamtaro_', 
        start: 4,
        end: 6            
    }),
    repeat: -1,
    duration: 300
  });
   this.anims.create({ 
    key: 'direita', 
    frames: this.anims.generateFrameNames('hamtaro', { 
        prefix: 'hamtaro_', 
        start: 1,
        end: 3            
    }),
    repeat: -1,
    duration: 300
  });
   this.anims.create({ 
    key: 'parado', 
    frames: this.anims.generateFrameNames('hamtaro', { 
      prefix: 'hamtaro_', 
      start: 11,
      end: 12
    }),
    repeat: -1,
    duration: 300
  });

   var count= 0;
}

function update () {
	if (cursors.left.isDown) {
    personagem.setVelocityX(-160);
    personagem.anims.play('esquerda', true);
  }
  else if (cursors.right.isDown) {
    personagem.setVelocityX(160);
    personagem.anims.play('direita', true);
  }
  else if (cursors.up.isDown && personagem.body.touching.down) {
    personagem.setVelocityY(-460);
  }
  else {
    personagem.setVelocityX(0);
    personagem.anims.play('parado');
  }
}

	
function pegarEstrela (personagem, star) {
  star.disableBody(true, true);
}
var game = new Phaser.Game(config);

