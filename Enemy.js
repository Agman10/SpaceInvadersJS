/**
 * Class for the enemies contains the amount of invaders, moving pattern,
 * shooting pattern
 */
class Enemy {
    constructor(x, y, id = 0) {
        this.x = x;
        this.y = y;
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
        this.moveFrame = 0;
        this.frame = 0;
        this.maxframe = 30;
        this.speed = 7
    }

    update() {
        if (player.kills == 10) this.speed = 6;
        if (player.kills == 20) this.speed = 5;
        if (player.kills == 30) this.speed = 4;
        if (player.kills == 40) this.speed = 3;
        if (player.kills == 49) this.speed = 2;
        
        this.moveFrame++;
        if (this.moveFrame >= this.speed) {
            this.moveFrame = 0
        }
        if (this.moveFrame == 0) {
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
        if (player.alive) {
            for (var j = 0; j < this.bullets.length; j++) {
                let bullet = this.bullets[j];
                //let sweeperBullet = sweeper.bullets[i];
                if (bullet.y > 256) {
                    this.bullets.splice(j, 1);
                    if (player.alive && !player.exploding) this.shoot();

                }
                if (bullet.x < player.x + player.sprite.width &&
                    bullet.x + playerBullet.width > player.x &&
                    bullet.y < player.y + player.sprite.height &&
                    bullet.y + player.sprite.height > player.y) {
                    this.bullets.splice(j, 1);
                    player.hit();
                    //this.shoot();
                }
            }
            for (var l = 0; l < this.enemies.length; l++) {
                let body = this.enemies[l];
            if (body.x < player.x + player.sprite.width &&
                body.x + player.sprite.width > player.x &&
                body.y < player.y + player.sprite.height &&
                body.y + player.sprite.height > player.y) {
                //this.bullets.splice(j, 1);
                player.die();
                //this.shoot();
            }
        }
        }
    }

    addEnemy() {
        this.enemies.push(new Enemy(this.x + this.enemies.length % 10 * 16,
            this.y + Math.floor(this.enemies.length / this.perRow) * 16, this.id + this.enemies.length));
    }

    getEnemy(id) {
        for (let enemy of this.enemies) {
            if (enemy.id == id) return enemy
        }
        return false
    }

    bulletUpdate() {

    }
    shoot() {
        var possibleLocations = []
        for (let x = 0; x < 10; x++) {
            for (let y = 4; y >= 0; y--) {
                let enemy = this.getEnemy(Math.floor(y * 10) + x)
                if (enemy) {
                    possibleLocations.push({ x: enemy.x, y: enemy.y })
                    //console.log(enemy.id)
                    break
                }
            }
        }
        let randomEnemy = possibleLocations[Math.floor(Math.random() * possibleLocations.length)]
        //console.log(possibleLocations)
        this.bullets.push(new EnemyBullet(randomEnemy.x + 4, randomEnemy.y + 8));
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