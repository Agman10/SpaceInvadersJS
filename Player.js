/**
 * the class for the player. contains the life, ability to shoot
 */
class Player{
    constructor(x, y){
        this.posX = x;
        this.posY = y;
        this.lives = 3;
        this.bullets = [];
        this.lastBullet;
        this.sprite = sprites.player;
    }

    update(){
        //checks the bullet shot defines it as i
        for(var i = 0; i < this.bullets.length; i++){
            let bullet = this.bullets[i];
            //console.log(this.bullets[i]);
            //removes a bullet from array when offscreen
            if(bullet.posY < 65){
                this.bullets.splice(i, 1);
                console.log("hello");
            }
            
        }
        
        //this.lastBullet = this.bullets[this.bullets - 1];
        /* this.bullets.forEach(posY => {
            if(this.bullets.posY === 65){
                console.log("PlayerBullet.posY");
            } 
            
        }); */
    }
    /**
     * moves the player
     */
    move(x){
        this.posX += x;
        //this.posY += 2;
    }

    draw(){
        Renderer.img(this.sprite, this.posX, this.posY);
        
    }

    /**
     * shoots a new playerbullet from player
     */
    shoot(){
        this.bullets.push(new PlayerBullet(this.posX+6, this.posY-6));
    }
}
/**
 * player position
 */

player = new Player(112, 210);