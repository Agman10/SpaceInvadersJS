/**
 * Class for the enemies contains the amount of invaders, moving pattern,
 * shooting pattern
 */
class Enemy {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.sprite = sprites.enemy;
    }
    draw() {
        Renderer.img(this.sprite, this.x, this.y);
    }
}

enemy = new Enemy(54, 56)