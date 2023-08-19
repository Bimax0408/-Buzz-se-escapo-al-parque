function setup() {
    canvas = createCanvas(900, 500);
    background(pasto);
    jugador = createSprite(100, 100);
    jugador.addAnimation("walk", walkAnimation);
    jugador.scale = 1.5
    saltando = false
    tiempodesalto = 0
    bajando=false
    tiempodebajada=0
    bordes=createEdgeSprites()
}

function preload() {
    walkAnimation = loadAnimation("walk1.png", "walk2.png", "walk3.png", "walk4.png", "walk5.png", "walk6.png");
    pasto = loadImage("fondo.jpg")
}

function draw() {
    background(pasto);
    drawSprites();
    console.log(jugador.y)
    if (keyDown(RIGHT_ARROW)) {
        jugador.x = jugador.x + 5
        jugador.mirrorX(1)
    }
    if (keyDown(LEFT_ARROW)) {
        jugador.x = jugador.x - 5
        jugador.mirrorX(-1)
    }
    if (keyDown("SPACE")) {
        saltando = true
        jugador.velocityY = -3
    }
    if (keyDown(DOWN_ARROW)) {
        jugador.y = jugador.y + 3
    }
    if (keyDown(UP_ARROW)) {
        jugador.y = jugador.y - 3
    }
    salto()
    jugador.bounceOff(bordes[0])
    jugador.bounceOff(bordes[1])
    jugador.bounceOff(bordes[2])
    jugador.bounceOff(bordes[3])
}

function salto() {
    if (saltando) {
        tiempodesalto++
    }
    if (tiempodesalto == 20) {
        jugador.velocityY = +3
        tiempodesalto = 0
        saltando = false
        bajando=true
    }
    if (bajando) {
        tiempodebajada++
    }
    if (tiempodebajada == 20) {
        jugador.velocityY = 0
        tiempodebajada = 0
        bajando = false
    }
    
}