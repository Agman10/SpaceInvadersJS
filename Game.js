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
        if (keysDown[39]){
            player.move(1.5, 0)
            console.log("right")
        }
        if (keysDown[37]) {
            player.move(-1.5, 0)
            console.log("left")
        }
        //console.log(player.posX)
    }

    /**
     * Renders the game sprites (sound maybe?)
     */
    render(){
        Renderer.clear();
        Renderer.rect(10, 10, 50, 50, "#f0f");
        
        
        player.draw();
        
    }
}

/**
 * detects key presses
 */
var keysDown = []

document.addEventListener("keydown", event => {
    //console.log(event.keyCode)
    keysDown[event.keyCode] = true;
})

document.addEventListener("keyup", event => {
    keysDown[event.keyCode] = false;
})

/**
 * loads the and loops, makes the game run
 */
window.onload = () => {
    setInterval(() => Game.loop(), 1000 / 60);
}