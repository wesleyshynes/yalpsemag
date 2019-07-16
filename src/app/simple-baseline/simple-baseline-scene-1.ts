export class SimpleBaseLineScene1 extends Phaser.Scene {

  player: any
  ground: any
  constructor() {
    super({
      key: 'Main Scene'
    })
  }

  keyList: any = {}

  public preload() {
    this.load.image('platform', '../assets/simple-baseline/simple-platform-floor.jpg')
    this.load.image('background', '../assets/simple-baseline/background.png')
    // this.load.image('astronaut', '../assets/simple-baseline/astronaut.png')
    this.load.spritesheet('astronaut', '../assets/simple-baseline/astronaut.png', { frameWidth: 32, frameHeight: 32 })
  }

  public create() {
    this.add.image(0, 0, 'background')

    this.player = this.physics.add.sprite(100, 100, 'astronaut')
    this.player.setCollideWorldBounds(true)

    this.ground = this.add.tileSprite(400, 568, 600, 35, 'platform')
    this.physics.add.existing(this.ground)
    this.ground.body.immovable = true
    this.ground.body.moves = false

    this.physics.add.collider(this.player, this.ground)

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

    this.keyList = {
      UP: this.input.keyboard.addKeys('UP')['UP'],
      DOWN: this.input.keyboard.addKeys('DOWN')['DOWN'],
      LEFT: this.input.keyboard.addKeys('LEFT')['LEFT'],
      RIGHT: this.input.keyboard.addKeys('RIGHT')['RIGHT'],
    }
    // this.player.body.maxVelocity.x = 200
    // this.player.body.maxVelocity.y = 200
    // this.player.body.maxSpeed = 300
    console.log(this.player)

  }

  public update() {

    if (this.keyList.RIGHT.isDown) {
      if (this.player.anims.currentAnim.key != 'right') this.player.anims.play('right', true)
      this.player.setVelocityX(100)
      // this.player.body.acceleration.x += 10
    } else if (this.keyList.LEFT.isDown) {
      if (this.player.anims.currentAnim.key != 'left') this.player.anims.play('left', true)
      this.player.setVelocityX(-100)
      // this.player.body.acceleration.x -= 10
    } else {
      // this.player.setVelocityX(0)
      if (this.player.body.velocity.x > 0) {
        this.player.body.velocity.x -= 5
      } else if (this.player.body.velocity.x < 0) {
        this.player.body.velocity.x += 5
      } else {
        this.player.setVelocityX(0)
      }
      if (this.player.anims.currentAnim.key != 'down') this.player.anims.play('down', true)
    }

    if (this.keyList.UP.isDown) {
      // this.player.body.acceleration.y += -20
      // if(this.player.anims.currentAnim.key != 'up') this.player.anims.play('up', true)
      this.player.setVelocityY(-150)
    } else if (this.keyList.DOWN.isDown) {
      // this.player.body.acceleration.y += 20
      this.player.setVelocityY(150)
    } else {
      // this.player.setVelocityY(0)
    }

  }
}
