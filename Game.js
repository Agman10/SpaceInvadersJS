/**
 * 
 */
class Game{
    /**
     * 
     */
    constructor(){
        this.running = false;
    }

    /**
     * function to star the game
     */
    start(){
        //when space is pressed it wont repeat when hold
        document.addEventListener("Space", () => {
            //if the bullets onscreen is under 2 player can shoot
            if(player.bullets.length < 2){
            player.shoot();
            console.log(player.bullets);
            console.log("length: " + player.bullets.length);
            }

            //delays the info so it doesn't print info before bullet deletion
            //setTimeout(function(){
            
            //},100);
            
            
            //console.log(player.bullets[player.bullets.length -1]);
            //console.log("last bullet " + player.lastBullet)
            /* if (Player.bullets.posY = -4){
                PlayerBullet.posY += 65
            } */
        })
        
        setInterval(() => this.loop(), 1000 / 60);
    }

    /**
     * function to stop the game
     */
    stop(){

    }

    /**
     * call logic and render
     */
    loop(){
        this.logic();
        this.render();
        
        //console.log("loop de loop :)")
        
    }

    /**
     * the logic of the game 
     * ex: collision, movement, shooting, winning, game over,
     */
    logic(){
        //right key pressed
        if (keysDown[39]){
            player.move(1, 0);
            //console.log("right");
        }

        //left key pressed
        if (keysDown[37]) {
            player.move(-1, 0);
            //console.log("left");
        }

        //makes the bullet move
        player.bullets.forEach(bullet  => {
            //console.log("bullet" + bullet)
            
            bullet.update();
        });

        player.update();

        //collision
        /* if(PlayerBullet.posY = 80){
            console.log("test")
        } */

        //space key pressed
        /* if (keysDown[32]){
            //playerBullet.onscreen += 1;
            //player.shoot()
            //playerBullet.move(-1, 0);
            player.shoot();
            console.log("space");
            console.log("player bullet position: " + playerBullet.posY)
        }  */

        
        //console.log(player.posX)
    }

    /**
     * Renders the game sprites (sound maybe?)
     */
    render(){
        Renderer.clear();
        //Renderer.rect(10, 10, 50, 50, "#f0f");
        
        player.draw();
        
        //draws the bullet
        player.bullets.forEach(bullet  => {
            //console.log("bullet" + bullet) 
            bullet.draw();
        });
        
    }
}

