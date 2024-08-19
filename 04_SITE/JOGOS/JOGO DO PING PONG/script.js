var vbtIniciar
var vbola 
var vcpu 
var vjogador 
var vPaineltxtPontos 
var game,frames 
var posBolaX,posBolaY
var posJogadorX,posJogadorY
var posCpuX,posCpuY
var dirJy
var posJogIniY=180
var posCpuIniY=180
var posBolaIniX=475
var posBolaIniY=240
var campoX=0
var campoY=0
var campoW=960
var campoH=500
var barraW=20
var barraH=140
var bolaW=20
var bolaH=20
var bolaX
var bolaY
var cpuY=0
var velBola
var velCpu
var velJogador
var pontos=0
var tecla
jogo=false

function controlajog(){
    if (jogo) {
        posJogadorY+=velJogador*dirJy
        if (((posJogadorY+barraH)>=campoH)||((posJogadorY)<=0)) {
            posJogadorY+=(velJogador*dirJy)*(-1)
        }
        vjogador.style.top=posJogadorY+'px'
    }
}

function controlacpu(){
    if (jogo) {
        if ((posBolaX > (campoW/2))&&(bolaX > 0)) {
            if (((posBolaY+(bolaH/2))>((posCpuY+(barraH/2)))+velCpu)) {
                if ((posCpuY+barraH) <= campoH) {
                    posCpuY+=velCpu
                }
            }
            else if ((posBolaY+(bolaH/2)) < (posCpuY+(barraH/2))-velCpu) {
                if (posCpuY >= 0) {
                    posCpuY-=velCpu
                }
            }
        }
        else {
            if ((posCpuY+(barraH/2))<(campoH/2)) {
                posCpuY+=velCpu
            }
            else if ((posCpuY+(barraH/2))>(campoH/2)) {
                posCpuY-=velCpu
            }                 
        }
        vcpu.style.top=posCpuY+'px'
    }
}

function controlaBola(){
    posBolaX+=velBola*bolaX
    posBolaY+=velBola*bolaY

    if ((posBolaX <= posJogadorX+barraW)&&((posBolaY+bolaH) >= posJogadorY)&&(posBolaY <= posJogadorY+barraH)) {
        bolaY=(((posBolaY+(bolaH/2))-(posJogadorY+(barraH/2)))/16)
        bolaX*=-1
    }
    
    if ((posBolaX >= posCpuX-barraW)&&(((posBolaY+bolaH) >= posCpuY)&&(posBolaY <= posCpuY+barraH))) {
        bolaY=(((posBolaY+(bolaH/2))-(posCpuY+(barraH/2)))/16)
        bolaX*=-1
    }

    if ((posBolaY >=480)||(posBolaY <= 0)) {
        bolaY*=-1
    }

    if (posBolaX >= (campoW-bolaW)) {
        velBola=0
        posBolaX=posBolaIniX
        posBolaY=posBolaIniY
        posJogadorY=posJogIniY
        posCpuY=posCpuIniY
        pontos++
        vPaineltxtPontos.value=pontos
        jogo=false
        vjogador.style.top=posJogadorY+'px'
        vcpu.style.top=posCpuY+'px'
    }
    else if (posBolaX <= 0) {
        velBola=0
        posBolaX=posBolaIniX
        posBolaY=posBolaIniY
        posJogadorY=posJogIniY
        posCpuY=posCpuIniY
        pontos--
        vPaineltxtPontos.value=pontos
        jogo=false
        vjogador.style.top=posJogadorY+'px'
        vcpu.style.top=posCpuY+'px'
    }

    vbola.style.top=posBolaY+'px'
    vbola.style.left=posBolaX+'px'
}

function teclaDw() {
    tecla=event.keyCode
    if (tecla==38) {
        dirJy=-1
    }
    else if (tecla==40) {
        dirJy=+1
    }
}

function teclaUp() {
    tecla=event.keyCode
    if (tecla==38) {
        dirJy=0
    }
    else if(tecla==40){
        dirJy=0
    }
}

function game(){
    if (jogo) {
        controlajog()
        controlaBola()
        controlacpu()
    }
    frames=requestAnimationFrame(game)
}

function iniciaJogo(){
    if (!jogo) {
        velBola=8
        velCpu=8
        velJogador=8
        cancelAnimationFrame(frames)
        jogo=true
        dirJy=0
        bolaX=0
        bolaY=0
        if((Math.random()*10)<5){
            bolaX=-1
        }
        else{
            bolaX=1
        }
        posJogadorX=10
        posCpuX=930
        posBolaX=posBolaIniX
        posBolaY=posBolaIniY
        posJogadorY=posJogIniY
        posCpuY=posCpuIniY
        game()
    }  
}

function inicializa(){
    velBola=8
    velCpu=8
    velJogador=8
    vbtIniciar=document.getElementById('btIniciar')
    vbtIniciar.addEventListener('click',iniciaJogo)
    vjogador=document.getElementById('dvJogador')
    vcpu=document.getElementById('dvCpu')
    vbola=document.getElementById('dvBola')
    vPaineltxtPontos=document.getElementById('txtPontos')
    document.addEventListener('keydown',teclaDw)
    document.addEventListener('keyup',teclaUp)
}
window.addEventListener('load',inicializa)