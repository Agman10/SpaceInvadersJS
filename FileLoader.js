/**
 * here is where all sprites, (maybe sound?) is loaded
 */
FileLoader = new class FileLoader {
    constructor() {
        this.playerBulletColor = "green";
    }

    importSprite(path) {
        var sprite = new Image();
        sprite.src = path;
        //console.log(sprite);
        return sprite;
    }

}

const sprites = {
    player: FileLoader.importSprite('sprites/player.png'),
    playerBullet: FileLoader.importSprite('sprites/bullets/playerBulletGreen.png'),
    playerBulletLightning: FileLoader.importSprite('sprites/bullets/playerBulletGreenLightning.png'),
    enemy: FileLoader.importSprite('sprites/invaderSprite1.png'),
    sweeper: FileLoader.importSprite('sprites/sweeper.png'),
    sweeperShoot: FileLoader.importSprite('sprites/sweeperShoot.png'),
    sweeperDead: FileLoader.importSprite('sprites/sweeperDead.png'),
    sweeperWin: FileLoader.importSprite('sprites/sweeperWin.png'),
    sweeperBullet: FileLoader.importSprite('sprites/sweeperBullet.png'),
    playerExplode: FileLoader.importSprite('sprites/playerExplode.png'),
    playerExplode2: FileLoader.importSprite('sprites/playerExplode2.png'),
    lifeIcon: FileLoader.importSprite('sprites/lifeIcon.png')
}