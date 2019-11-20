/**
 * 
 */
class Game {
    /**
     * 
     */
    constructor() {
        this.running = false;
    }

    /**
     * function to star the game
     */
    start() {
        //when space is pressed it wont repeat when hold
        document.addEventListener("Space", () => {
            //if the bullets onscreen is under 2 player can shoot
            if (player.bullets.length < 3) {
                player.shoot();


                //console.log(player.bullets);
                //console.log("length: " + player.bullets.length);
            }
            if (sweeper.bullets.length < 1) {
                sweeper.shoot();
            }
        })

        setInterval(() => this.loop(), 1000 / 60);
        setInterval(() => this.deathAnimation(), 1000 / 10);

    }

    /**
     * function to stop the game
     */
    stop() {

    }

    /**
     * call logic and render
     */
    loop() {
        this.logic();
        this.render();

    }

    /**
     * the logic of the game 
     * ex: collision, movement, shooting, winning, game over,
     */
    logic() {
        //right key pressed
        if (player.alive && !player.exploding) {
            if (keysDown[39] && player.posX < 211) {
                player.move(1, 0);
                //console.log("right");
            }

            //left key pressed
            if (keysDown[37] && player.posX > 0) {
                player.move(-1, 0);
                //console.log("left");
            }
        }

        //makes the bullet move
        player.bullets.forEach(bullet => {
            bullet.update();
        });

        /* if (sweeper.bullets[0].posY == player.posY) {
            console.log("die")
            //player.hit()
        } */

        player.update();

        sweeper.bullets.forEach(bullet => {
            bullet.update();

        });

        sweeper.update();

    }

    deathAnimation() {

        if (player.exploding == true) {
            //console.log(player.exploding)
            player.explode();
        }

        if (isOdd(player.explodingFrames) == 1) {
            player.sprite = sprites.playerExplode2;

        }
        if (player.explodingFrames == 0) {
            player.exploding = false
            player.explodingFrames = 20;
            if (player.alive) {
                player.sprite = sprites.player;
                player.posX = 112;
                //console.log("reseting position")
            }

        }
    }

    /**
     * Renders the game sprites (sound maybe?)
     */
    render() {
        Renderer.clear();
        //Renderer.rect(10, 10, 50, 50, "#f0f");
        //console.log(player.exploding)
        player.draw();
        enemy.draw();
        sweeper.draw();
        //console.log(player.posX)
        //draws the bullet
        player.bullets.forEach(bullet => {
            //console.log("bullet" + bullet) 
            bullet.draw();
        });

        sweeper.bullets.forEach(bullet => {
            bullet.draw();

        });
        //console.log(sweeper.bullets[0].posY)

        ctx.font = "10px Arial";
        ctx.fillStyle = "white";
        ctx.fillText("Lives: " + player.lives, 4, 10);




    }
}