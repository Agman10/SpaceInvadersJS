/**
 * Class for the enemies contains the amount of invaders, moving pattern,
 * shooting pattern
 */
class Enemy {
    constructor(x, y) {
        this.posX = x;
        this.posY = y;
        this.sprite = sprites.enemy;
    }
    draw() {
        Renderer.img(this.sprite, this.posX, this.posY);
    }
}

enemy = new Enemy(54, 56)