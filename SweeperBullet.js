class SweeperBullet {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.sprite = sprites.sweeperBullet;
    }

    update() {
        this.move(2);
    }

    move(y) {
        this.y += y;
    }

    draw() {
        Renderer.img(this.sprite, this.x, this.y);

    }
}

sweeperBullet = new SweeperBullet(sweeper.x, sweeper.y);