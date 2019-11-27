/**
 * the bullet that the player shoots
 * contains: limit of buller on screen, speed of bullet, position
 */
class PlayerBullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.lightning = sprites.playerBulletLightning;
    this.sprite = sprites.playerBullet;
  }

  update() {
    this.move(-2);
  }

  move(y) {
    this.y += y;
  }

  draw() {
    Renderer.img(this.sprite, this.x, this.y);
    Renderer.img(this.lightning, this.x - 2, this.y - 3);
  }
}

playerBullet = new PlayerBullet(player.x, player.y);
