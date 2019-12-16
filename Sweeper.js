class Sweeper {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = sprites.sweeper;
    this.bullets = [];
    this.shootingFrames = 10;
    this.shooting = false;
    this.direction = "right";
    //EDIT THIS TO TRUE LATER
    this.alive = false;
    this.dieing = false;
    this.dieingFrames = 30;
    this.maxBullets = 1;
  }
  update() {
    for (var i = 0; i < this.bullets.length; i++) {
      let bullet = this.bullets[i];
      if (bullet.y > 256) {
        this.bullets.splice(i, 1);
        if (player.alive && !player.exploding) this.shoot();
      }
      if (
        bullet.x < player.x + bullet.sprite.width - 2 &&
        bullet.x + player.sprite.width - 2 > player.x &&
        bullet.y < player.y + player.sprite.height - 2 &&
        bullet.y + player.sprite.height > player.y /* - 2 */
      ) {
        this.bullets.splice(i, 1);
        player.hit();
        if (player.alive && !player.exploding) this.shoot();
      }
    }

    if (this.direction == "right") this.move(1);
    if (this.direction == "left") this.move(-1);

    if (this.x == 209) this.changeDirection();
    if (this.x == 0) this.changeDirection();
    //if (this.x == 211 && this.direction == "right") this.newDirection();

    if (this.dieing == true) this.die();
  }

  changeDirection() {
    if (this.direction == "right") {
      this.direction = "left";
    } else if (this.direction == "left") {
      this.direction = "right";
    }
  }
  move(x) {
    if (this.alive && player.alive && !this.dieing) {
      this.x += x;
    }
    //console.log(this.direction)
  }
  draw() {
    Renderer.img(this.sprite, this.x, this.y);
  }
  shoot() {
    if (this.alive && !this.dieing) {
      this.bullets.push(new SweeperBullet(this.x + 1, this.y + 8));
      this.shooting = true;
      this.random = Math.floor(Math.random() * 7);
      //console.log(this.random)
    }
  }
  shootingSprite() {
    this.sprite = sprites.sweeperShoot;
    this.shootingFrames -= 1;
  }

  die() {
    this.sprite = sprites.sweeperDead;
    this.dieingFrames -= 1;
    this.move(0);
  }
}

sweeper = new Sweeper(111, 20);
