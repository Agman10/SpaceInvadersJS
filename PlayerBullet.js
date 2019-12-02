/**
 * the bullet that the player shoots
 * contains: limit of buller on screen, speed of bullet, position
 */
class PlayerBullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color = 0;
    this.sprite = sprites.playerBulletWhite;
    /* sprites.playerBulletGreen,
      sprites.playerBulletBlue
    ] */
    this.lightning = [
      sprites.playerBulletWhiteLightning,
      sprites.playerBulletGreenLightning,
      sprites.playerBulletBlueLightning
    ]
    /* this.spriteBlue = sprites.playerBulletBlue;
    this.lightningBlue = sprites.playerBulletBlueLightning; */
  }

  update() {
    this.move(-4);
    /* if (this.color = "white") {
      this.sprite = sprites.playerBulletWhite;
      this.lightning = sprites.playerBulletWhiteLightning;
    } else if (this.color = "green") {
      this.sprite = sprites.playerBulletGreen;
      this.lightning = sprites.playerBulletGreenLightning;
    } */
  }

  move(y) {
    this.y += y;
  }
  colorBullet() {
    green = this.sprite[0]
  }
  draw() {
    /* if (this.color = "white") {
      this.sprite = sprites.playerBulletWhite;
      this.lightning = sprites.playerBulletWhiteLightning;
    }
    if (this.color = "blue") {
      this.sprite = sprites.playerBulletBlue;
      this.lightning = sprites.playerBulletBlueLightning;
    } */
    var white = 0;
    var green = 1;
    var blue = 2;
    Renderer.img(this.sprite, this.x, this.y);
    Renderer.img(this.lightning[white], this.x - 2, this.y - 3);

  }
}

playerBullet = new PlayerBullet(player.x, player.y);