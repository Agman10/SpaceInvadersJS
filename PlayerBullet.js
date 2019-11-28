/**
 * the bullet that the player shoots
 * contains: limit of buller on screen, speed of bullet, position
 */
class PlayerBullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color = "green";
    this.sprite = sprites.playerBulletGreen;
    this.lightning = sprites.playerBulletGreenLightning;
    this.spriteBlue = sprites.playerBulletBlue;
    this.lightningBlue = sprites.playerBulletBlueLightning;
  }

  update() {
    this.move(-4);
  }

  move(y) {
    this.y += y;
  }

  draw() {
    if (this.color = "green") {
      this.sprite = sprites.playerBulletGreen;
      this.lightning = sprites.playerBulletGreenLightning;
    } else if (this.color = "blue") {
      this.sprite = sprites.playerBulletBlue;
      this.lightning = sprites.playerBulletBlueLightning;
    }
    Renderer.img(this.sprite, this.x, this.y);
    Renderer.img(this.lightning, this.x - 2, this.y - 3);
  }
}

playerBullet = new PlayerBullet(player.x, player.y);