class Sweeper {
    constructor(x, y) {
        this.posX = x;
        this.posY = y;
        this.sprite = sprites.sweeper;
        this.bullets = [];
        this.shootingFrames = 10;
        this.shooting = false;
    }
    update() {
        for (var i = 0; i < this.bullets.length; i++) {
            let bullet = this.bullets[i];
            if (bullet.posY > 256) {
                this.bullets.splice(i, 1);
            }
            if (bullet.posX < player.posX + bullet.sprite.width -2 &&
                bullet.posX + player.sprite.width - 2 > player.posX &&
                bullet.posY < player.posY + player.sprite.height -2 &&
                bullet.posY + player.sprite.height > player.posY /* - 2 */) {
                this.bullets.splice(i, 1);
                player.hit();
            }
        }
    }
    draw() {
        Renderer.img(this.sprite, this.posX, this.posY);
    }
    shoot() {
        this.bullets.push(new SweeperBullet(this.posX + 1, this.posY + 8));
        this.shooting = true;
    }
    shootingSprite() {
        this.sprite = sprites.sweeperShoot;
        this.shootingFrames -= 1;
    }
}

sweeper = new Sweeper(111, 20)