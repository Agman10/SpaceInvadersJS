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
    this.ghostSprite = sprites.playerGhost;
    this.lifeSprite = sprites.lifeIcon;
    this.lifeSpriteWidth = 9
    this.explodingFrames = 20;
    this.exploding = false;
    this.maxBullets = 1;
    this.bulletColor = 0;
    this.ghostY = 0;
    this.ghosted = false;
    this.points = 0;
  }

  update() {
    for (var i = 0; i < this.bullets.length; i++) {
      let bullet = this.bullets[i];
      //let sweeperBullet = sweeper.bullets[i];
      if (bullet.y < -4) {
        this.bullets.splice(i, 1);
      }
      if (bullet.x < sweeper.x + sweeper.sprite.width &&
        bullet.x + playerBullet.width > sweeper.x &&
        bullet.y < sweeper.y + sweeper.sprite.height &&
        bullet.y + sweeper.sprite.height > sweeper.y + 8 &&
        sweeper.alive) {
        this.bullets.splice(i, 1);
        sweeper.dieing = true;
      }
      for (var j = 0; j < enemy.enemies.length; j++) {
        if (bullet.x < enemy.enemies[j].x + enemy.enemies[j].width &&
          bullet.x + playerBullet.width > enemy.enemies[j].x &&
          bullet.y < enemy.enemies[j].y + enemy.enemies[j].height &&
          bullet.y + enemy.enemies[j].height > enemy.enemies[j].y) {
          this.bullets.splice(i, 1);
          enemy.enemies.splice(j, 1);
        }
      }
      // this is collision when player bullet hits sweeper bullet DO NOT REMOVE
      /* if (sweeper.alive && sweeper.bullets[0]) {
        if (
          bullet.x < sweeper.bullets[i].x + sweeper.bullets[i].sprite.width &&
          bullet.x + playerBullet.width > sweeper.bullets[i].x &&
          bullet.y < sweeper.bullets[i].y + sweeper.bullets[i].sprite.height &&
          bullet.y + sweeper.bullets[i].sprite.height > sweeper.bullets[i].y &&
          sweeper.alive
        ) {
          this.bullets.splice(i, 1);
        }
      } */
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
    //Renderer.img(this.ghostSprite, this.x, this.y - 9);
    for (var i = 0; i < this.lives; i++) {
      Renderer.img(this.lifeSprite, 5 + i * this.lifeSpriteWidth, 10);
    }
    /* if (this.lives >= 1) Renderer.img(this.lifeSprite, 5, 10);
    if (this.lives >= 2) Renderer.img(this.lifeSprite, 7 + this.lifeSprite.width, 10);
    if (this.lives >= 3) Renderer.img(this.lifeSprite, 9 + this.lifeSprite.width * 2, 10); */


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

  ghost() {
    player.ghostY++
    Renderer.img(player.ghostSprite, player.x, player.y - 9 - this.ghostY);
  }

  dead() {
    player.alive = false;

  }
}

player = new Player(112, 210);