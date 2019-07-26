export class SimpleBaseLineScene1 extends Phaser.Scene {

  player: any;
  ground: any;
  platforms: any;
  scoreText: any;
  emitter: any;

  apples: any;

  debugLimiter: any = {}

  constructor() {
    super({
      key: 'Main Scene'
    })
  }

  keyList: any = {}

  public preload() {
    this.load.image('ground', '../assets/simple-baseline/simple-platform-floor.jpg')
    this.load.image('metal-platform', '../assets/simple-baseline/simple-platform-metal.jpg')
    this.load.image('background', '../assets/simple-baseline/background.png')
    // this.load.image('astronaut', '../assets/simple-baseline/astronaut.png')
    this.load.spritesheet('astronaut', '../assets/simple-baseline/astronaut.png', { frameWidth: 32, frameHeight: 32 })

    this.load.spritesheet('star-apple', '../assets/simple-baseline/star-apple.png', { frameWidth: 64, frameHeight: 64 })

    this.load.image('red', 'http://labs.phaser.io/assets/particles/red.png');

  }

  public create() {
    this.add.image(0, 0, 'background')

    this.scoreText = this.add.text( 25, 25, 'Fuel: 0 \n Apples: 0', { fontSize: '16px', fill: '#ffffff' })

    this.player = this.physics.add.sprite(100, 100, 'astronaut')
    this.player.setCollideWorldBounds(true)
    this.player.fuel = 0
    this.player.apples = 0
    this.player.setDepth(1)

    this.ground = this.add.tileSprite(400, 600-35/2, 800, 35, 'ground')
    this.physics.add.existing(this.ground)
    this.ground.body.immovable = true
    this.ground.body.moves = false
    this.debugLimiter.ground = 0

    this.platforms = this.physics.add.group()

    let platformList = [{ x:500, y: 500, length: 300, height: 30, sprite: 'metal-platform'}]

    platformList.forEach((p) => {
        let newP = this.platforms.create(p.x, p.y, p.sprite)
        newP.body.immovable = true
        newP.body.moves = true
        newP.body.allowGravity = false
    })

    this.apples = this.physics.add.group()

    let appleList = [
        { x: 500, y: 40 },
        { x: 300, y: 40 },
        { x: 200, y: 40 },
    ]

    this.anims.create({
        key: 'star-apple',
        frames: this.anims.generateFrameNumbers('star-apple', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    })

    appleList.forEach((a) => {
        let newA = this.apples.create(a.x, a.y, 'star-apple')
        // console.log(newA)
        newA.setScale(.5)
        newA.anims.play('star-apple')
    })

    this.physics.add.collider(this.player, this.apples, (playerData, appleData) => {
        this.player.apples++
        appleData.destroy()
    })

    this.physics.add.collider(this.apples, this.ground)
    this.physics.add.collider(this.apples, this.platforms)


    this.physics.add.collider(this.player, this.ground, (colliderData, otherData) => {
        this.player.fuel = 40
        this.player.setVelocityY(-100)
    }, null, this )

    this.physics.add.collider(this.player, this.platforms, (obj1: any, obj2: any) => {
        if(obj2.body.position.y < 550) {
            // obj2.destroy()
            obj2.body.position.y++
        }
        this.player.fuel = 40
    }, null, this )

    const particles = this.add.particles('red');
    this.emitter = particles.createEmitter({
        speed: 100,
        scale: { start: .2, end: 0 },
        blendMode: Phaser.BlendModes.ADD
    });
    this.emitter.startFollow(this.player);
    // console.log('emitter')
    // console.log(this.emitter)
    this.emitter._visible = false

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

    if (this.keyList.UP.isDown && this.player.fuel > 0) {
      // this.player.body.acceleration.y += -20
      // if(this.player.anims.currentAnim.key != 'up') this.player.anims.play('up', true)
      this.player.setVelocityY(-150)
      this.player.fuel--
      this.emitter._visible = true
    } else if (this.keyList.DOWN.isDown) {
      // this.player.body.acceleration.y += 20
      this.player.setVelocityY(150)
    } else {
      // this.player.setVelocityY(0)
      this.emitter._visible = false
    }

    this.scoreText.setText('Fuel: ' + (new Array(Math.floor(this.player.fuel)).join('.')) + '\nApples: ' + this.player.apples )

  }
}
