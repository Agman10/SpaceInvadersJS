/**
 * Class for the enemies contains the amount of invaders, moving pattern,
 * shooting pattern
 */
class Enemy {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.frame = 2;
        this.enemies = new Array();
        this.sprite = sprites.enemy1;
        this.direction = "right";
        this.rows = 5;
        this.perRow = 10;
    }

    update() {
        for (var i = 0; i < this.enemies.length; i++) {
            if (player.alive) {
                if (this.enemies[i].x == 0) {
                    this.direction = "right";
                    this.enemies[i].y += 5
                }
                if (this.direction == "right") {
                    this.enemies[i].move(1)
                }
                if (this.direction == "left") {
                    this.enemies[i].move(-1)
                }
                if (this.enemies[i].x == 213) {
                    this.direction = "left";
                    this.enemies[i].y += 5
                }
            }
        }
    }

    addEnemy() {
        this.enemies.push(new Enemy(this.enemies[0].x + this.enemies.length % 10 * 16, this.enemies[0].y + Math.floor(this.enemies.length / this.perRow) * 16));

        //console.log(this.rows)
        //console.log(this.enemies.length)
    }

    animation() {
        if (player.alive)
            this.frame++
    }

    move(x) {
        this.x += x;
    }

    draw() {
        Renderer.img(this.sprite, this.x, this.y);
    }
}

enemy = new Enemy(32, 46)