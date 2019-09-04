var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

class Item{
    constructor(url, x, y){
        this.sprites = new Object();
        this.importSprite(url, "default");
        this.currentSprite = this.getSprite("default");
        this.x = x
        this.y = y
        this.width = this.currentSprite.width;
        this.height = this.currentSprite.height;
        
    }
    



render(){
    ctx.drawImage(this.currentSprite, this.x, this.y);
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

player(){

}

invader(){
    
}

}
startGame()
function startGame(){

    player.setPosition(4, 4)

    for(var i = 0; i < AMOUNT_OF_GIFTS; i++){
        gifts.push(new Item("sprites/invaderSprite1.png", genrateRandomPos().x, genrateRandomPos().y))
        

    }
    function genrateRandomPos(){
        return{
            x: Math.floor(Math.random() * (canvas.width-60)),
            y: Math.floor(Math.random() * (canvas.height-60))
        }
    }
}
    function render(){

        //logic
        for(var i = 0; i < gifts.length; i++) {
            if(collision(player, gifts[i])){
                console.log("picked up!")
                gifts.splice(i, 1);
                score++;
    
            }
        }  

if (keysDown[39]) {
    Player.move(1.5, 0)
    Player.currentSprite = Player.getSprite("right");
}
if (keysDown[37]) {
    Player.move(-1.5, 0)
    Player.currentSprite = Player.getSprite("left");
}

    }

    var keysDown = []

document.addEventListener("keydown", event => {
    console.log(event.keyCode)
    keysDown[event.keyCode] = true;
})

document.addEventListener("keyup", event => {
    keysDown[event.keyCode] = false;
})
    render();