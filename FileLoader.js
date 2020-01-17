/**
 * here is where all sprites, (maybe sound?) is loaded
 */
FileLoader = new class FileLoader {
    constructor() { }

    importSprite(path) {
        var sprite = new Image();
        sprite.src = path;
        return sprite;
    }

}

const sprites = {
    player: FileLoader.importSprite('sprites/player.png'),

    playerBulletWhite: FileLoader.importSprite('sprites/bullets/playerBulletWhite.png'),
    playerBulletWhiteLightning: FileLoader.importSprite('sprites/bullets/playerBulletWhiteLightning.png'),
    playerBulletGreen: FileLoader.importSprite('sprites/bullets/playerBulletGreen.png'),
    playerBulletGreenLightning: FileLoader.importSprite('sprites/bullets/playerBulletGreenLightning.png'),
    playerBulletBlue: FileLoader.importSprite('sprites/bullets/playerBulletBlue.png'),
    playerBulletBlueLightning: FileLoader.importSprite('sprites/bullets/playerBulletBlueLightning.png'),
    playerBulletRed: FileLoader.importSprite('sprites/bullets/playerBulletRed.png'),
    playerBulletRedLightning: FileLoader.importSprite('sprites/bullets/playerBulletRedLightning.png'),
    playerBulletMagenta: FileLoader.importSprite('sprites/bullets/playerBulletMagenta.png'),
    playerBulletMagentaLightning: FileLoader.importSprite('sprites/bullets/playerBulletMagentaLightning.png'),
    playerBulletPurple: FileLoader.importSprite('sprites/bullets/playerBulletPurple.png'),
    playerBulletPurpleLightning: FileLoader.importSprite('sprites/bullets/playerBulletPurpleLightning.png'),

    enemy1: FileLoader.importSprite('sprites/enemies/enemy1.png'),
    enemy1frame2: FileLoader.importSprite('sprites/enemies/enemy1frame2.png'),
    enemy2: FileLoader.importSprite('sprites/enemies/enemy2.png'),
    enemy2frame2: FileLoader.importSprite('sprites/enemies/enemy2frame2.png'),
    //enemy3still: FileLoader.importSprite('sprites/enemies/enemy3still.png'),
    enemy3: FileLoader.importSprite('sprites/enemies/enemy3.png'),
    enemy3frame2: FileLoader.importSprite('sprites/enemies/enemy3frame2.png'),
    enemy4: FileLoader.importSprite('sprites/enemies/enemy4.png'),
    enemy4frame2: FileLoader.importSprite('sprites/enemies/enemy4frame2.png'),
    enemy5: FileLoader.importSprite('sprites/enemies/enemy5.png'),
    enemy5frame2: FileLoader.importSprite('sprites/enemies/enemy5frame2.png'),
    enemyBullet: FileLoader.importSprite('sprites/enemyBullet.png'),
    enemyBulletLightning: FileLoader.importSprite('sprites/enemyBulletLightning.png'),
    sweeper: FileLoader.importSprite('sprites/sweeper.png'),
    sweeperShoot: FileLoader.importSprite('sprites/sweeperShoot.png'),
    sweeperDead: FileLoader.importSprite('sprites/sweeperDead.png'),
    sweeperWin: FileLoader.importSprite('sprites/sweeperWin.png'),
    sweeperBullet: FileLoader.importSprite('sprites/sweeperBullet.png'),
    playerExplode: FileLoader.importSprite('sprites/playerExplode.png'),
    playerExplode2: FileLoader.importSprite('sprites/playerExplode2.png'),
    playerDead: FileLoader.importSprite('sprites/playerDead.png'),
    playerGhost: FileLoader.importSprite('sprites/playerGhost.png'),
    lifeIcon: FileLoader.importSprite('sprites/lifeIcon.png')
}