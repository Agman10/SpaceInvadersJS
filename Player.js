/**
 * the class for the player. contains the life, ability to shoot
 */
class Player{
    constructor(x, y){
        this.posX = x;
        this.posY = y;
        this.lives = 3;

        this.sprite = sprites.player;
    }
    move(){
        this.posX += 2;
        this.posY += 2;
    }

    draw(){
        Renderer.img(this.sprite, this.posX, this.posY);
    }
}

player = new Player(40, 30);