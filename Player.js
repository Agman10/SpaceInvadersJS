/**
 * the class for the player. contains the life, ability to shoot
 */
class Player {
  constructor(x, y) {
    this.posX = x;
    this.posY = y;
    this.lives = 3;
    this.bullets = [];
    this.lastBullet;
    this.alive = true;
    this.sprite = sprites.player;
    this.lifeSprite = sprites.lifeIcon;
    this.explodingFrames = 20;
    this.exploding = false;
  }

  update() {
    //checks the bullet shot defines it as i
    for (var i = 0; i < this.bullets.length; i++) {
      let bullet = this.bullets[i];
      //this.shoot();
      //console.log(this.bullets[i]);
      //removes a bullet from array when offscreen
      if (bullet.posY < -4) {
        this.hit();
        this.bullets.splice(i, 1);
        //console.log("lives: " + this.lives);
        //console.log("erased");
        //this.playerExploding = false;
      }
    }

    if (player.lives == 0) {
      player.dead();
    }
  }
  /**
   * moves the player
   */
  move(x) {
    this.posX += x;
    //this.posY += 2;
  }

  draw() {
    Renderer.img(this.sprite, this.posX, this.posY);
    Renderer.img(this.lifeSprite, 5, 20);
    if (!this.alive) {
      ctx.font = "20px Arial";
      ctx.fillStyle = "white";
      ctx.fillText("Game Over", 65, 100);
    }
  }

  /**
   * shoots a new playerbullet from player
   */
  shoot() {
    if (!this.exploding && this.alive)
      this.bullets.push(new PlayerBullet(this.posX + 6, this.posY - 4));
  }

  /**
   * when the player gets hit
   */
  hit() {
    if (!this.exploding && this.alive) this.lives -= 1;
    //this.posX = 112;
    this.exploding = true;
    //this.explode()
  }

  explode() {
    this.sprite = sprites.playerExplode;
    this.explodingFrames -= 1;
    //console.log(this.explodingFrames)
  }

  dead() {
    player.alive = false;
    //console.log("you are dead")
  }
}
/**
 * player position
 */

player = new Player(112, 210);
