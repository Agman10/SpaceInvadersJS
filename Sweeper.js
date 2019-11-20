class Sweeper {
    constructor(x, y) {
        this.posX = x;
        this.posY = y;
        this.sprite = sprites.sweeper;
        this.bullets = [];
    }
    update() {
        for (var i = 0; i < this.bullets.length; i++) {
            let bullet = this.bullets[i];
            //this.shoot();
            //console.log(this.bullets[i]);
            //removes a bullet from array when offscreen
            if (bullet.posY > 256) {
                this.bullets.splice(i, 1);
                //console.log("lives: " + this.lives);
                //console.log("erased");
                //this.playerExploding = false;
            }
            if (bullet.posY == player.posY - player.sprite.height && bullet.posX == player.posX) {
                this.bullets.splice(i, 1);
                player.hit();
            }
        }
    }
    draw() {
        Renderer.img(this.sprite, this.posX, this.posY);
    }
    shoot() {
        this.bullets.push(new SweeperBullet(this.posX, this.posY - 4));
    }
}

sweeper = new Sweeper(112, 20)