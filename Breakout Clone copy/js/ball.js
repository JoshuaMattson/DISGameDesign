class Ball extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
      super(scene, x, y, "ball");
      scene.add.existing(this);
      scene.physics.add.existing(this);
      this.setCollideWorldBounds(true);

      this.body.allowGravity = false;
      this.setBounce(1,1);
      this.setVelocity(100, 200);
  }



}
