window.addEventListener("keydown", function (e) {
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

var game = new Game();

var keysDown = [];

var firstSweeperShot = Math.floor(Math.random() * (80 - 20)) + 20;

function isOdd(num) {
    return num % 2;
}
document.addEventListener("keydown", event => {
    //console.log(event.keyCode + " " + event.code)
    if (!keysDown[event.keyCode]) {
        document.dispatchEvent(new Event(event.code))
    }

    keysDown[event.keyCode] = true;
})

document.addEventListener("keyup", event => {
    keysDown[event.keyCode] = false;
})

window.onload = () => {
    game.start();
    enemy.enemies.push(new Enemy(enemy.x, enemy.y));
}