/**
 * contains the variables
 */
var game = new Game();

/**
 * detects key presses
 */
var keysDown = [];
/**
 * 
 */
document.addEventListener("keydown", event => {
    //console.log(event.keyCode)
    //   console.log("event code " + event.code)
    //when space is pressed it doesn't repeat. iit gets the name of the key
    if (!keysDown[event.keyCode]) {
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
    game.start();
}