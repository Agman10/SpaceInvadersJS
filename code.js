var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.rect(0, 0, 448, 512);
ctx.fillStyle = "black";
ctx.fill();

class Sprite{
    constructor(url, x, y){
    this.sprites = new Object();
    this.importSprite(url, "default");
    this.currentSprite = this.getSprite("default");
    this.x = x
    this.y = y
    this.width = this.currentSprite.width;
    this.height = this.currentSprite.height;
    }
}
class Player{
/*
the class for the player. contains the life, collision,
ability to shoot, player sprite
*/
}

class Invader{
/* 
the class for the enemies. contains collision, moving pattern,
shooting pattern, different enemy sprite
*/
}

startGame()
function startGame(){

}