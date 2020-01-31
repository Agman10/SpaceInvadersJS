class Game {
  constructor() {
    this.running = false;
    this.frame = 0;
    this.deathFrame = 0
  }

  start() {
    //when space is pressed it wont repeat when hold
    document.addEventListener("Space", () => {
      if (player.bullets.length < player.maxBullets) {
        player.shoot();
        //enemy.addEnemy();
      }
      if (!player.alive) this.reset();
    });
    document.addEventListener("KeyA", () => {
      //if (sweeper.bullets.length < sweeper.maxBullets) {
      //enemy.enemies.pop();
      //enemy.enemies.splice(0, 1);
      enemy.shoot()
      console.log(enemy.enemies.length)
      //sweeper.shoot();
      //}
    });
    setInterval(() => this.loop(), 1000 / 60);
  }

  stop() { }

  loop() {
    this.logic();
    this.render();
    this.enemyMovement()
    this.enemyAnimation()

    this.deathFrame++;
    if (this.deathFrame == 5) {
      this.deathFrame = 0
    }
    if (this.deathFrame == 1) this.deathAnimation()
  }

  reset() {
    location.reload();
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

    enemy.bullets.forEach(bullet => {
      bullet.update();
    });

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
    //console.log(player.explodingFrames)
    if (player.exploding == true) {
      player.explode();
    }

    if (isOdd(player.explodingFrames) == 1) {
      player.sprite = sprites.playerExplode2;
    }
    if (player.explodingFrames == 0) {
      //player.lives -= 1;
      player.exploding = false;
      player.explodingFrames = 20;
      if (player.alive && !player.exploding &&
        sweeper.bullets.length < sweeper.maxBullets) sweeper.shoot();
      if (player.alive && !player.exploding) enemy.shoot()

      if (player.alive) {
        player.sprite = sprites.player;
        player.x = 112;
      } else {
        player.sprite = sprites.playerDead;
        player.ghosted = true;
      }
    }
  }

  enemyMovement() {
    enemy.update();
  }

  enemyAnimation() {
    let frame1 = 30
    let frame2 = 60
    for (var i = 0; i < enemy.enemies.length; i++) {
      if (enemy.enemies[i].id < 10) {
        if (enemy.enemies[i].frame == frame2) {
          enemy.enemies[i].sprite = sprites.enemy5frame2;
          enemy.enemies[i].frame = 0;
        }
        if (enemy.enemies[i].frame == frame1) {
          enemy.enemies[i].sprite = sprites.enemy5;
        }
        enemy.enemies[i].animation();
      }
      if (enemy.enemies[i].id > 9 && enemy.enemies[i].id < 20) {
        if (enemy.enemies[i].frame == frame2) {
          enemy.enemies[i].sprite = sprites.enemy4frame2;
          enemy.enemies[i].frame = 0;
        }
        if (enemy.enemies[i].frame == frame1) {
          enemy.enemies[i].sprite = sprites.enemy4;
        }
        enemy.enemies[i].animation();
      }
      if (enemy.enemies[i].id > 19 && enemy.enemies[i].id < 30) {
        if (enemy.enemies[i].frame == frame2) {
          enemy.enemies[i].sprite = sprites.enemy3frame2;
          enemy.enemies[i].frame = 0;
        }
        if (enemy.enemies[i].frame == frame1) {
          enemy.enemies[i].sprite = sprites.enemy3;
        }
        enemy.enemies[i].animation();
      }
      if (enemy.enemies[i].id > 29 && enemy.enemies[i].id < 40) {
        if (enemy.enemies[i].frame == frame2) {
          enemy.enemies[i].sprite = sprites.enemy2frame2;
          enemy.enemies[i].frame = 0;
        }
        if (enemy.enemies[i].frame == frame1) {
          enemy.enemies[i].sprite = sprites.enemy2;
        }
        enemy.enemies[i].animation();
      }
      if (enemy.enemies[i].id > 39 && enemy.enemies[i].id < 50) {
        if (enemy.enemies[i].frame == frame2) {
          enemy.enemies[i].sprite = sprites.enemy1frame2;
          enemy.enemies[i].frame = 0;
        }
        if (enemy.enemies[i].frame == frame1) {
          enemy.enemies[i].sprite = sprites.enemy1;
        }
        enemy.enemies[i].animation();
      }
    }
  }

  render() {
    Renderer.clear();
    player.draw();
    //enemy.draw();
    if (player.ghosted) {
      player.ghost()
    }
    player.bullets.forEach(bullet => {
      bullet.draw();
    });
    enemy.bullets.forEach(bullet => {
      bullet.draw();
    });

    sweeper.bullets.forEach(bullet => {
      bullet.draw();
    });
    enemyBullet.draw()
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