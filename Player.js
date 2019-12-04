/**
 * the class for the player. contains the life, ability to shoot
 */
class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.lives = 3;
    this.bullets = [];
    this.lastBullet;
    this.alive = true;
    this.sprite = sprites.player;
    this.lifeSprite = sprites.lifeIcon;
    this.explodingFrames = 20;
    this.exploding = false;
    this.maxBullets = 1;
  }

  update() {
    for (var i = 0; i < this.bullets.length; i++) {
      let bullet = this.bullets[i];
      if (bullet.y < -4) {
        this.bullets.splice(i, 1);
      }
      if (
        bullet.x < sweeper.x + sweeper.sprite.width &&
        bullet.x + playerBullet.width > sweeper.x &&
        bullet.y < sweeper.y + sweeper.sprite.height &&
        bullet.y + sweeper.sprite.height > sweeper.y + 8 &&
        sweeper.alive
      ) {
        this.bullets.splice(i, 1);
        sweeper.dieing = true;
      }
    }

    if (player.lives == 0) {
      player.dead();
    }
  }

  move(x) {
    this.x += x;
  }

  draw() {
    Renderer.img(this.sprite, this.x, this.y);
    Renderer.img(this.lifeSprite, 5, 20);
    if (!this.alive) {
      ctx.font = "20px Arial";
      ctx.fillStyle = "white";
      ctx.fillText("Game Over", 65, 100);
    }
  }

  shoot() {
    if (!this.exploding && this.alive)
      this.bullets.push(new PlayerBullet(this.x + 6, this.y - 4));
  }

  hit() {
    if (!this.exploding && this.alive) {
      this.lives -= 1;
      //this.x = 112;
      this.exploding = true;
      //this.explode()
    }
  }

  explode() {
    this.sprite = sprites.playerExplode;
    this.explodingFrames -= 1;
  }

  dead() {
    player.alive = false;
  }
}

player = new Player(112, 210);