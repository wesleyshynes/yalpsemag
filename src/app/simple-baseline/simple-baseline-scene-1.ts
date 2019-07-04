export class SimpleBaseLineScene1 extends Phaser.Scene {

  player: any
  constructor() {
    super({
      key: 'Main Scene'
    })
  }

  public preload() {
    this.load.image('background', '../assets/simple-baseline/background.png')
    this.load.image('astronaut', '../assets/simple-baseline/astronaut.png')
    this.load.spritesheet('astronaut', '../assets/simple-baseline/astronaut.png', { frameWidth: 32, frameHeight: 32 })
  }

  public create() {
    this.add.image(0, 0, 'background')

    this.player = this.physics.add.sprite(100, 100, 'astronaut')
    this.player.setCollideWorldBounds(true)

    this.anims.create({
      key: 'down',
      frames: this.anims.generateFrameNumbers('astronaut', { start: 0, end: 2 }),
      frameRate: 10,
      repeat: -1
    })

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('astronaut', { start: 3, end: 5 }),
      frameRate: 10,
      repeat: -1
    })

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('astronaut', { start: 6, end: 8 }),
      frameRate: 10,
      repeat: -1
    })

    this.anims.create({
      key: 'up',
      frames: this.anims.generateFrameNumbers('astronaut', { start: 9, end: 11 }),
      frameRate: 10,
      repeat: -1
    })


    this.player.anims.play('right')
    this.player.setVelocityX(50)
    console.log(this.player)
  }

  public update() {
      if(this.player.x >= 784) {
          this.player.setVelocityX(-50)
          this.player.anims.play('left')
      }
      if(this.player.x <= 16){
          this.player.anims.play('right')
          this.player.setVelocityX(50)
      }
  }
}
