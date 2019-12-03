/**
 * the bullet that the player shoots
 * contains: limit of buller on screen, speed of bullet, position
 */
class PlayerBullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color = 0;
    this.width = 1;
    this.height = 6;
    this.sprite = [
      sprites.playerBulletWhite,
      sprites.playerBulletGreen,
      sprites.playerBulletBlue
    ];
    this.lightning = [
      sprites.playerBulletWhiteLightning,
      sprites.playerBulletGreenLightning,
      sprites.playerBulletBlueLightning
    ];
  }

  update() {
    this.move(-4);
  }

  move(y) {
    this.y += y;
  }
  colorBullet() {
    green = this.sprite[0]
  }
  draw() {
    var white = 0;
    var green = 1;
    var blue = 2;
    Renderer.img(this.sprite[white], this.x, this.y);
    Renderer.img(this.lightning[white], this.x - 2, this.y - 3);

  }
}

playerBullet = new PlayerBullet(player.x, player.y);