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
    }

    update() {
        //console.log(this.enemies)
        for (var i = 0; i < this.enemies.length; i++) {
            let enemies = this.enemies[i]
            let newPos = this.enemies.length * 16
            //let maxX = this.enemies[i - 1].x + 16
            //enemies.setPosition(enemies.x, enemies.y - 16)
            //if (this.enemies.length > 0) {
            //enemy.draw();
            this.enemies.forEach(enemies => {
                this.enemies[i].x = this.x + newPos;
            });


            //console.log(this.enemies[i].x)
            //console.log(this.enemies.length)

            /* } else if (this.enemies.length > 1) {

                //this.enemies[i + 1] = this.x + 32
                console.log(this.enemies[i].x)
            } */

            //console.log(this.enemies[i].x)
            /* if (this.x == 112) {
                console.log(this.enemies[i])
            } */
        }

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

    addEnemy() {
        //console.log(this.lenght)
        this.enemies.push(new Enemy(this.x, this.y));
        console.log(this.enemies[0].x)
        /* for (var i = 0; i < this.enemies.length; i++) {
            let enemies = this.enemies[i]
            //this.enemies.push(new Enemy(this.x + 16, this.y));
            console.log(this.x)
            //enemies.push(new Enemy(this.x, this.y + 16));
            //enemies.setPosition(this.x, this.y + 16)
            if (this.x == 112) {
                console.log(this.enemies[i])
            }
        } */
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