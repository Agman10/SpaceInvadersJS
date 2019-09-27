var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
/*
ctx.rect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "black";
ctx.fill();
*/

class Sprite{
    constructor(url, x, y){
    this.sprites = new Object();
    this.importSprite(url, "default");
    this.currentSprite = this.getSprite("default");
    this.x = x;
    this.y = y;
    this.width = this.currentSprite.width;
    this.height = this.currentSprite.height;
    }

    render(){
        ctx.renderImage(this.currentSprite, this.x, this.y);
    }

    importSprite(path, name){
        var sprite = new Image;
        sprite.src = path;
        this.sprites[name] = sprite;
    }

    getSprite(name){
        for(var sprite in this.sprites){
            if(name == sprite){
                return this.sprites[sprite];
            }
        }
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }

    move(x, y){
        this.x+=x;
        this.y+=y;
    }
}

class Player{  
/*
the class for the player. contains the life, collision,
ability to shoot, player sprite
*/
playerSprite(){
    var player = new Sprite(/* "sprites/player.png", 4, 4 */);
    player.sprite = 'sprites/player.png'
    ctx.drawImage(5, 5, player.sprite)
    }
}

class Invader{
/* 
the class for the enemies. contains collision, moving pattern,
shooting pattern, different enemy sprite
*/

}

class Shelter{
/*
This is the spot where you are hiding from the bullets.
when a shelter gets hit it will turn more and more red untill it
takes enough hits to make it dissapear, there will be 4 shelters
in the game.
*/

}

startGame()
function startGame(){
    player.setPosition(4, 4);
    ctx.renderImage(5, 5, player.sprite)
    player.render(3, 5)
//drawImage
}
render();