class Box extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
      super(scene, x, y, "box");
      scene.add.existing(this);
      scene.physics.add.existing(this);
      this.setCollideWorldBounds(true);
      this.body.allowGravity = false;
      this.setImmovable();
  }

}
