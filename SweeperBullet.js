class SweeperBullet {
    constructor(x, y) {
        this.posX = x;
        this.posY = y;
        this.sprite = sprites.sweeperBullet;
    }

    update() {
        this.move(2);
    }

    move(y) {
        this.posY += y;
    }

    draw() {
        Renderer.img(this.sprite, this.posX, this.posY);

    }
}

sweeperBullet = new SweeperBullet(sweeper.posX, sweeper.posY);