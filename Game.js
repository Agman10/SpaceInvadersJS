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
        console.log("loop de loop :)")
    }

    /**
     * the logic of the game 
     * ex: collision, movement, shooting, winning, game over,
     */
    logic(){
        player.move()
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

window.onload = () => {
    setInterval(() => Game.loop(), 1000 / 60);
}