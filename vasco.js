let des = document.getElementById('des').getContext('2d')

let bg = new Bg(0,0,600,700, 'assets/gramado3.jpg')
let bg2 = new Bg2(0,-700,600,700, 'assets/gramado3.jpg')
let tres = new Tres(0,0,50,50, 'assets/trespTS.png')
let vasco = new Vasco(200,500,100,100,'assets/brasao_vasco.png')
let serie_c = new Serie_c(100,100,100,100,'assets/seriec.png')

let topo_serie = new Texto()
let texto_pontos = new Texto()
let texto_vidas = new Texto()
let val_pts = new Texto()
let val_vidas = new Texto()

let texto_game_over = new Texto()
let jogar = true

// let spider2 = new Obj(0,0,100,100,'darkorchid')

document.addEventListener('keydown', (event)=>{
 if(event.key === 'a'){
 // console.log('pressionado a tecla "a" ')
 vasco.dir = - 5
 }else if(event.key === 'd'){
 // console.log('pressionado a tecla "d" ')
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
 jogar = false
 }
}

function colisao(){
 if(vasco.colid(serie_c)){
 serie_c.recomeca()
 vasco.vidas -=1
 }
 if(vasco.colid(tres)){
tres.recomeca()
 vasco.pts +=3
 }
}

function desenha(){
 bg.desenha_obj()
 bg2.desenha_obj()
 
if(jogar){ 
 vasco.desenha_obj()
 serie_c.desenha_obj()
 tres.desenha_obj()
 texto_pontos.des_texto('Pontos: ',400,50, 'orange','30px Times')
 texto_vidas.des_texto('Vidas: ',40,50, 'orange','30px Times')
 topo_serie.des_texto('Série B ',250,100, 'orange','30px Times')
 val_pts.des_texto(vasco.pts,500,50, 'white','30px Times')
 val_vidas.des_texto(vasco.vidas,125,50, 'white','30px Times')
 }else{
 texto_game_over.des_texto('GAME OVER',148,350, 'red','50px Times')
 }
}

function atualiza(){
 bg.move(3,700,0)
 bg2.move(3,0,-700)
 if(jogar){
 vasco.move()
 serie_c.move()
 tres.move()
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