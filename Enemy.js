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
            /* else if (this.enemies.length > 1) {
               this.enemies[this.enemies.length - 1].x = newPos;
           } */
            //let maxX = this.enemies[i - 1].x + 16
            //enemies.setPosition(enemies.x, enemies.y - 16)
            //if (this.enemies.length > 0) {
            //enemy.draw();
            /* this.enemies.forEach(enemies => {
                this.enemies[i].x = this.x + newPos;
            }); */


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

            if (this.direction == "right") {
                this.enemies[i].move(1)
            }
            if (this.direction == "left") {
                this.enemies[i].move(-1)
            }
            if (this.enemies[i].x == 213) {
                this.direction = "left";
            } else if (this.enemies[i].x == 0) {
                this.direction = "right";
            }
            //console.log(this.enemies[i].x)
        }

        /* if (this.direction == "right") {
            this.move(1)
        }
        if (this.direction == "left") {
            this.move(-1)
        } */

        /* if (this.x == 213) {
            this.direction = "left";
        } else if (this.x == 0) {
            this.direction = "right";
        } */
    }

    addEnemy() {
        //console.log(this.lenght)

        if (this.enemies.length == 0) {
            this.enemies.push(new Enemy(this.x, this.y));
        } else if (this.enemies.length > 0 && this.enemies.length < 10) {
            this.enemies.push(new Enemy(this.enemies[0].x + this.enemies.length * 16, this.enemies[0].y));
        } else if (this.enemies.length == 10) {
            this.enemies.push(new Enemy(this.enemies[0].x, this.enemies[0].y + 16));
        } else {
            console.log("stop")
        }
        //console.log(this.enemies.length)
        for (var i = 0; i < this.enemies.length; i++) {
            console.log(i - 1)
        }
        //console.log(this.enemies[0].x)
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