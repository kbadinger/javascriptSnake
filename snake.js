window.onload = function () {

    cv = document.getElementById("graphicsContext");
    graphicsContext = cv.getContext("2d");

    document.addEventListener("keydown", keyPush);

    setInterval(gameLoop, 1000 / 10 );

}

playerX = playerY = 10;

gridSize = 20;
tileCount = 800 / 20;

targetX = targetY = 15;

directionX = directionY = 0;

trail = [];
tail = 5;

function gameLoop() {


    playerX += directionX;
    playerY += directionY;
    if (playerX < 0) {
        playerX = tileCount - 1;
    }
    if (playerX > tileCount - 1) {
        playerX = 0;
    }
    if (playerY < 0) {
        playerY = tileCount - 1;
    }
    if (playerY > tileCount - 1) {
        playerY = 0;
    }
    graphicsContext.fillStyle = "black";
    graphicsContext.fillRect(0, 0, cv.width, cv.height);

    graphicsContext.fillStyle = "lime";
    for (var i = 0; i < trail.length; i++) {
        graphicsContext.fillRect(trail[i].x * gridSize, trail[i].y * gridSize, gridSize - 2, gridSize - 2);
        if (trail[i].x == playerX && trail[i].y == playerY) {
            tail = 5;
        }
    }
    trail.push({ x: playerX, y: playerY });
    while (trail.length > tail) {
        trail.shift();
    }

    if (targetX == playerX && targetY == playerY) {
        tail++;
        targetX = Math.floor(Math.random() * tileCount);
        targetY = Math.floor(Math.random() * tileCount);
    }
    graphicsContext.fillStyle = "red";
    graphicsContext.fillRect(targetX * gridSize, targetY * gridSize, gridSize - 2, gridSize - 2);
}
function keyPush(evt) {



    switch (evt.keyCode) {
        case 37:
            directionX = -1;
            directionY = 0;
            break;
        case 38:
            directionX = 0;
            directionY = -1;
            break;
        case 39:
            directionX = 1;
            directionY = 0;
            break;
        case 40:
            directionX = 0;
            directionY = 1;
            break;
    }
}