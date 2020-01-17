/**
 * Class for the enemies contains the amount of invaders, moving pattern,
 * shooting pattern
 */
class Enemy {
    constructor(x, y, id = 0) {
        this.x = x;
        this.y = y;
        this.frame = 2;
        this.width = 11;
        this.height = 8;
        this.enemies = new Array();
        this.bullets = [];
        this.sprite = [
            sprites.enemy1,
            sprites.enemy2,
            sprites.enemy3,
            sprites.enemy4,
            sprites.enemy5,
        ]
        this.direction = "right";
        this.rows = 5;
        this.perRow = 10;
        this.id = id;
    }

    update() {
        for (var i = 0; i < this.enemies.length; i++) {
            if (player.alive) {
                //this.enemies[i].move(1)
                if (this.enemies[i].x == 0) {
                    this.enemies[i].direction = "right";
                    this.enemies[i].y += 8
                }
                if (this.enemies[i].direction == "right") {
                    this.enemies[i].move(1)
                }
                if (this.enemies[i].direction == "left") {
                    this.enemies[i].move(-1)
                }
                if (this.enemies[i].x == 213) {
                    this.enemies[i].direction = "left";
                    this.enemies[i].y += 8
                }
            }
        }
    }

    addEnemy() {
        this.enemies.push(new Enemy(this.x + this.enemies.length % 10 * 16,
            this.y + Math.floor(this.enemies.length / this.perRow) * 16, this.id + this.enemies.length));
        //this.enemies.push(new Enemy(32 + this.enemies.length % 10 * 16, 46 + Math.floor(this.enemies.length / this.perRow) * 16));
        //console.log(this.rows)
        //console.log(this.enemies.length)
    }
    shoot() {
        this.bullets.push(new EnemyBullet(this.x + 6, this.y - 4));
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