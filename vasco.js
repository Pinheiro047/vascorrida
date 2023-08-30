let des = document.getElementById('des').getContext('2d')
let bg = new Bg(0,0,600,700, 'assets/gramado3.jpg')
let bg2 = new Bg2(0,-700,600,700, 'assets/gramado3.jpg')
let tres = new Tres(0,0,50,50, 'assets/trespTS.png')
let tres2 = new Tres(300,300,50,50, 'assets/trespTS.png')
let vasco = new Vasco(200,500,100,100,'assets/brasao_vasco.png')
let serie_c = new Serie_c(500,100,100,100,'assets/seriec.png')
let serie_c2 = new Serie_c(100,200,100,100,'assets/seriec.png')
let serie_d = new Serie_d(500,100,100,100,'assets/seried.png')
let serie_d2= new Serie_d(100,200,100,100,'assets/seried.png')
let serie_b = new Serie_b(500,100,100,100,'assets/serieb.png')
let serie_b2= new Serie_b(100,200,100,100,'assets/serieb.png')
let topo_serie = new Texto()
let texto_pontos = new Texto()  
let texto_vidas = new Texto()
let val_pts = new Texto()
let val_vidas = new Texto()

let texto_game_over = new Texto()
let jogar = 1
let texto_you_win = new Texto()

// let spider2 = new Obj(0,0,100,100,'darkorchid')

//definição d instancia de som
const som1 = new Audio('assets/b_pra_a.mp3')
som1.volume = 1.0


const som2 = new Audio('assets/a_pra_b.mp3')
som2.volume = 1.0

const som3 = new Audio('assets/colisao_seriec.mp3')
som3.volume = 1.0

const som4 = new Audio('assets/ganharjogo.mp3')
som4.volume = 1.0

const som5 = new Audio('assets/perderjogo2.mp3')
som5.volume = 1.0

const som6 = new Audio('assets/colisao3pts.mp3')
som6.volume = 1.0

const som7 = new Audio('assets/colisao3pts.mp3')
som7.volume = 0.0

// let spider2 = new Obj(0,0,100,100,'darkorchid')

document.addEventListener('keydown', (event)=>{
    if(event.key === 'a'){
        // console.log('pressionado a tecla "a" ')
        vasco.dir = - 5
    }else if(event.key === 'd'){
        // console.log('pressionado a tecla "d" ')
        vasco.dir = 5
    }

    som7.play()
})
document.addEventListener('keyup', (event)=>{
    if(event.key === 'a'){
        // console.log('soltou a tecla "a" ')
        vasco.dir = 0
    }else if(event.key === 'd'){
        // console.log('soltou a tecla "d" ')
        vasco.dir = 0
    }
    som7.play()
})

function game_over(){
    if(vasco.vidas <= 0){
        som5.play()
        jogar = 4
    }
}

function you_win(){
    if(vasco.pts >= 90 ){
        som6.play()
        jogar = 5
    }
}

function colisao(){
    if(vasco.colid(serie_d)){
        som3.play()
        serie_d.recomeca()
        vasco.vidas -=1
    }
    if(vasco.colid(serie_c)){
        som3.play()
        serie_c.recomeca()
        vasco.vidas -=1
    }
    if(vasco.colid(serie_c2)){
        som3.play()
        serie_c2.recomeca()
        vasco.vidas -=1
    }
    if(vasco.colid(serie_b)){
        som3.play()
        serie_b.recomeca()
        vasco.vidas -=1
    }
    if(vasco.colid(serie_b2)){
        som3.play()
        serie_b2.recomeca()
        vasco.vidas -=1
    }
    if(vasco.colid(serie_d2)){
       som3.play()
        serie_d2.recomeca()
        vasco.vidas -=1
    }
    if(vasco.colid(tres)){
        som6.play()
        tres.recomeca()
        vasco.pts +=3
    }
    if(vasco.colid(tres2)){
        tres2.recomeca()
        vasco.pts +=3
    }
    if(vasco.pts>=21){
        jogar = 2
    }
    if(vasco.pts>=45){
        jogar = 3
    }
}

function desenha(){
    bg.desenha_obj()
    bg2.desenha_obj()
    if(jogar==1){        
        vasco.desenha_obj()
        serie_d.desenha_obj()
        serie_d2.desenha_obj()
        tres.desenha_obj()
        tres2.desenha_obj()
        texto_pontos.des_texto('Pontos: ',400,50, 'orange','30px Times')
        texto_vidas.des_texto('Vidas: ',40,50, 'orange','30px Times')
        topo_serie.des_texto('Série C ',250,100, 'white','30px Times')
        val_pts.des_texto(vasco.pts,500,50, 'white','30px Times')
        val_vidas.des_texto(vasco.vidas,125,50, 'white','30px Times')
        } if(jogar==2){
            vasco.desenha_obj()
            serie_c.desenha_obj()
            serie_c2.desenha_obj()
            tres.desenha_obj()
            tres2.desenha_obj()
            texto_pontos.des_texto('Pontos: ',400,50, 'orange','30px Times')
            texto_vidas.des_texto('Vidas: ',40,50, 'orange','30px Times')
            topo_serie.des_texto('Série B ',250,100, 'white','30px Times')
            val_pts.des_texto(vasco.pts,500,50, 'white','30px Times')
            val_vidas.des_texto(vasco.vidas,125,50, 'white','30px Times')
    }
     if(jogar==3){
        vasco.desenha_obj()
        serie_b.desenha_obj()
        serie_b2.desenha_obj()
        tres.desenha_obj()
        tres2.desenha_obj()
        texto_pontos.des_texto('Pontos: ',400,50, 'orange','30px Times')
        texto_vidas.des_texto('Vidas: ',40,50, 'orange','30px Times')
        topo_serie.des_texto('Série A ',250,100, 'white','30px Times')
        val_pts.des_texto(vasco.pts,500,50, 'white','30px Times')
        val_vidas.des_texto(vasco.vidas,125,50, 'white','30px Times')
    }
    if(jogar==4){
            texto_game_over.des_texto('GAME OVER',148,350, 'white','50px Times') 
        }
    if(jogar==5){
            texto_you_win.des_texto('O VASCO É GIGANTE!',60,350, 'white','50px Times')
        }
}     

function atualiza(){
    bg.move(3,700,0)
    bg2.move(3,0,-700)
    if(jogar==1){
        vasco.move()
        serie_d.move(2)
        serie_d2.move(2)
        tres.move(2)
        tres2.move(2)
        colisao()
        game_over()
    }else if(jogar==2){
        vasco.move()
        serie_c.move(3.5)
        serie_c2.move(3.5)
        tres.move(3.5)
        tres2.move(3.5)
        colisao()
        game_over()
    }else if(jogar==3){
        vasco.move()
        serie_b.move(6)
        serie_b2.move(6)
        tres.move(6)
        tres2.move(6)
        colisao()
        game_over()
        you_win()
    }
    
}
function main(){
    des.clearRect(0,0,500,700)
    atualiza()
    desenha()
}
setInterval(main,10)