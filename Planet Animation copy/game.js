let gameScene = new Phaser.Scene('Game');

const config = {
    type: Phaser.AUTO,
    height: 480,
    width: 800,
    scene: gameScene
};

let game = new Phaser.Game(config);

gameScene.preload = function() {
    this.load.image("sun","planet-assets/A00.png");
    this.load.image("planet1","planet-assets/A01.png");
    this.load.image("planet2","planet-assets/J01.png");
    this.load.image("moon","planet-assets/D01.png");
};

gameScene.create = function() {

  this.solarSystem = this.add.container(400, 240);
  this.solarSystem.sun = this.add.sprite(0, 0, 'sun');
  this.solarSystem.planet1 = this.add.sprite(200, 0, 'planet1');
  this.solarSystem.planet2 = this.add.sprite(100, 0, 'planet2');
  this.solarSystem.moon = this.add.sprite(300, 0, 'moon');
  this.solarSystem.add([this.solarSystem.sun, this.solarSystem.planet1,
  this.solarSystem.planet2,this.solarSystem.moon]);

  this.solarSystem.sun.setScale(0.5);
  this.solarSystem.planet1.setScale(0.5);
  this.solarSystem.planet2.setScale(0.5);
  this.solarSystem.moon.setScale(0.5);

};

gameScene.init = function() {

};

gameScene.update = function(time,delta){
  // sun rotation
this.solarSystem.sun.angle += 0.1;
this.solarSystem.planet1.angle += 0.5;
this.solarSystem.planet2.angle += 0.5;
this.solarSystem.moon.angle += 0.9;

// let sunPos = new Phaser.Math.Vector2(this.solarSystem.x, this.solarSystem.y);
// let sunDir = sunPos.subtract(new Phaser.Math.Vector2(this.solarSystem.x, this.solarSystem.y));
// this.solarSystem.planet1.angle = Phaser.Math.RadToDeg(Math.atan2(sunDir.y, sunDir.x));

Phaser.Actions.RotateAroundDistance([this.solarSystem.planet1],this.solarSystem.sun, 1 / 400, 200);
Phaser.Actions.RotateAroundDistance([this.solarSystem.planet2],this.solarSystem.sun, 1 / 300, 100);
Phaser.Actions.RotateAroundDistance([this.solarSystem.moon],this.solarSystem.planet2, 1 / 50, 50);


//Phaser.Point.rotate(this.solarSystem.planet1, this.solarSystem.sun.x, this.solarSystem.sun.y, 45, true, 100);




}
