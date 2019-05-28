// this is the main game scene. Here we do most of the games logic while playing.

// create a new scene
let gameScene = new Phaser.Scene('Game');

// our game's configuration
let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 300 },
          debug: false
      }
  },
  scene: [bootScene, loadingScene, homeScene, gameScene],
  title: 'Phaser3 Project',
  pixelArt: false, //Use anti-aliasing
  backgroundColor: '#ffffff' // white background by default
};

// create the game, and pass it the configuration
let game = new Phaser.Game(config);

let score = 0;
let boxAmount = 0;

// a simple set of states that the game can assume.
let GAMESTATE = {
    MENU: 0,
    READY: 1,
    PAUSED: 2,
    GAMEOVER: 3
};

// some parameters for our scene
gameScene.init = function() {
    // log we are now in "Game Scene"
    console.log("Started Scene: Game");

    this.state = GAMESTATE.READY;
};

// ass all objects active from the start in the game in create
gameScene.create = function() {
    // for now that is just the background
    this.background = this.add.sprite(0,0,'background');
    this.background.setOrigin(0,0);
    this.background.depth = -10;
    this.background.width = config.width;
    this.background.height = config.height;

    this.scoreText = this.add.text(16,config.height -40,"Score: 0", {fontSize: "32px", fill: "#ffffff"})

    this.player = new Player(this, 400, 500);
    this.ball = new Ball(this, 400, 300);

    this.boxes = this.physics.add.staticGroup();



    for (let i = 40; i<config.width; i+=80){
      for (let j = 30; j<200; j+=60){
        this.boxes.create(i,j,"box");
      }
    }

    this.physics.add.collider(this.player,this.ball);
    this.physics.add.collider(this.ball,this.boxes, breakBoxes, null, this);

};

gameScene.update = function() {
    this.player.update();

    if (boxAmount === 30){
      this.gameOver();
    }
};

gameScene.gameOver = function(){
    this.state = GAMESTATE.GAMEOVER;
    this.time.addEvent({
        delay: 2000,
        callbackScope: this,
        callback: function(){
            this.scene.start('Home');
        }
    }, this);
};


function breakBoxes(ball,box){
   box.disableBody(true,true);
   score += 10;
   boxAmount++;
   this.scoreText.setText("Score: " + score);
}
