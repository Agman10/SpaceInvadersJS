class Sweeper {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.sprite = sprites.sweeper;
        this.bullets = [];
        this.shootingFrames = 10;
        this.shooting = false;
    }
    update() {
        for (var i = 0; i < this.bullets.length; i++) {
            let bullet = this.bullets[i];
            if (bullet.y > 256) {
                this.bullets.splice(i, 1);
            }
            if (bullet.x < player.x + bullet.sprite.width - 2 &&
                bullet.x + player.sprite.width - 2 > player.x &&
                bullet.y < player.y + player.sprite.height - 2 &&
                bullet.y + player.sprite.height > player.y /* - 2 */ ) {
                this.bullets.splice(i, 1);
                player.hit();
            }
        }
    }
    draw() {
        Renderer.img(this.sprite, this.x, this.y);
    }
    shoot() {
        this.bullets.push(new SweeperBullet(this.x + 1, this.y + 8));
        this.shooting = true;
    }
    shootingSprite() {
        this.sprite = sprites.sweeperShoot;
        this.shootingFrames -= 1;
    }
}

sweeper = new Sweeper(111, 20)