var canvas = document.getElementById("tutoriel");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -50;
// var paddleHeight = 30;
// var paddleWidth = 75;
// var paddleX = (canvas.width - paddleWidth) / 2;

function rectangle() {
    var ctx = canvas.getContext("2d");
    /*
    1ère valeur : largeur dans l'espace
    2ème valeur : hauteur dans l'espace
    3ème valeur : largeur du rectangle
    4ème valeur : longueur du rectangle
    */
    ctx.rect(435, 750, 40, 150);
    ctx.fillStyle = "black";
    ctx.fill();
}

function drawBall() {
    ctx.beginPath();
    //dessiner la ligne de la fonction drawBall() :
    ctx.arc(x, y, 10, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    // ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //nous déclarons les fonctions à afficher
    rectangle();
    drawBall();
    drawPaddle();

//La balle ne ressort  plus
    if (y + dy > canvas.height - ballRadius) {
        dy = -dy;
    }

    //nous avons juste mit la hauteur et non la largeur
    y += dy;
}

/*l'animation de la bille, j'ai diu la modifier en fonction de la ligne de la bille si je laissais la valeur
setInterval(draw, 10) la bille allait trop vite
*/
setInterval(draw, 100);