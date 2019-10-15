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
            //this.shoot();
            //console.log(this.bullets[i]);
            //removes a bullet from array when offscreen
            if(bullet.posY < -4){
                this.hit();
                console.log("lives: " + this.lives);
                this.bullets.splice(i, 1);
                console.log("erased");
            }

            //removes a bullet when you try to shoot it while too many exist on screen
            /* if(this.bullets.length > 2){
                
                this.bullets.splice(2, i);
                console.log("too many")
            } */
        
        
        }
        
        /* if(player.lives == 1){
            console.log("dead")
        } */

        /* for(;this,bullets.length > 2;){
            if(event.keyCode = 32){
                console.log("hello")
            }
        } */
        /* for(;2 > this.bullets.length;){
            this.bullets.splice(i, 1);
        } */
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

    /**
     * when the player gets hit 
     */
    hit(){
        this.lives -= 1;
    }
}
/**
 * player position
 */

player = new Player(112, 210);