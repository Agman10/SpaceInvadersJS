/**
 * the bullet that the player shoots
 * contains: limit of buller on screen, speed of bullet, position
 */
class PlayerBullet {
    constructor(x, y) {
        this.posX = x;
        this.posY = y;

        this.sprite = sprites.playerBullet;
    }
    /**
     * 
     */
    update() {
        this.move(-2);
    }

    move(y) {
        this.posY += y;
    }

    draw() {
        Renderer.img(this.sprite, this.posX, this.posY);

    }
}

playerBullet = new PlayerBullet(player.posX, player.posY);