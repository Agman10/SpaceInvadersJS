/**
 * here is where all sprites, (maybe sound?) is loaded
 */
class FileLoader{
    constructor(src, x, y){
        this.sprites = new Object();
        this.importSprite(src, "default");
        this.currentSprite = this.getSprite("default", sprite);
        this.x = x;
        this.y = y;
        this.width = this.currentSprite.width;
        this.height = this.currentSprite.height;

        
    }

    importSprite(path, name){
        var sprite = new Image();
        sprite.src = path;
        this.sprites[name] = sprite;
    }
    
    getSprite(name, sprite){
        for(var sprite in this.sprites){
            if(name == sprite){
                return this.sprites[sprite];
            }
        }
    }

    spriteTexture(FileLoader){
        this.player = FileLoader.importSprite('sprites/player.png')
    }
}