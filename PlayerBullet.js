/**
 * the bullet that the player shoots
 * contains: limit of buller on screen, speed of bullet, position
 */
class PlayerBullet {
  constructor(x, y) {
    /* var white = 0;
    var green = 1;
    var blue = 2; */
    this.x = x;
    this.y = y;
    //this.color = white;
    this.width = 1;
    this.height = 6;
    this.sprite = [
      sprites.playerBulletWhite,
      sprites.playerBulletGreen,
      sprites.playerBulletBlue,
      sprites.playerBulletRed,
      sprites.playerBulletMagenta,
      sprites.playerBulletPurple
    ];
    this.lightning = [
      sprites.playerBulletWhiteLightning,
      sprites.playerBulletGreenLightning,
      sprites.playerBulletBlueLightning,
      sprites.playerBulletRedLightning,
      sprites.playerBulletMagentaLightning,
      sprites.playerBulletPurpleLightning
    ];
  }

  update() {
    /* if (
      this.x < sweeper.bullets[0].x + sweeper.bullets[0].sprite.width &&
      this.x + this.width > sweeper.bullets[0].x &&
      this.y < sweeper.bullets[0].y + sweeper.bullets[0].sprite.height &&
      this.y + sweeper.bullets[0].sprite.height > sweeper.bullets[0].y
    ) {
      console.log("die")
      //this.bullets.splice(i, 1);
    } */
    this.move(-4);
  }

  move(y) {
    this.y += y;
  }
  color() {

  }

  draw() {
    var white = 0;
    var green = 1;
    var blue = 2;
    var red = 3;
    var magenta = 4;
    var purple = 5;
    this.color = white;
    Renderer.img(this.sprite[this.color], this.x, this.y);
    Renderer.img(this.lightning[this.color], this.x - 2, this.y - 3);
  }
}

playerBullet = new PlayerBullet(player.x, player.y);