/**
 * the bullet that the player shoots
 * contains: limit of buller on screen, speed of bullet, position
 */
class PlayerBullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 1;
    this.height = 6;
    this.speed = -4;
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
    this.move(this.speed);
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
    Renderer.img(this.sprite[player.bulletColor], this.x, this.y);
    Renderer.img(this.lightning[player.bulletColor], this.x - 2, this.y - 3);
  }
}

class EnemyBullet extends PlayerBullet {
  constructor(x, y) {
    super(x, y);
    this.width = 3;
    this.height = 7;
    this.speed = 2;
    this.sprite = [
      sprites.enemyBullet,
    ];
    this.lightning = [
      sprites.enemyBulletLightning,
    ];
  }
  draw() {
    Renderer.img(this.sprite[0], this.x, this.y);
    Renderer.img(this.lightning[0], this.x - 2, this.y - 2);
  }
}



playerBullet = new PlayerBullet(player.x, player.y);
enemyBullet = new EnemyBullet(enemy.x, enemy.y);