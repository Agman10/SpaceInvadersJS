/**
 * Class for the enemies contains the amount of invaders, moving pattern,
 * shooting pattern
 */
class Enemy {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.frame = 2;
        this.sprite = sprites.enemy1;
        this.direction = "right";
    }
    update() {
        if (this.direction == "right") {
            this.move(1)
        }
        if (this.direction == "left") {
            this.move(-1)
        }

        if (this.x == 213) {
            this.direction = "left";
        } else if (this.x == 0) {
            this.direction = "right";
        }
    }

    animation() {
        this.frame++
    }

    move(x) {
        this.x += x;
    }

    draw() {
        Renderer.img(this.sprite, this.x, this.y);
    }
}

enemy = new Enemy(54, 56)