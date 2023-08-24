let des = document.getElementById('des').getContext('2d')

let bg = new Bg(0,0,600,700, 'assets/gramado3.jpg')
let bg2 = new Bg2(0,-700,600,700, 'assets/gramado3.jpg')
let tres = new Tres(0,0,50,50, 'assets/trespTS.png')
let tres2 = new Tres(300,300,50,50, 'assets/trespTS.png')
let vasco = new Vasco(200,500,100,100,'assets/brasao_vasco.png')
let serie_c = new Serie_c(100,100,100,100,'assets/seriec.png')
let serie_c2 = new Serie_c(200,200,100,100,'assets/seriec.png')
let topo_serie = new Texto()
let texto_pontos = new Texto()  
let texto_vidas = new Texto()
let val_pts = new Texto()
let val_vidas = new Texto()

let texto_game_over = new Texto()
let jogar = 1

// let spider2 = new Obj(0,0,100,100,'darkorchid')

document.addEventListener('keydown', (event)=>{
    if(event.key === 'a'){
        console.log('pressionado a tecla "a" ')
        vasco.dir = - 5
    }else if(event.key === 'd'){
        console.log('pressionado a tecla "d" ')
        vasco.dir = 5
    }
    
})
document.addEventListener('keyup', (event)=>{
    if(event.key === 'a'){
        // console.log('soltou a tecla "a" ')
        vasco.dir = 0
    }else if(event.key === 'd'){
        // console.log('soltou a tecla "d" ')
        vasco.dir = 0
    }
})

function game_over(){
    if(vasco.vidas <= 0){
        jogar = 4
    }
}

function colisao(){
    if(vasco.colid(serie_c)){
        serie_c.recomeca()
        vasco.vidas -=1
    }
    if(vasco.colid(serie_c2)){
        serie_c2.recomeca()
        vasco.vidas -=1
    }
    if(vasco.colid(tres)){
        tres.recomeca()
        vasco.pts +=3
    }
    if(vasco.colid(tres2)){
        tres2.recomeca()
        vasco.pts +=3
    }
    if(vasco.pts>=15){
        jogar = 2
    }
    if(vasco.pts>=30){
        jogar = 3
    }
}

function desenha(){
    bg.desenha_obj()
    bg2.desenha_obj()
    if(jogar==1){        
        vasco.desenha_obj()
        serie_c.desenha_obj()
        serie_c2.desenha_obj()
        tres.desenha_obj()
        tres2.desenha_obj()
        texto_pontos.des_texto('Pontos: ',326,40, 'orange','30px Times')
        texto_vidas.des_texto('Vidas: ',40,40, 'green','30px Times')
        topo_serie.des_texto('serie: B ',80,40, 'green','30px Times')
        val_pts.des_texto(vasco.pts,420,40, 'white','30px Times')
        val_vidas.des_texto(vasco.vidas,120,40, 'white','30px Times')
    }else if(jogar==2){
        vasco.desenha_obj()
        serie_c.desenha_obj()
        serie_c2.desenha_obj()
        tres.desenha_obj()
        tres2.desenha_obj()
        texto_pontos.des_texto('Pontos: ',326,40, 'orange','30px Times')
        texto_vidas.des_texto('Vidas: ',40,40, 'green','30px Times')
        topo_serie.des_texto('serie: B ',80,40, 'green','30px Times')
        val_pts.des_texto(vasco.pts,420,40, 'white','30px Times')
        val_vidas.des_texto(vasco.vidas,120,40, 'white','30px Times')
    }
    else if(jogar==3){
        vasco.desenha_obj()
        serie_c.desenha_obj()
        serie_c2.desenha_obj()
        tres.desenha_obj()
        tres2.desenha_obj()
        texto_pontos.des_texto('Pontos: ',326,40, 'orange','30px Times')
        texto_vidas.des_texto('Vidas: ',40,40, 'green','30px Times')
        topo_serie.des_texto('serie: B ',80,40, 'green','30px Times')
        val_pts.des_texto(vasco.pts,420,40, 'white','30px Times')
        val_vidas.des_texto(vasco.vidas,120,40, 'white','30px Times')
    }
        else{
        texto_game_over.des_texto('Game Over',128,350, 'green','50px Times')
    }
}

function atualiza(){
    bg.move(3,700,0)
    bg2.move(3,0,-700)
    if(jogar==1){
        vasco.move()
        serie_c.move(4)
        serie_c2.move(4)
        tres.move(4)
        tres2.move(4)
        colisao()
        game_over()
    }else if(jogar==2){
        vasco.move()
        serie_c.move(6)
        serie_c2.move(6)
        tres.move(6)
        tres2.move(6)
        colisao()
        game_over()
    }else if(jogar==3){
        vasco.move()
        serie_c.move(8)
        serie_c2.move(8)
        tres.move(8)
        tres2.move(8)
        colisao()
        game_over()
    }
    
}

function main(){
    des.clearRect(0,0,500,700)
    atualiza()
    desenha()
}

setInterval(main,10)