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
function resetButton() {
    game.reset();

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
    //enemy.enemies.push(new Enemy(enemy.x, enemy.y));

    for (var i = 0; i < 50; i++) {
        enemy.addEnemy();
    }
    for (var i = 0; i < 10; i++) {
        enemy.enemies[i].sprite = sprites.enemy5;
    }
    for (var i = 10; i < 20; i++) {
        enemy.enemies[i].sprite = sprites.enemy4;
    }
    for (var i = 20; i < 30; i++) {
        enemy.enemies[i].sprite = sprites.enemy3;
    }
    for (var i = 30; i < 40; i++) {
        enemy.enemies[i].sprite = sprites.enemy2;
    }
    for (var i = 40; i < 50; i++) {
        enemy.enemies[i].sprite = sprites.enemy1;
    }
    enemy.shoot()
}