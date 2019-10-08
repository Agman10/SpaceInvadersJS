/**
 * here is where all sprites, (maybe sound?) is loaded
 */

 

FileLoader = new class FileLoader{
    constructor(){
    }

    importSprite(path){
        var sprite = new Image();
        sprite.src = path;
        console.log(sprite);
        return sprite;
    }

}

const sprites = {
    player: FileLoader.importSprite('sprites/player.png')
}

