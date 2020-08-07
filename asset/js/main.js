var canvas = document.getElementById("tutoriel");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -50;



function rectangle() {
    var ctx = canvas.getContext("2d");
    ctx.save();
    ctx.translate(240, 120);
    ctx.rotate(Math.PI / 4); // 45 degrees
        /*
    1ère valeur : largeur dans l'espace
    2ème valeur : hauteur dans l'espace
    3ème valeur : largeur du rectangle
    4ème valeur : longueur du rectangle
    */    
    ctx.fillRect(460, 20, 30, 150);
    ctx.fill();
    ctx.restore();
}

function drawBall() {
    ctx.beginPath();
    //dessiner la ligne de la fonction drawBall() :
    ctx.arc(490, 490, 20, 0, ballRadius, 0, Math.PI * 2);
    ctx.arc(x, y, 10, 2 * Math.PI, false);
    // ctx.arc(100,100,20,0,2 * Math.PI);
    ctx.fillStyle = "red";
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