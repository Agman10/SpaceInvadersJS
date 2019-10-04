/**
 * contains the variables
 */

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

/*
ctx.rect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "black";
ctx.fill();
*/


/* var sprite = {
    player: '',
    invader: '',
    playerbullet: '',
    invaderbullet: ''
}

var player = {
    life: 3,
    hit: false,
    x: 6,
    y: 6,
    shoot: false,
    score: 0,
    sprite: playersprite
}

var playersprite = new Image('sprites/player.png')

function startGame(){
     this.player.setPosition(4, 4);
    ctx.renderImage(player.sprite)
    player.render(3, 5) 
//drawImage
}
startGame();
 render(); 
ctx.drawImage(playersprite, 5, 6)
console.log(player.life)
console.log(playersprite)
console.log(player.x)
console.log(player.y) */







/* player(setPosition){
    this.player.setPosition(3, 4)
}

playerSprite(sprite,){
    //var player = new Sprite( "sprites/player.png", 4, 4 );
    this.player.sprite = 'sprites/player.png'
    ctx.drawImage(sprite.src)
    } */
/*     constructor(url, x, y){
    this.x = x;
    this.y = y;
    this.importSprite(url, "default");
    //this.width = this.currentSprite.width;
    //this.height = this.currentSprite.height;
    }

    render(){
        ctx.renderImage(this.currentSprite, this.x, this.y);
    }

    importSprite(path, name){
        var sprite = new Image();
        sprite.src = sprite;
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
    } */


/* class Sprite{
     constructor(url, x, y){
        this.x = x;
        this.y = y;
        this.importSprite(url, "default");
        //this.width = this.currentSprite.width;
        //this.height = this.currentSprite.height; 
} */

/* class Player{  

the class for the player. contains the life, collision,
ability to shoot, player sprite


constructor(x, y){
    //player.sprite.src = 'sprites/player.png';
    this.x = x
    this.y = y
}

move(x, y){
    this.x+=x;
    this.y+=y;
}

}

class Invader{

the class for the enemies. contains collision, moving pattern,
shooting pattern, different enemy sprite


}

class Shelter{

This is the spot where you are hiding from the bullets.
when a shelter gets hit it will turn more and more red untill it
takes enough hits to make it dissapear, there will be 4 shelters
in the game.


}  */