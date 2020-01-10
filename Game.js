class Game {
  constructor() {
    this.running = false;
    this.frame = 0;
  }

  start() {
    //when space is pressed it wont repeat when hold
    document.addEventListener("Space", () => {
      if (player.bullets.length < player.maxBullets) {
        player.shoot();
        //enemy.addEnemy();
      }
      if (!player.alive) this.reset()
    });
    document.addEventListener("KeyA", () => {
      //if (sweeper.bullets.length < sweeper.maxBullets) {
      //enemy.enemies.pop();
      enemy.enemies.splice(0, 1);
      console.log(enemy.enemies.length)
      //sweeper.shoot();
      //}
    });
    setInterval(() => this.loop(), 1000 / 60);
    setInterval(() => this.deathAnimation(), 1000 / 10);
    setInterval(() => this.enemyMovement(), 1000 / 30);
    setInterval(() => this.enemyAnimation(), 1000 / 2);
  }

  stop() { }

  loop() {
    this.logic();
    this.render();
  }

  reset() {
    //game.start();
    this.frame = 0;
    player = new Player(112, 210)
    enemy = new Enemy(32, 46)
    for (var i = 0; i < 50; i++) {
      enemy.addEnemy();
    }
    sweeper = new Sweeper(111, 20);
    sweeperBullet = new SweeperBullet(sweeper.x, sweeper.y);
    //sweeper.shoot();
  }

  /**
   * the logic of the game
   * ex: collision, movement, shooting, winning, game over,
   */
  logic() {
    //right key pressed
    if (player.alive && !player.exploding) {
      if (keysDown[39] && player.x < 211) {
        player.move(1, 0);
        //console.log("right");
      }

      //left key pressed
      if (keysDown[37] && player.x > 0) {
        player.move(-1, 0);
        //console.log("left");
      }
    }

    //makes the bullet move
    player.bullets.forEach(bullet => {
      bullet.update();
    });

    player.update();

    sweeper.bullets.forEach(bullet => {
      bullet.update();
    });
    if (sweeper.shooting == true) {
      sweeper.shootingSprite();
      if (sweeper.shootingFrames == 0) {
        sweeper.shooting = false;
        sweeper.shootingFrames = 10;
        sweeper.sprite = sprites.sweeper;
      }
    }

    if (sweeper.dieingFrames == 0) {
      sweeper.alive = false;
    }

    if (!player.alive) sweeper.sprite = sprites.sweeperWin;

    if (this.frame <= firstSweeperShot) this.frame += 1;

    if (this.frame == firstSweeperShot) sweeper.shoot();

    sweeper.update();



  }

  deathAnimation() {
    if (player.exploding == true) {
      player.explode();
    }

    if (isOdd(player.explodingFrames) == 1) {
      player.sprite = sprites.playerExplode2;
    }
    if (player.explodingFrames == 0) {
      player.exploding = false;
      player.explodingFrames = 20;
      if (player.alive && !player.exploding) sweeper.shoot();

      if (player.alive) {
        player.sprite = sprites.player;
        player.x = 112;
      }
    }
  }

  enemyMovement() {
    enemy.update();
  }

  enemyAnimation() {
    for (var i = 0; i < 10; i++) {
      if (enemy.enemies[i].frame == 2) {
        enemy.enemies[i].sprite = sprites.enemy1frame2;
        enemy.enemies[i].frame = 0;
      }
      if (enemy.enemies[i].frame == 1) {
        enemy.enemies[i].sprite = sprites.enemy1;
      }
      enemy.enemies[i].animation();
    }
    for (var i = 10; i < 20; i++) {
      if (enemy.enemies[i].frame == 2) {
        enemy.enemies[i].sprite = sprites.enemy2frame2;
        enemy.enemies[i].frame = 0;
      }
      if (enemy.enemies[i].frame == 1) {
        enemy.enemies[i].sprite = sprites.enemy2;
      }
      enemy.enemies[i].animation();
    }
    for (var i = 20; i < 30; i++) {
      if (enemy.enemies[i].frame == 2) {
        enemy.enemies[i].sprite = sprites.enemy3frame2;
        enemy.enemies[i].frame = 0;
      }
      if (enemy.enemies[i].frame == 1) {
        enemy.enemies[i].sprite = sprites.enemy3frame1;
      }
      enemy.enemies[i].animation();
    }
    for (var i = 30; i < 40; i++) {
      if (enemy.enemies[i].frame == 2) {
        enemy.enemies[i].sprite = sprites.enemy4frame2;
        enemy.enemies[i].frame = 0;
      }
      if (enemy.enemies[i].frame == 1) {
        enemy.enemies[i].sprite = sprites.enemy4;
      }
      enemy.enemies[i].animation();
    }
    for (var i = 40; i < 50; i++) {
      if (enemy.enemies[i].frame == 2) {
        enemy.enemies[i].sprite = sprites.enemy5frame2;
        enemy.enemies[i].frame = 0;
      }
      if (enemy.enemies[i].frame == 1) {
        enemy.enemies[i].sprite = sprites.enemy5;
      }
      enemy.enemies[i].animation();
    }

  }

  render() {
    Renderer.clear();
    player.draw();
    //enemy.draw();

    player.bullets.forEach(bullet => {
      bullet.draw();
    });

    sweeper.bullets.forEach(bullet => {
      bullet.draw();
    });

    enemy.enemies.forEach(enemy => {
      enemy.draw();

    });

    if (sweeper.alive) {
      sweeper.draw();
    }

    /* ctx.font = "10px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Lives: " + player.lives, 4, 10); */
  }
}