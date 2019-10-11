/**
 * 
 */
Game = new class Game{
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
            
            player.shoot();
            console.log(player.bullets);
            
            
            
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

/**
 * detects key presses
 */
var keysDown = [];
/**
 * 
 */
document.addEventListener("keydown", event => {
    //console.log(event.keyCode)
    console.log("event code " + event.code)
    //when space is pressed it doesn't repeat. iit gets the name of the key
    if(!keysDown[event.keyCode]){
        document.dispatchEvent(new Event(event.code))
    }

    keysDown[event.keyCode] = true;
})

document.addEventListener("keyup", event => {
    keysDown[event.keyCode] = false;
})

/**
 * loads the and loops, makes the game run
 */
window.onload = () => {
    Game.start();
}